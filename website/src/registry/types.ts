/**
 * Registry types — single source of truth for the /create customizer.
 * Mirrors the public shadcn create surface but scoped to this dashboard's
 * CSS variable contract.
 */

export type CssVars = Record<string, string>

export type BaseColor = {
  /** Machine name used in components.json + URL params */
  name: string
  /** Display label */
  label: string
  /** Hex sample shown on the swatch in the picker */
  swatch: string
  /** Light-mode CSS vars (overrides for the .theme-scope wrapper) */
  light: CssVars
  /** Dark-mode CSS vars */
  dark: CssVars
}

export type Accent = {
  name: string
  label: string
  swatch: string
  /** Primary color in oklch */
  primary: string
  /** Primary-foreground in oklch */
  primaryForeground: string
}

export type Style = {
  name: string
  label: string
  description: string
  /** Font family used for body */
  fontFamily: string
  /** Font family used for headings; undefined means inherit body */
  headingFontFamily?: string
  /** Tailwind classes layered onto the .theme-scope wrapper */
  wrapperClassName?: string
}

export type FontValue =
  | "geist"
  | "inter"
  | "noto-sans"
  | "jetbrains-mono"
  | "eb-garamond"

export type FontOption = {
  value: FontValue | "inherit"
  label: string
  family: string
  type: "sans" | "serif" | "mono"
}

export type IconLibraryValue = "tabler" | "lucide"

/**
 * Which primitive library the *exported* code targets. The live preview
 * always renders `@base-ui/react`; this only retargets `components.json`
 * and the install command emitted by `build-payload.ts`.
 */
export type LibraryValue = "base-ui" | "radix"

export type LibraryOption = {
  value: LibraryValue
  label: string
  /** shadcn `style` written into the exported components.json. */
  style: string
  description: string
}

export type IconLibraryOption = {
  value: IconLibraryValue
  label: string
}

export type Mode = "light" | "dark"

export type RadiusName = "none" | "small" | "medium" | "large" | "round"

export type RadiusOption = {
  name: RadiusName
  label: string
  value: string
}

export type ThemeName =
  | "neutral"
  | "blue"
  | "green"
  | "orange"
  | "violet"
  | "rose"
  | "cyan"
  | "lime"

export type ThemeOption = {
  name: ThemeName
  label: string
  swatch: string
}

export type MenuColorValue =
  | "default"
  | "default-translucent"
  | "inverted"
  | "inverted-translucent"

export type MenuColorOption = {
  value: MenuColorValue
  label: string
}

export type MenuAccentValue = "subtle" | "bold"

export type MenuAccentOption = {
  value: MenuAccentValue
  label: string
}

export type DesignSystemConfig = {
  baseColor: string
  accent: string
  style: string
  font: FontValue
  fontHeading: FontValue | "inherit"
  iconLibrary: IconLibraryValue
  mode: Mode
  radius: RadiusName
  theme: ThemeName
  chartColor: ThemeName
  menuColor: MenuColorValue
  menuAccent: MenuAccentValue
  library: LibraryValue
}
