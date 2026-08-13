import type { ThemeName } from "./types"

/**
 * Chart palettes — five `oklch(...)` swatches per theme, surfaced as
 * `--chart-1` … `--chart-5` inside `.theme-scope` by `theme-scope.tsx`.
 * Values are tuned to be readable on both the light and dark card surface
 * defined by the base colors in `base-colors.ts`.
 */
export type ChartPalette = {
  name: ThemeName
  /** Ordered brightest → dimmest. Index 0 → --chart-1, index 4 → --chart-5. */
  swatches: [string, string, string, string, string]
}

export const CHART_PALETTES: ChartPalette[] = [
  {
    name: "neutral",
    swatches: [
      "oklch(0.92 0.004 286)",
      "oklch(0.78 0.006 286)",
      "oklch(0.6 0.008 286)",
      "oklch(0.42 0.01 286)",
      "oklch(0.27 0.012 286)",
    ],
  },
  {
    name: "blue",
    swatches: [
      "oklch(0.92 0.06 250)",
      "oklch(0.78 0.13 250)",
      "oklch(0.62 0.18 250)",
      "oklch(0.48 0.2 250)",
      "oklch(0.36 0.18 250)",
    ],
  },
  {
    name: "green",
    swatches: [
      "oklch(0.92 0.08 150)",
      "oklch(0.8 0.15 150)",
      "oklch(0.66 0.18 150)",
      "oklch(0.52 0.17 150)",
      "oklch(0.4 0.14 150)",
    ],
  },
  {
    name: "orange",
    swatches: [
      "oklch(0.92 0.08 60)",
      "oklch(0.8 0.16 60)",
      "oklch(0.7 0.2 50)",
      "oklch(0.6 0.22 40)",
      "oklch(0.48 0.2 35)",
    ],
  },
  {
    name: "violet",
    swatches: [
      "oklch(0.92 0.05 295)",
      "oklch(0.8 0.13 295)",
      "oklch(0.66 0.19 295)",
      "oklch(0.52 0.22 295)",
      "oklch(0.4 0.2 295)",
    ],
  },
  {
    name: "rose",
    swatches: [
      "oklch(0.92 0.06 15)",
      "oklch(0.8 0.15 15)",
      "oklch(0.66 0.2 15)",
      "oklch(0.54 0.22 15)",
      "oklch(0.42 0.2 15)",
    ],
  },
  {
    name: "cyan",
    swatches: [
      "oklch(0.92 0.06 215)",
      "oklch(0.8 0.13 215)",
      "oklch(0.66 0.17 215)",
      "oklch(0.52 0.18 215)",
      "oklch(0.4 0.15 215)",
    ],
  },
  {
    name: "lime",
    swatches: [
      "oklch(0.95 0.12 130)",
      "oklch(0.85 0.18 130)",
      "oklch(0.72 0.2 130)",
      "oklch(0.6 0.18 130)",
      "oklch(0.46 0.14 130)",
    ],
  },
]

export function getChartPalette(name: string): ChartPalette | undefined {
  return CHART_PALETTES.find((p) => p.name === name)
}
