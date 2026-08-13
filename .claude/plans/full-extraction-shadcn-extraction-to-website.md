# Full Extraction: shadcn-extraction → website (clean slate)

## Context

`website/` is a Next.js 16 + React 19 dashboard. Layout in `app/`. Pages: `/`, `/create`. `/analytics`, `/login`, `/settings` out of scope. Tokens in `app/globals.css` (oklch). `cn()` in `lib/utils.ts`. shadcn registry `baseColor: mist`, `style: base-luma`, `iconLibrary: tabler`. Tailwind v4.

`shadcn-extraction/` (vendored repo root, own `.git`, read-only) ships `apps/v4/registry/new-york-v4/blocks/` (27 compound blocks: 1 dashboard + 16 sidebar variants + 5 login + 5 signup), 14 single-file showcase cards (`apps/v4/components/cards/`), 60+ recharts demos (`apps/v4/registry/new-york-v4/charts/`), full primitive library (`ui/`).

**Goal:** wipe existing widgets + chart primitives, copy full extraction, kebab-case everywhere, wire to existing `cn()` + oklch tokens. Widget inventory only — no new pages.

**Decisions (locked):**
1. Full extraction — 27 blocks + 14 cards + chart demos
2. No pages this pass
3. kebab-case everywhere (new + existing)
4. **REMOVE all 20 existing widgets** (clean slate)
5. **REMOVE all 7 existing chart primitives** — recreate from shadcn-extraction

---

## Phase 0 — Infra (deps + registry + clear)

**Install deps** (`website/`):
```bash
npm i @tanstack/react-table @dnd-kit/core @dnd-kit/sortable @dnd-kit/modifiers @dnd-kit/utilities nuqs react-day-picker @internationalized/date motion tw-animate-css @tabler/icons-react
```

**Add missing shadcn primitives** (skip any already in `src/components/ui/`):
```bash
npx shadcn add command pagination table tooltip dropdown-menu popover dialog sheet drawer calendar select tabs toggle-group separator scroll-area avatar skeleton sonner kbd input-group field form item
```

**Delete existing widgets** (20 folders in `src/components/widgets/`):
```
account-access/  buy-investment/  calendar/  claimable-balance/
contact-information/  contribution-history/  dividend-income/
empty-state/  growth-statistics/  investment-portfolio/
loading-state/  monthly-activity/  notifications/  payment-cards/
payment-log/  payment-threshold/  portfolio-breakdown/
RevenueChart/  savings-target/  stock-performance/
```
Plus barrel `src/components/widgets/index.ts` → reset to empty.

**Delete existing chart primitives** (7 files in `src/components/charts/`):
```
AreaChart.tsx  BarChart.tsx  DonutChart.tsx  LineChart.tsx
MiniBarChart.tsx  ProgressRing.tsx  Sparkline.tsx
```
Plus barrel `src/components/charts/index.ts` → reset to empty. New kebab versions created in Phase 1.

**Update importers** — search for any page/component importing from these deleted widgets/charts. Currently the project pages reference them; after deletion all imports must be removed. Likely `app/page.tsx` (root page), `app/create/page.tsx` may use create widgets only (don't touch).

**Verify Phase 0:** `grep -r "from.*widgets" website/src website/app` returns only create widgets + new ones. Build/lint intentionally skipped — broken until Phase 1.

---

## Phase 1 — Chart primitives (recreate from extraction, kebab)

Source: `shadcn-extraction/apps/v4/registry/new-york-v4/charts/` — pick 7 wrapper-style demos that map to original 7 shapes. Plus add new ones.

| Destination | Source |
|---|---|
| `src/components/charts/area-chart.tsx` | `chart-area-default.tsx` or build from `ChartContainer` + recharts Area |
| `src/components/charts/bar-chart.tsx` | `chart-bar-default.tsx` |
| `src/components/charts/line-chart.tsx` | `chart-line-default.tsx` |
| `src/components/charts/donut-chart.tsx` | `chart-pie-donut.tsx` |
| `src/components/charts/mini-bar-chart.tsx` | custom (recharts Bar, compact) |
| `src/components/charts/progress-ring.tsx` | custom (recharts RadialBar, single value) |
| `src/components/charts/sparkline.tsx` | custom (recharts Line, no axes) |

Plus extras from extraction:
| Destination | Source |
|---|---|
| `src/components/charts/radar-chart.tsx` | `chart-radar-default.tsx` |
| `src/components/charts/radial-chart.tsx` | `chart-radial-default.tsx` |

Each chart file: typed wrapper, exports `<Name>` component with typed props, uses `ChartContainer`/`ChartConfig` from `src/components/ui/chart.tsx`. Barrel `src/components/charts/index.ts` re-exports all.

**Verify Phase 1:** `npm run build` exits 0. `src/components/charts/` compiles.

---

## Phase 2 — Showcase cards (14 single-file widgets)

Source: `shadcn-extraction/apps/v4/components/cards/`.

| Source | Destination widget folder |
|---|---|
| `activity-goal.tsx` | `src/components/widgets/activity-goal/` |
| `calendar.tsx` | `src/components/widgets/calendar-mini/` |
| `chat.tsx` | `src/components/widgets/chat-thread/` |
| `cookie-settings.tsx` | `src/components/widgets/cookie-settings/` |
| `create-account.tsx` | `src/components/widgets/create-account/` |
| `exercise-minutes.tsx` | `src/components/widgets/exercise-minutes/` |
| `forms.tsx` | `src/components/widgets/forms-card/` |
| `payment-method.tsx` | `src/components/widgets/payment-method/` |
| `payments.tsx` | `src/components/widgets/payments-card/` |
| `report-issue.tsx` | `src/components/widgets/report-issue/` |
| `share.tsx` | `src/components/widgets/share/` |
| `stats.tsx` | `src/components/widgets/stats-card/` |
| `team-members.tsx` | `src/components/widgets/team-members/` |
| `index.tsx` | skip (aggregator, not a widget) |

Per-widget folder:
```
<name>/
  <name>.tsx              # kebab file
  mockData.ts             # extracted from inline `const data = [...]`
  index.ts                # `export { default } from "./<name>"`
```

**Path rewrites per file:**
- `@/registry/new-york-v4/ui/<x>` → `@/components/ui/<x>`
- `@/registry/new-york-v4/lib/utils` → `@/lib/utils`
- `@/registry/new-york-v4/charts/...` → `@/components/charts/...`
- Inline `const data = [...]` → extract to `mockData.ts` named export

**Verify Phase 2:** `npm run build` exits 0. Inspect dev server: cards render, no console errors.

---

## Phase 3 — Dashboard (`dashboard-01`)

Source: `shadcn-extraction/apps/v4/registry/new-york-v4/blocks/dashboard-01/`.

Flatten into separate widget folders (matches website pattern of one-component-per-folder):

| Source | Destination |
|---|---|
| `components/section-cards.tsx` | `src/components/widgets/section-cards/` |
| `components/chart-area-interactive.tsx` | `src/components/widgets/chart-area-interactive/` (refactor to use new `AreaChart` primitive from Phase 1) |
| `components/data-table.tsx` | `src/components/widgets/data-table/` |
| `components/app-sidebar.tsx` | `src/components/widgets/app-sidebar/` |
| `components/nav-main.tsx` | `src/components/widgets/nav-main/` |
| `components/nav-documents.tsx` | `src/components/widgets/nav-documents/` |
| `components/nav-secondary.tsx` | `src/components/widgets/nav-secondary/` |
| `components/nav-user.tsx` | `src/components/widgets/nav-user/` |
| `components/site-header.tsx` | `src/components/widgets/site-header/` |
| `data.json` | split → `mockData.ts` per widget (each widget owns its slice) |

**Chart-area decision:** refactor `chart-area-interactive.tsx` to use new `area-chart.tsx` primitive. If interactivity (toggle group, select timeframe) breaks, keep raw recharts in this widget but still import `ChartContainer`/`ChartConfig` from `src/components/ui/chart.tsx`.

**Verify Phase 3:** `npm run build` exits 0. `data-table` renders with drag-and-drop (client-only, no SSR hydration mismatch).

---

## Phase 4 — Sidebar variants (16)

Source: `shadcn-extraction/apps/v4/registry/new-york-v4/blocks/sidebar-01/` through `sidebar-16/`.

Atomic — keep each block as one widget folder with its sub-components inside. Don't split (atomicity matters; each is a shell).

| Block | Destination |
|---|---|
| `sidebar-01`..`sidebar-16` | `src/components/widgets/sidebar-01/` ... `sidebar-16/` |

Per-folder (flat, no `components/` subdir):
```
sidebar-XX/
  index.ts                  # exports default = the composed page
  composition.tsx           # renamed from page.tsx
  app-sidebar.tsx
  nav-main.tsx
  nav-*.tsx
  <sub>.tsx
  mockData.ts
```

**Verify Phase 4:** `npm run build` exits 0. Visual smoke test in dev (open any sidebar-XX in a page stub if needed — but pages are out of scope, so just barrel compiles).

---

## Phase 5 — Auth blocks (5 login + 5 signup)

Source: `shadcn-extraction/apps/v4/registry/new-york-v4/blocks/login-01..05/`, `signup-01..05/`.

Flatten — each becomes one widget folder with form component + (minimal) mockData.

| Block | Destination |
|---|---|
| `login-01`..`login-05` | `src/components/widgets/login-01/` ... `login-05/` |
| `signup-01`..`signup-05` | `src/components/widgets/signup-01/` ... `signup-05/` |

```
login-XX/
  login-form.tsx
  index.ts
  mockData.ts               # usually empty or minimal
```

**Verify Phase 5:** `npm run build` exits 0.

---

## Phase 6 — Chart demos (~12 best)

Source: `shadcn-extraction/apps/v4/registry/new-york-v4/charts/` (60+ demos).

Pick demos distinct from primitives in Phase 1.

| Source demo | Destination widget |
|---|---|
| `chart-area-gradient.tsx` | `src/components/widgets/chart-area-gradient/` |
| `chart-area-axes.tsx` | `widgets/chart-area-axes/` |
| `chart-bar-mixed.tsx` | `widgets/chart-bar-mixed/` |
| `chart-bar-stacked.tsx` | `widgets/chart-bar-stacked/` |
| `chart-pie-donut-text.tsx` | `widgets/chart-pie-donut-text/` |
| `chart-pie-legend.tsx` | `widgets/chart-pie-legend/` |
| `chart-radar-grid-circle.tsx` | `widgets/chart-radar-grid/` |
| `chart-radar-grid-fill.tsx` | `widgets/chart-radar-fill/` |
| `chart-radial-grid.tsx` | `widgets/chart-radial-grid/` |
| `chart-radial-shape.tsx` | `widgets/chart-radial-shape/` |
| `chart-radial-stacked.tsx` | `widgets/chart-radial-stacked/` |
| `chart-line-step.tsx` | `widgets/chart-line-step/` |
| `chart-line-dots.tsx` | `widgets/chart-line-dots/` |

Each demo → `mockData.ts` (extract inline arrays) + `index.ts` barrel + kebab component file.

**Verify Phase 6:** `npm run build` exits 0.

---

## Phase 7 — Lint cleanup + final verify

Current lint baseline (before Phase 0 deletion) was ~435 errors. After clean slate + extraction, lint must reach 0.

**Triage per file:**
1. `no-explicit-any` — replace with proper types from widget's data interface.
2. Anonymous default export on `mockData.ts` — convert `export default {...}` → `export const mockData = {...}` named export.
3. `react-hooks/set-state-in-effect` in `src/hooks/use-mobile.ts:14` — read effect, move setState into resize listener callback.
4. Any new `no-explicit-any` from copied files — type with widget's `mockData` interface.

**Final verification:**
```bash
cd website
npm run build          # exit 0
npm run lint           # exit 0
npx tsc --noEmit       # exit 0
```

Manual smoke (`npm run dev`):
- `http://localhost:3000` — root page renders (may be empty after Phase 0 deletion; that's OK for inventory pass)
- `http://localhost:3000/create` — theme builder still works (untouched)
- Spot-check 2-3 widgets by importing into a temporary test page OR via `npx tsc` (which exercises all imports transitively)
- Light/dark mode works (tokens intact)

**Done signal:** build green + lint green + tsc green.

---

## Critical files

**Deleted (Phase 0):**
- `website/src/components/widgets/<20 folders>`
- `website/src/components/widgets/index.ts` (reset)
- `website/src/components/charts/<7 primitives>`
- `website/src/components/charts/index.ts` (reset)
- All importers in `app/` (pages) — strip widget imports after deletion

**Created (~75 new):**
- 7 chart primitives (Phase 1)
- 13 cards (Phase 2)
- 9 dashboard widgets (Phase 3)
- 16 sidebar variants (Phase 4)
- 10 auth blocks (Phase 5)
- 12 chart demos (Phase 6)
- ~6 new shadcn primitives (Phase 0)
- ~10 new npm deps (Phase 0)

**Reused (don't recreate):**
- `cn` — `website/lib/utils.ts`
- UI primitives — `website/src/components/ui/<x>.tsx`
- Theme builder — `website/src/components/create/`

**Untouched:**
- `website/app/globals.css` — only touch if Phase 7 finds token gaps
- `website/components.json` — only touch if Phase 0 shadcn adds need config changes
- `shadcn-extraction/` — read-only
- `website/src/components/create/` — theme builder

---

## Risks + mitigations

1. **Alias path drift:** source uses `@/registry/new-york-v4/...` everywhere. Grep each copied file for `@/registry/`, replace to `@/components/` or `@/lib/`. Verify by `grep -r "@/registry" website/src/components/`.
2. **Inline mock data → mockData.ts:** shadcn-extraction inlines `const data = [...]`. Extract to typed `mockData.ts` per widget. Watch for circular refs (e.g. `navMain` references `navDocuments`).
3. **Drag-and-drop on data-table:** `@dnd-kit/*` is new dep. Use `useEffect` for client-only features (no SSR hydration mismatch).
4. **Calendar/date pickers:** `react-day-picker` + `@internationalized/date` are large. Don't add unless sidebar-12/15 actually used. If not, defer Phase 0 deps.
5. **Lint debt explosion:** ~75 new files likely add `no-explicit-any` violations. Phase 7 must triage, not blanket-suppress.
6. **Build timeout:** 75+ new files in one build may slow tsc. Run `npx tsc --noEmit` first, fix errors before `npm run build`.
7. **Page import breakage after Phase 0 deletion:** `app/page.tsx` likely imports deleted widgets. Find all importers and strip (no replacements — page rebuilds later).

---

## Out of scope (explicit)

- Building `/analytics`, `/login`, `/settings` pages
- Wiring widgets into existing pages (only inventory + render check)
- Renaming `src/components/create/` (theme builder)
- Adding new tokens to `app/globals.css`
- Major version bumps (Next, React, shadcn, Tailwind)
- Cleanup of stale `components/**` globs in `tsconfig.json` / `tailwind.config.ts`
