import type { Style } from "./types"

/**
 * Style catalog — 8 named styles mirroring shadcn's catalog.
 * Each style adjusts font and wrapper class. Tailwind utilities drive the
 * visual difference; this map is what the picker reads from.
 */
export const STYLES: Style[] = [
  {
    name: "luma",
    label: "Luma",
    description: "Rounded, friendly, generous spacing.",
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
  },
  {
    name: "lyra",
    label: "Lyra",
    description: "Square edges, monospace headings.",
    fontFamily: "var(--font-jetbrains-mono), monospace",
    headingFontFamily: "var(--font-jetbrains-mono), monospace",
    wrapperClassName: "rounded-none",
  },
  {
    name: "maia",
    label: "Maia",
    description: "Soft pastel accent, generous radius.",
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
    wrapperClassName: "[--radius:0.875rem]",
  },
  {
    name: "mira",
    label: "Mira",
    description: "Compact density, sharp corners.",
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
    wrapperClassName: "[--radius:0.25rem]",
  },
  {
    name: "nova",
    label: "Nova",
    description: "Default density, modern sans.",
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
  },
  {
    name: "rhea",
    label: "Rhea",
    description: "Display serif headings, calm body.",
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    headingFontFamily:
      "'EB Garamond', Georgia, 'Times New Roman', serif",
  },
  {
    name: "sera",
    label: "Sera",
    description: "Warm earth tones, serif headings.",
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
    headingFontFamily:
      "'EB Garamond', Georgia, 'Times New Roman', serif",
  },
  {
    name: "vega",
    label: "Vega",
    description: "Sharp, minimal, monospace everywhere.",
    fontFamily: "var(--font-jetbrains-mono), monospace",
  },
]

export function getStyle(name: string): Style | undefined {
  return STYLES.find((s) => s.name === name)
}
