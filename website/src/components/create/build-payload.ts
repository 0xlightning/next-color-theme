import type { DesignSystemConfig } from "@/registry/types"
import { getBaseColor, getAccent, resolveRadiusValue, getStyle } from "@/registry"

type Payload = {
  componentsJson: string
  globalsCss: string
  tailwindSnippet: string
}

function formatVarBlock(vars: Record<string, string>, indent: string) {
  return Object.entries(vars)
    .filter(([, value]) => Boolean(value))
    .map(([key, value]) => `${indent}--${key}: ${value};`)
    .join("\n")
}

/**
 * Build the three text blocks the Copy button writes to the clipboard.
 * Pure function — no DOM, no React. Easy to test.
 */
export function buildPayload(config: DesignSystemConfig): Payload {
  const base = getBaseColor(config.baseColor)
  const accent = getAccent(config.accent)
  const radiusValue = resolveRadiusValue(config.radius)
  const style = getStyle(config.style)

  if (!base) {
    throw new Error(`Unknown base color "${config.baseColor}"`)
  }
  if (!accent) {
    throw new Error(`Unknown accent "${config.accent}"`)
  }

  // Accent overrides --primary and --primary-foreground on top of base colors.
  const accentLight: Record<string, string> = {
    ...base.light,
    primary: accent.primary,
    "primary-foreground": accent.primaryForeground,
    accent: accent.primary,
    "accent-foreground": accent.primaryForeground,
  }
  const accentDark: Record<string, string> = {
    ...base.dark,
    primary: accent.primary,
    "primary-foreground": accent.primaryForeground,
    accent: accent.primary,
    "accent-foreground": accent.primaryForeground,
  }

  const componentsJson = JSON.stringify(
    {
      $schema: "https://ui.shadcn.com/schema.json",
      style: "base-luma",
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

  const globalsCss = `:root {
${formatVarBlock({ ...accentLight, radius: radiusValue }, "  ")}
}

.dark {
${formatVarBlock(accentDark, "  ")}
}
`

  const tailwindSnippet = `// tailwind.config.ts — theme tokens
colors: {
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
  primary: 'hsl(var(--primary))',
  'primary-foreground': 'hsl(var(--primary-foreground))',
  // ...
  border: 'hsl(var(--border))',
},
borderRadius: {
  lg: 'var(--radius)',
  md: 'calc(var(--radius) - 2px)',
  sm: 'calc(var(--radius) - 4px)',
},
// Style: ${style?.label ?? config.style}
`

  return { componentsJson, globalsCss, tailwindSnippet }
}

export function formatClipboardText(payload: Payload): string {
  return `<!-- components.json -->
${payload.componentsJson}

<!-- app/globals.css -->
${payload.globalsCss}

<!-- tailwind.config.ts -->
${payload.tailwindSnippet}`
}