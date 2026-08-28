import type { DesignSystemConfig } from "@/registry/types"
import {
  getBaseColor,
  getAccent,
  resolveRadiusValue,
  getStyle,
  getFont,
  getChartPalette,
  getLibrary,
} from "@/registry"

type Payload = {
  componentsJson: string
  globalsCss: string
  installCommand: string
}

/** Resolved token set for one config, split by mode. */
export type ThemeVars = {
  light: Record<string, string>
  dark: Record<string, string>
  /** Emitted once — they do not vary by mode. */
  shared: Record<string, string>
}

/** `[--radius:0.875rem]`-style arbitrary property smuggled through a style's
 *  `wrapperClassName`. Styles use it to override the radius scale wholesale. */
const RADIUS_CLASS_PATTERN = /\[--radius:([^\]]+)\]/

/**
 * The single source of truth for "config → CSS custom properties".
 *
 * Both the live preview (`theme-scope.tsx`) and the exported `globals.css`
 * read this, so what the user sees is exactly what they copy. Accent
 * overrides `--primary` / `--accent` on top of the base color in both modes;
 * chart swatches and typography are mode-agnostic.
 */
export function buildThemeVars(config: DesignSystemConfig): ThemeVars | null {
  const base = getBaseColor(config.baseColor)
  const accent = getAccent(config.accent)
  if (!base || !accent) {
    return null
  }

  const style = getStyle(config.style)
  const font = getFont(config.font)
  const headingFont =
    config.fontHeading === "inherit" ? font : getFont(config.fontHeading)
  const palette = getChartPalette(config.chartColor)

  // A style may pin the radius through its wrapper class; that override wins
  // over the radius picker, matching how the preview wrapper resolves it.
  const styleRadius = style?.wrapperClassName?.match(RADIUS_CLASS_PATTERN)?.[1]
  const radius = styleRadius?.trim() || resolveRadiusValue(config.radius)

  const accentOverrides = {
    primary: accent.primary,
    "primary-foreground": accent.primaryForeground,
    accent: accent.primary,
    "accent-foreground": accent.primaryForeground,
  }

  const shared: Record<string, string> = {
    ...Object.fromEntries(
      (palette?.swatches ?? []).map((swatch, i) => [`chart-${i + 1}`, swatch])
    ),
    "font-sans": font?.family ?? "var(--font-geist-sans), system-ui, sans-serif",
    "font-heading":
      style?.headingFontFamily ??
      headingFont?.family ??
      "var(--font-heading), inherit",
    radius,
  }

  return {
    light: { ...base.light, ...accentOverrides },
    dark: { ...base.dark, ...accentOverrides },
    shared,
  }
}

/**
 * The preview refers to fonts through `var(--font-geist-sans)` etc., which
 * `app/layout.tsx` defines via next/font. A project pasting the exported CSS
 * has no such variable, and `var(--undefined), sans-serif` is invalid at
 * computed-value time — the whole declaration would be dropped and the font
 * would silently disappear. So the export names the family literally and
 * keeps the original fallback stack.
 */
function exportFamily(family: string, label: string): string {
  if (!family.startsWith("var(")) {
    return family
  }
  const tail = family.slice(family.indexOf(")") + 1).replace(/^\s*,\s*/, "")
  return tail ? `"${label}", ${tail}` : `"${label}"`
}

/** `{ background: "oklch(…)" }` → `  --background: oklch(…);` lines. */
export function formatVarBlock(
  vars: Record<string, string>,
  indent: string
): string {
  return Object.entries(vars)
    .filter(([, value]) => Boolean(value))
    .map(([key, value]) => `${indent}--${key}: ${value};`)
    .join("\n")
}

/** Mirrors the `@theme inline` block in `app/globals.css` so the exported
 *  file works standalone in a fresh Tailwind v4 project. */
const THEME_INLINE = `@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
  --font-sans: var(--font-sans);
  --font-heading: var(--font-heading);
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 1.4);
  --radius-2xl: calc(var(--radius) * 1.8);
  --radius-3xl: calc(var(--radius) * 2.2);
  --radius-4xl: calc(var(--radius) * 2.6);
}`

/**
 * Build the blocks the Get Code dialog shows. Pure — no DOM, no React.
 *
 * `components` is the user's picked shadcn component list; it only affects
 * `installCommand`.
 */
export function buildPayload(
  config: DesignSystemConfig,
  components: readonly string[] = []
): Payload {
  const vars = buildThemeVars(config)
  if (!vars) {
    throw new Error(
      `Unknown base color "${config.baseColor}" or accent "${config.accent}"`
    )
  }

  const bodyFont = getFont(config.font)
  const headingFont =
    config.fontHeading === "inherit" ? bodyFont : getFont(config.fontHeading)

  // Self-contained font stacks for the exported file (see exportFamily).
  const exportedFonts: Record<string, string> = {}
  if (bodyFont) {
    exportedFonts["font-sans"] = exportFamily(bodyFont.family, bodyFont.label)
  }
  if (headingFont) {
    exportedFonts["font-heading"] = exportFamily(
      headingFont.family,
      headingFont.label
    )
  }

  const library = getLibrary(config.library) ?? {
    value: config.library,
    label: config.library,
    style: "base-luma",
    description: "",
  }

  const componentsJson = JSON.stringify(
    {
      $schema: "https://ui.shadcn.com/schema.json",
      style: library.style,
      rsc: false,
      tsx: true,
      tailwind: {
        config: "",
        css: "app/globals.css",
        baseColor: config.baseColor,
        cssVariables: true,
        prefix: "",
      },
      iconLibrary: config.iconLibrary,
      aliases: {
        components: "@/components",
        utils: "@/lib/utils",
        ui: "@/components/ui",
        lib: "@/lib",
        hooks: "@/hooks",
      },
    },
    null,
    2
  )

  const fontNote = [bodyFont?.label, headingFont?.label]
    .filter((label, i, all) => label && all.indexOf(label) === i)
    .join(" and ")

  const globalsCss = `/* Generated by Next Color Theme — Tailwind v4.
   Paste this over your app/globals.css.
   Load ${fontNote || "your fonts"} yourself (next/font or Google Fonts);
   this file only references the families by name. */
@import "tailwindcss";

@custom-variant dark (&:is(.dark *));

:root {
${formatVarBlock({ ...vars.light, ...vars.shared, ...exportedFonts }, "  ")}
}

.dark {
${formatVarBlock(vars.dark, "  ")}
}

${THEME_INLINE}

@layer base {
  * {
    border-color: var(--border);
  }
  body {
    background-color: var(--background);
    color: var(--foreground);
    font-family: var(--font-sans);
  }
}
`

  const add =
    components.length > 0
      ? `npx shadcn@latest add ${components.join(" ")}`
      : `# Pick components in the Components tab to fill this in.\nnpx shadcn@latest add button card input`

  const installCommand = `# Target: ${library.label}${
    library.description ? ` — ${library.description}` : ""
  }
npx shadcn@latest init --base-color ${config.baseColor}

${add}
`

  return { componentsJson, globalsCss, installCommand }
}

export function formatClipboardText(payload: Payload): string {
  return `/* ---- components.json ---- */
${payload.componentsJson}

/* ---- app/globals.css ---- */
${payload.globalsCss}

/* ---- install ---- */
${payload.installCommand}`
}
