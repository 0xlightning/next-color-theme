import type { Accent } from "./types"

/**
 * Accent colors — applied via overrides on the active base color's
 * `--chart-1..5` and `--primary` slots. Each accent overrides primary +
 * chart-1 so the dashboard reads as tinted by this accent.
 */
export const ACCENTS: Accent[] = [
  {
    name: "default",
    label: "Default",
    swatch: "#525252",
    primary: "oklch(0.205 0 0)",
    primaryForeground: "oklch(0.985 0 0)",
  },
  {
    name: "blue",
    label: "Blue",
    swatch: "#2563eb",
    primary: "oklch(0.546 0.215 262.881)",
    primaryForeground: "oklch(0.97 0.014 254.604)",
  },
  {
    name: "green",
    label: "Green",
    swatch: "#16a34a",
    primary: "oklch(0.648 0.15 144.5)",
    primaryForeground: "oklch(0.977 0.014 154.4)",
  },
  {
    name: "orange",
    label: "Orange",
    swatch: "#ea580c",
    primary: "oklch(0.646 0.198 41.115)",
    primaryForeground: "oklch(0.981 0.019 73.684)",
  },
  {
    name: "violet",
    label: "Violet",
    swatch: "#7c3aed",
    primary: "oklch(0.541 0.214 292.717)",
    primaryForeground: "oklch(0.969 0.016 293.756)",
  },
  {
    name: "rose",
    label: "Rose",
    swatch: "#e11d48",
    primary: "oklch(0.586 0.232 17.585)",
    primaryForeground: "oklch(0.969 0.015 12.422)",
  },
]

export function getAccent(name: string): Accent | undefined {
  return ACCENTS.find((a) => a.name === name)
}
