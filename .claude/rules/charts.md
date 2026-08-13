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

All 4 share the same minimal surface and forward to the internal `Chart` component in `src/components/ui/chart.tsx`:

```tsx
export function Chart({
  type = "bar",       // defaults to "bar" if omitted
  data,
  className,
}: {
  type?: "bar" | "line" | "area" | "donut";
  data: any[];        // currently `any[]` — treat as untyped and validate at the call site
  className?: string;
}) { /* dispatches to Recharts BarChart / AreaChart / LineChart / PieChart */ }
```

- Only `type`, `data`, and `className` are exposed on these wrappers.
- If you need a custom Recharts prop (gradient stops, custom tooltip, axes), edit the internal `Chart` component in `src/components/ui/chart.tsx` directly, or use one of the lower-level wrappers (`MiniBarChart`, `Sparkline`, `ProgressRing`) that accepts more props.
- Don't bypass these wrappers by importing Recharts directly into a widget — wrappers already encapsulate Recharts usage.
- Type-narrowing note: `data: any[]` is a known anti-pattern at the inner wrapper. When introducing new widgets, validate the data shape at the call site (typed `FooData[]` flowing into the wrapper).

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
- Track stroke `stroke-muted/30`, progress stroke `stroke-primary`, rounded linecap, 300ms ease-in-out transition, label `Math.round(value)%` inside the ring.
- Animates via `stroke-dashoffset` transition, not Recharts.
- `ProgressRing` is the only chart wrapper that does NOT accept a `color` prop — palette is hardcoded. To recolor, edit the file directly.

## Mapping widget patterns to wrappers

| Widget pattern | Wrapper |
|---|---|
| Single KPI ring (savings target, portfolio %) | `ProgressRing` |
| Categorical portfolio breakdown | `DonutChart` |
| Time-series revenue over months | `AreaChart` (or `LineChart` for less fill) |
| Time-series bars (monthly contributions) | `BarChart` |
| Row-internal mini bar (one bar per dividend row) | `MiniBarChart` |
| Row-internal sparkline (one sparkline per stock row) | `Sparkline` |
| Full dashboard chart with custom series | generic `Chart` from `@/components/ui/chart` (only `RevenueChart` uses this — but the 4 pass-through wrappers route to it too) |

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
2. Files live directly in `src/components/charts/` as flat files (e.g. `MiniBarChart.tsx`), NOT in per-component subfolders.
3. Add a typed prop interface with explicit types — avoid `any` (the existing `Chart` wrapper in `ui/chart.tsx` uses `any[]`; that is the one allowed exception, do not propagate it).
4. Use `cn()` from `@/lib/utils` for any class composition (ProgressRing currently uses string concatenation — when editing, switch to `cn()`).
5. No barrel file exists at `src/components/charts/index.ts`; import directly from the file path.
6. Document the new wrapper in this file.
