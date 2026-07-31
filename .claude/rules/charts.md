---
paths: website/src/components/charts/**
---

# Chart Wrappers — Recharts Primitives

Applies to every file under `website/src/components/charts/`. There are 7 wrappers. Pick the right one; don't hand-roll a new ad-hoc Recharts component in a widget.

## The 7 wrappers

| Wrapper | Recharts primitive | Whether real Recharts | When to use |
|---|---|---|---|
| `AreaChart` | none directly — passes `data` to internal `<Chart type="area">` | indirect | Time-series area in a widget |
| `BarChart` | indirect — `<Chart type="bar">` | indirect | Time-series bars in a widget |
| `DonutChart` | indirect — `<Chart type="donut">` | indirect | Categorical shares (parts of a whole) |
| `LineChart` | indirect — `<Chart type="line">` | indirect | Time-series line in a widget |
| `MiniBarChart` | `ResponsiveContainer` + `BarChart` + `Bar` | yes | Inline row-internal mini bar |
| `Sparkline` | `ResponsiveContainer` + `LineChart` + `Line` | yes | Inline row-internal sparkline |
| `ProgressRing` | **none** — pure inline `<svg>` + 2 circles | no | Numeric percentage (0–100) |

## Prop contracts

### AreaChart / BarChart / DonutChart / LineChart (pass-throughs)

All 4 share the same minimal surface:

```tsx
function AreaChart({ data: unknown }) { /* forwards to internal <Chart type="…"> */ }
```

- Only `data` is exposed. Anything else (Recharts props, gradient stops, custom tooltip) is forwarded via the internal `Chart` wrapper — not through these wrappers.
- If you need a custom Recharts prop, edit the internal `Chart` component or use a wrapper that does take more props. Don't bypass these wrappers by importing Recharts directly into a widget.

### MiniBarChart

```tsx
type MiniBarChartProps = {
  data: number[] | { value: number }[];
  color?: string;        // default 'var(--primary)'
  width?: number | string; // default 100
  height?: number | string; // default 35
}
```

- Accepts raw numbers OR `{ value }` objects — normalizes to `{ value, id }` internally.
- Palette is `var(--primary)` by default. Pass a token string (`'var(--chart-3)'`) to override.
- No `className` prop. The outer wrapper is fixed at `h-full w-full`.

### Sparkline

```tsx
type SparklineProps = {
  data: number[] | { value: number }[];
  color?: string;        // default 'var(--primary)'
  width?: number | string; // default 120
  height?: number | string; // default 30
}
```

- Same input leniency as `MiniBarChart`.
- `type="monotone"`, `dot={false}`, `strokeWidth=1.5` are baked in.
- No `className` prop.

### ProgressRing

```tsx
type ProgressRingProps = {
  value: number;          // clamped 0–100
  size?: number;          // default 60
  strokeWidth?: number;   // default 6
  className?: string;
}
```

- The only chart wrapper that accepts `className` (applied to the outer wrapper div).
- Track stroke `stroke-muted/30`, progress stroke `stroke-primary`, rounded linecap, 300ms ease-in-out transition, label "X%" inside the ring.
- Animates via `stroke-dashoffset` transition, not Recharts.

## Mapping widget patterns to wrappers

| Widget pattern | Wrapper |
|---|---|
| Single KPI ring (savings target, portfolio %) | `ProgressRing` |
| Categorical portfolio breakdown | `DonutChart` |
| Time-series revenue over months | `AreaChart` (or `LineChart` for less fill) |
| Time-series bars (monthly contributions) | `BarChart` |
| Row-internal mini bar (one bar per dividend row) | `MiniBarChart` |
| Row-internal sparkline (one sparkline per stock row) | `Sparkline` |
| Full dashboard chart with custom series | generic `Chart` from `@/components/ui/chart` (only `RevenueChart` uses this) |

## Palette convention

- `MiniBarChart` and `Sparkline` default to `var(--primary)`. Use chart tokens (`var(--chart-1)` … `var(--chart-5)`) for multi-series color.
- The four pass-throughs (`AreaChart` / `BarChart` / `DonutChart` / `LineChart`) defer to the internal `Chart` wrapper's color config.
- `ProgressRing` palette is hardcoded — track `stroke-muted/30`, progress `stroke-primary`. If you need a different palette, fork the component (last resort) or add a `color` prop.

## Don't

- ❌ Don't import `recharts` directly into a widget. Use the wrappers.
- ❌ Don't add a new wrapper unless the pattern appears ≥3 times. Reuse first.
- ❌ Don't hardcode hex inside a chart wrapper. Use `var(--…)` tokens.
- ❌ Don't pass `className` to `MiniBarChart` / `Sparkline` / the 4 pass-throughs — they don't accept it.
- ❌ Don't wrap a `ProgressRing` in a Recharts `<ChartContainer>` — it's already `<svg>`-only.

## Adding a new wrapper

1. Confirm the pattern is used ≥3 times across widgets.
2. Match the file naming: kebab-case folder + PascalCase export? No — these are flat files (`MiniBarChart.tsx`). Follow the existing convention.
3. Add a typed prop interface with explicit types (no `any`).
4. Use `cn()` from `@/lib/utils` for any class composition.
5. Re-export from `src/components/charts/index.ts` if a barrel exists; otherwise import directly.
6. Document the new wrapper in this file.
