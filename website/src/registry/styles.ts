import type { Style } from "./types"

/**
 * Style catalog — 8 named styles mirroring shadcn's catalog.
 *
 * A style is a *preset*: selecting one seeds `font`, `fontHeading` and the
 * radius onto the config (see `style-picker.tsx`). It does not override the
 * config afterwards, so the font pickers remain authoritative.
 *
 * Radius is carried as an arbitrary `[--radius:…]` property in
 * `wrapperClassName`; `buildThemeVars` extracts it. Plain utilities such as
 * `rounded-none` do not work here — the class lands on the scope wrapper, not
 * on the descendants that draw the corners.
 */
export const STYLES: Style[] = [
  {
    name: "luma",
    label: "Luma",
    description: "Rounded, friendly, generous spacing.",
    font: "geist",
    fontHeading: "eb-garamond",
    wrapperClassName: "[--radius:0.75rem]",
  },
  {
    name: "lyra",
    label: "Lyra",
    description: "Square edges, monospace headings.",
    font: "jetbrains-mono",
    fontHeading: "jetbrains-mono",
    wrapperClassName: "[--radius:0rem]",
  },
  {
    name: "maia",
    label: "Maia",
    description: "Soft pastel accent, generous radius.",
    font: "geist",
    fontHeading: "inherit",
    wrapperClassName: "[--radius:0.875rem]",
  },
  {
    name: "mira",
    label: "Mira",
    description: "Compact density, sharp corners.",
    font: "geist",
    fontHeading: "inherit",
    wrapperClassName: "[--radius:0.25rem]",
  },
  {
    name: "nova",
    label: "Nova",
    description: "Default density, modern sans.",
    font: "inter",
    fontHeading: "inherit",
    wrapperClassName: "[--radius:0.45rem]",
  },
  {
    name: "rhea",
    label: "Rhea",
    description: "Display serif headings, calm body.",
    font: "inter",
    fontHeading: "eb-garamond",
    wrapperClassName: "[--radius:0.45rem]",
  },
  {
    name: "sera",
    label: "Sera",
    description: "Warm earth tones, serif headings.",
    font: "noto-sans",
    fontHeading: "eb-garamond",
    wrapperClassName: "[--radius:0.625rem]",
  },
  {
    name: "vega",
    label: "Vega",
    description: "Sharp, minimal, monospace everywhere.",
    font: "jetbrains-mono",
    fontHeading: "jetbrains-mono",
    wrapperClassName: "[--radius:0.125rem]",
  },
]

export function getStyle(name: string): Style | undefined {
  return STYLES.find((s) => s.name === name)
}
