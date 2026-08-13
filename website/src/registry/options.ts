import type {
  FontOption,
  IconLibraryOption,
  RadiusOption,
  ThemeOption,
  MenuColorOption,
  MenuAccentOption,
} from "./types"

export const FONTS: FontOption[] = [
  {
    value: "geist",
    label: "Geist",
    family: "var(--font-geist-sans), system-ui, sans-serif",
    type: "sans",
  },
  {
    value: "inter",
    label: "Inter",
    family: "var(--font-inter), system-ui, sans-serif",
    type: "sans",
  },
  {
    value: "noto-sans",
    label: "Noto Sans",
    family: "var(--font-noto-sans), system-ui, sans-serif",
    type: "sans",
  },
  {
    value: "jetbrains-mono",
    label: "JetBrains Mono",
    family: "var(--font-jetbrains-mono), monospace",
    type: "mono",
  },
  {
    value: "eb-garamond",
    label: "EB Garamond",
    family: "'EB Garamond', Georgia, 'Times New Roman', serif",
    type: "serif",
  },
]

export const FONT_HEADING_OPTIONS: FontOption[] = [
  { value: "inherit", label: "Same as body", family: "inherit", type: "sans" },
  ...FONTS,
]

export const ICON_LIBRARIES: IconLibraryOption[] = [
  { value: "tabler", label: "Tabler Icons" },
  { value: "lucide", label: "Lucide" },
]

export const RADII: RadiusOption[] = [
  { name: "none", label: "None", value: "0" },
  { name: "small", label: "Small", value: "0.45rem" },
  { name: "medium", label: "Medium", value: "0.625rem" },
  { name: "large", label: "Large", value: "0.875rem" },
  { name: "round", label: "Round", value: "1.5rem" },
]

/**
 * Theme catalog — pairs with the active base color's `--primary` slot. Each
 * theme carries a hex swatch used as the right-side indicator dot in the
 * picker. Colors here mirror the screenshot's presets (cyan, lime, …).
 */
export const THEMES: ThemeOption[] = [
  { name: "neutral", label: "Neutral", swatch: "#9ca3af" },
  { name: "blue", label: "Blue", swatch: "#2563eb" },
  { name: "green", label: "Green", swatch: "#16a34a" },
  { name: "orange", label: "Orange", swatch: "#ea580c" },
  { name: "violet", label: "Violet", swatch: "#7c3aed" },
  { name: "rose", label: "Rose", swatch: "#e11d48" },
  { name: "cyan", label: "Cyan", swatch: "#0099b5" },
  { name: "lime", label: "Lime", swatch: "#78d600" },
]

export const CHART_COLORS: ThemeOption[] = THEMES

/**
 * Menu color — combines a color choice (default / inverted) with a surface
 * choice (solid / translucent). The label is rendered as "Color / Surface"
 * to match the screenshot's "Inverted / Solid" wording.
 */
export const MENU_COLORS: MenuColorOption[] = [
  { value: "default", label: "Default / Solid" },
  { value: "default-translucent", label: "Default / Translucent" },
  { value: "inverted", label: "Inverted / Solid" },
  { value: "inverted-translucent", label: "Inverted / Translucent" },
]

export const MENU_ACCENTS: MenuAccentOption[] = [
  { value: "subtle", label: "Subtle" },
  { value: "bold", label: "Bold" },
]

export const DEFAULT_RADIUS_VALUE = "0.45rem"

export function getFont(value: string): FontOption | undefined {
  return FONTS.find((f) => f.value === value)
}

export function getRadius(name: string): RadiusOption | undefined {
  return RADII.find((r) => r.name === name)
}

export function resolveRadiusValue(name: string): string {
  if (name === "none") {
    return "0"
  }
  const radius = getRadius(name)
  return radius?.value ?? DEFAULT_RADIUS_VALUE
}

export function getTheme(name: string): ThemeOption | undefined {
  return THEMES.find((t) => t.name === name)
}

export function getMenuColor(value: string): MenuColorOption | undefined {
  return MENU_COLORS.find((m) => m.value === value)
}

export function getMenuAccent(value: string): MenuAccentOption | undefined {
  return MENU_ACCENTS.find((m) => m.value === value)
}
