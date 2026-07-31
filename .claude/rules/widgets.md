---
paths: website/src/components/widgets/**
---

# Widget Conventions

Applies to every folder under `website/src/components/widgets/`. The dashboard has 21 widget folders plus one PascalCase exception. Follow these rules unless the task explicitly says otherwise.

## Folder & file naming

- **Folder name: kebab-case.** Use `payment-cards/`, not `PaymentCards/`. The PascalCase `RevenueChart/` is a tracked anomaly; do not add new widgets in PascalCase, and do not start the kebab-case-to-PascalCase migration in passing.
- **Component file: same kebab-case name as the folder.** `payment-cards/payment-cards.tsx` exporting `PaymentCards`. PascalCase export, kebab-case file — that is the convention.
- **Three files per widget** (when content warrants it):
  - `<name>.tsx` — the component
  - `mockData.ts` — typed fixtures (default export or named constants)
  - `index.ts` — barrel re-export
- Some widgets carry only `<name>.tsx` + `index.ts` (pre-stubs). That's fine; add `mockData.ts` when the widget reads real data.

## Prop contract — the `data` prop is optional

Pattern all widgets follow:

```tsx
export default function Foo({ data = defaultData }: { data?: FooData }) {
  // ...
}
```

- `data` is **optional and defaults to** the widget's mock. It is never required.
- Do not strip the default. Do not make `data` required.
- Five widgets in the current tree don't take a `data` prop at all (they read `mockData` directly via `useState` or destructuring — `buy-investment`, `calendar`, `claimable-balance`, `payment-cards`, `payment-threshold`, `savings-target`, `stock-performance`, `investment-portfolio`). When extending these, prefer adding the `data = defaultData` prop so the parent can supply real data later.

## Mock-first — no `fetch()` into widgets

- Widgets consume typed fixtures in `mockData.ts`. Period.
- Adding `fetch()` / `useEffect` / SWR / React Query into an existing widget requires explicit owner approval.
- New widgets likewise start mock-first; the wiring for real data is a separate concern.

## Right chart primitive per shape

| Widget shape | Use | Why |
|---|---|---|
| Numeric percentage (0–100) | `ProgressRing` (`{ value, size, strokeWidth }`) | Inline SVG, theme-aware, no chart deps |
| Categorical shares (parts of a whole) | `DonutChart` | Recharts `Pie` underneath |
| Time series, area | `AreaChart` | Goes via internal `<Chart type="area">` |
| Time series, line | `LineChart` | Goes via internal `<Chart type="line">` |
| Time series, bars | `BarChart` | Used by `contribution-history` |
| Inline sparkline / single-row mini bar | `Sparkline` / `MiniBarChart` | Used row-internal by `dividend-income` |
| Full dashboard chart (revenue, KPI) | `Chart` from `@/components/ui/chart` (generic) | `RevenueChart` uses this — the only one |

Do not substitute. If a widget needs a percentage ring, use `ProgressRing` — not a half-built `DonutChart`. If it needs a sparkline, use `Sparkline` — not a styled `BarChart`.

## Composition

- Wrap every widget body in `Card` with `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` as needed. Don't dump everything into a single `CardContent`.
- Use semantic tokens (`bg-primary`, `text-muted-foreground`). Never raw hex / rgb.
- `gap-*` for spacing, never `space-x-*` / `space-y-*`.
- `size-*` for equal dimensions.
- `truncate` for ellipsis.
- Icons via `@tabler/icons-react` — the project's `iconLibrary` is `tabler`.
- Routing with `next/link`, not raw `<a>`.

## Re-exports

Add the widget to `src/components/widgets/index.ts` so it lands on the main dashboard. The barrel re-exports each `<name>/index.ts` (or the component directly).

## Visual identity

- Tone is calm, data-dense, financial. Operate mode, not Persuade.
- Don't invent new colors. The palette is `oklch(...)` tokens defined in `app/globals.css` and exposed via `@theme inline`. The chart palette is `--chart-1` … `--chart-5`.
- Animation is sparingly required. A 200–300ms ease on hover/transition is fine; don't add motion without a reason.

## Anti-patterns

- ❌ `data: any` in `mockData.ts` — type it. `FooData`, `mockData: FooData`.
- ❌ Hand-rolling CSS in a component when a shadcn primitive exists.
- ❌ New `cn()` definitions, custom variants, or per-widget tokens.
- ❌ Hand-rolling a new chart wrapper when one of the 7 already exists.
- ❌ Adding a top-level `useEffect` for data fetching.

## Tracked exceptions

- `RevenueChart/` is PascalCase at the folder level and may use `export const RevenueChart: React.FC = () => ...` alongside its default export. When migrating (separate task), keep the same prop behavior and the same `Chart` wrapper import.
