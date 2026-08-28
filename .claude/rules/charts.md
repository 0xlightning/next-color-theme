---
paths: website/src/components/charts/**
---

# Chart Wrappers — Recharts Primitives

Applies to every file under `website/src/components/charts/`. There are **4**
wrappers. Pick the right one; don't hand-roll a new ad-hoc Recharts component
in a widget.

> `AreaChart`, `LineChart`, and `Sparkline` used to live here. They were
> removed because nothing rendered them. The internal `Chart` component still
> supports `type="area"` and `type="line"`, so route through it (or re-add a
> thin wrapper) if a widget genuinely needs those shapes.

## The 4 wrappers

| Wrapper | Recharts primitive | Real Recharts | When to use |
|---|---|---|---|
| `BarChart` | indirect — `<Chart type="bar">` | indirect | Time-series bars in a widget |
| `DonutChart` | indirect — `<Chart type="donut">` | indirect | Categorical shares (parts of a whole) |
| `MiniBarChart` | `ResponsiveContainer` + `BarChart` + `Bar` | yes | Inline row-internal mini bar |
| `ProgressRing` | **none** — pure inline `<svg>` + 2 circles | no | Numeric percentage (0–100) |

## Prop contracts

### BarChart / DonutChart (pass-throughs)

Both share the same minimal surface and forward to the internal `Chart`
component in `src/components/ui/chart.tsx`:

```tsx
export type ChartDatum = Record<string, string | number>

export function Chart({
  type = "bar",       // defaults to "bar" if omitted
  data,
  className,
}: {
  type?: "bar" | "line" | "area" | "donut";
  data: ChartDatum[];
  className?: string;
}) { /* dispatches to Recharts BarChart / AreaChart / LineChart / PieChart */ }
```

- Only `type` and `data` are exposed on these two wrappers; `className` stays
  on `Chart` itself.
- `Chart` infers the x-axis key (first string-valued key) and the series keys
  (remaining number-valued keys) from `data[0]`. Keep every row the same shape.
- If you need a custom Recharts prop (gradient stops, custom tooltip, axes),
  edit `Chart` in `src/components/ui/chart.tsx` directly.
- Don't bypass these wrappers by importing Recharts into a widget.

### MiniBarChart

```tsx
type MiniBarChartProps = {
  data: number[] | { value: number }[];
  color?: string;           // default 'var(--primary)'
  width?: number | string;  // default 100
  height?: number | string; // default 35
}
```

- Accepts raw numbers OR `{ value }` objects — normalizes to `{ value, id }`.
- Palette is `var(--primary)`. Pass a token string (`'var(--chart-3)'`) to override.
- No `className` prop. The outer wrapper is fixed at `h-full w-full`.

### ProgressRing

```tsx
type ProgressRingProps = {
  value: number;          // clamped 0–100
  size?: number;          // default 60
  strokeWidth?: number;   // default 6
  className?: string;
}
```

- The only chart wrapper that accepts `className`.
- Track stroke `stroke-muted/30`, progress stroke `stroke-primary`, rounded
  linecap, 300ms ease-in-out transition, label `Math.round(value)%` inside.
- Animates via `stroke-dashoffset`, not Recharts.
- No `color` prop — palette is hardcoded. To recolor, edit the file.

## Mapping widget patterns to wrappers

| Widget pattern | Wrapper |
|---|---|
| Single KPI ring (savings target, portfolio %) | `ProgressRing` |
| Categorical portfolio breakdown | `DonutChart` |
| Time-series bars (monthly contributions) | `BarChart` |
| Row-internal mini bar (one bar per dividend row) | `MiniBarChart` |
| Time-series area or line | `Chart` from `@/components/ui/chart` with `type="area"` / `"line"` |
| Full dashboard chart with custom series | `Chart` from `@/components/ui/chart` (`RevenueChart` uses this) |

## Palette convention

- `MiniBarChart` defaults to `var(--primary)`. Use chart tokens
  (`var(--chart-1)` … `var(--chart-5)`) for multi-series color.
- `BarChart` / `DonutChart` defer to `Chart`'s color config, which assigns
  `var(--chart-N)` round-robin by series index.
- `ProgressRing` palette is hardcoded — track `stroke-muted/30`, progress
  `stroke-primary`.
- Every one of these tokens is rewritten at runtime by
  `src/components/create/theme-scope.tsx`. Never hardcode hex.

## Don't

- ❌ Don't import `recharts` directly into a widget. Use the wrappers.
- ❌ Don't add a new wrapper unless the pattern appears ≥3 times. Reuse first.
- ❌ Don't hardcode hex inside a chart wrapper. Use `var(--…)` tokens.
- ❌ Don't pass `className` to `MiniBarChart` / `BarChart` / `DonutChart` —
  they don't accept it.
- ❌ Don't wrap a `ProgressRing` in a Recharts `<ChartContainer>` — it's
  already `<svg>`-only.

## Adding a new wrapper

1. Confirm the pattern is used ≥3 times across widgets.
2. Files live directly in `src/components/charts/` as flat files (e.g.
   `MiniBarChart.tsx`), NOT in per-component subfolders.
3. Add a typed prop interface with explicit types — no `any`.
4. Use `cn()` from `@/lib/utils` for class composition (`ProgressRing`
   currently uses string concatenation — switch it when you next edit it).
5. No barrel exists at `src/components/charts/index.ts`; import by file path.
6. Document the new wrapper in this file.
