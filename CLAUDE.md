# CLAUDE.md

Project: **Next Color Theme Dashboard** — Next.js 16 + React 19 dashboard
(`website/`). Working directory for all commands below is `website/` unless
noted.

`README.md` is the human-facing overview. The older `prd.md` and
`architecture.md` at the repo root are gone; this file is the
authoritative source for ground truth. New agents start here.

## Verification gate (mandatory before any "done" claim)

Run all three from `website/`. All must exit 0:

```bash
npm run build     # next build — compile + tsc + static prerender
npm run lint      # eslint (currently red; clean before claiming done — see Pitfalls)
npx tsc --noEmit  # standalone typecheck (redundant with build but fast feedback)
```

Build output you should see in the success case: `Route (app)` table with
5 `○ (Static)` lines for `/`, `/_not-found`, `/analytics`, `/login`,
`/settings`.

There is no `test` script. Don't add one. The only test files in this repo
live inside the vendored `website/shadcn-extraction/` tree and belong to
its own internal git history; ignore them.

## Commands

```bash
npm run dev       # next dev — http://localhost:3000
npm run build     # production build (also runs tsc)
npm run start     # serve the build output
npm run lint      # eslint with eslint-config-next
```

No `format`, no `typecheck` script — `tsc --noEmit` is the typecheck path.

## Project layout — only what matters

- `app/` — App Router pages and root layout. `app/globals.css` is the only
  active stylesheet; it is wired in by `app/layout.tsx`.
- `src/components/widgets/<name>/` — one folder per widget. Each contains
  a `.tsx` component, typed mock data (`mockData.ts` or inline
  `defaultData`), and an `index.ts` barrel. Re-exported through
  `src/components/widgets/index.ts`.
- `src/components/charts/` — 7 Recharts wrappers (`AreaChart`,
  `BarChart`, `DonutChart`, `LineChart`, `MiniBarChart`, `ProgressRing`,
  `Sparkline`).
- `src/components/layout/` — `DashboardLayout`, `Header`, `Sidebar`.
- `src/components/ui/` — Shadcn primitives. See Pitfalls.
- `lib/utils.ts` — the only `cn()` helper. Use it; don't `clsx` raw.

## Conventions that differ from defaults

1. **Widget folder names are kebab-case.** The historical exception
   `RevenueChart/` (PascalCase) is a known inconsistency tracked for
   rename; do not add new widgets in PascalCase, and don't propagate the
   pattern.
2. **Widget props take optional `data` defaulting to its mock.**
   Pattern: `export default function Foo({ data = mockData }: { data?:
   FooData })`. Don't make `data` required, and don't strip the default.
3. **Right chart primitive per shape.** Numeric percentage → `ProgressRing`
   (`{ value, size, strokeWidth }`). Categorical shares → `DonutChart`.
   Time-series → `AreaChart`/`LineChart`/`BarChart`. Don't substitute.
4. **Routing uses `next/link`.** Raw `<a>` for in-app navigation is a
   regression; `Sidebar.tsx` was already migrated. Use `<Link>`.
5. **All colors come from CSS variables** defined in `app/globals.css`
   (oklch tokens) and surfaced in `tailwind.config.ts` as `hsl(var(--…))`.
   Don't hardcode hex/rgb values in component styles.
6. **`useIsMobile` returns `!!isMobile`.** Treat undefined as "not yet
   known" — consumers gate on truthy.
7. **Branching: feature branches off `main`, squash-merged.** Conventional
   commits (`feat:`, `fix:`, `chore:`, …). No release branches; this is
   not a published package.

## Pitfalls

- **`npm run lint` is currently red** (~435 errors: `no-explicit-any`
  across several widgets, `react-hooks/set-state-in-effect` in
  `src/hooks/use-mobile.ts:14`, anonymous-default-export warnings on
  `mockData.ts`). The lint gate is mandatory; clean the lint as part of
  finishing a change. Don't suppress rules globally to make it pass.
- **New UI primitives come from `npx shadcn add <name>`.** Never hand-write
  a new component into `src/components/ui/` — it will desync from upstream
  and the registry manifest (`_registry.ts`) won't know about it. The
  `components.json` manifest (`baseColor: mist`, `style: base-luma`,
  `iconLibrary: tabler`) is the source of truth.
- **`app/globals.css` imports `shadcn/tailwind.css`** which resolves through
  the `@shadcn/react/*` tsconfig path alias into the vendored
  `website/shadcn-extraction/` tree. Don't edit that alias or remove the
  import without checking the rendered output.
- **Two orphan CSS files** at `src/theme/globals.css` and
  `src/theme/theme.css` — no module imports them, but Tailwind's
  `content` paths still scan them. They reference a missing
  `./legacy-themes.css`. Tracked for removal; do not import from
  `src/theme/*` and don't add new tokens there. New tokens go in
  `app/globals.css`.
- **`website/src/components/components/` and `website/components/`** are
  legacy aliasing. Don't add new files to either; use
  `src/components/{charts,layout,ui,widgets}/`.
- **`website/shadcn-extraction/`** is a vendored copy of the public
  shadcn/ui repo with its own internal `.git`. Read-only for pattern
  reference. tsconfig already excludes it; do not commit into it.
- **Data is mock-first.** Widgets consume typed fixtures in
  `mockData.ts`. Do not introduce `fetch()` calls or backend integration
  into existing widgets without explicit owner approval.
- **Touching major versions** (Next, React, shadcn, Tailwind) is a
  multi-day yak-shave. Don't bump majors opportunistically. Patch/minor
  bumps during normal work are fine.

## Working style

When a task has more than one reasonable interpretation or the change
could regress a working page, **stop and ask**. A wasted turn beats a
reverted commit. Default to the smallest diff that satisfies the task;
don't refactor adjacent code in passing.

## Scoped rules

Some topics are narrow enough to live in a per-path rules file rather
than this one:

- `website/src/components/ui/` → `.claude/rules/ui-primitives.md`
  (shadcn registry + how primitives are added/edited).
- `website/src/components/widgets/` → `.claude/rules/widgets.md`
  (kebab-case folder names, optional `data` prop contract, mock-first,
  right chart primitive per shape).
- `website/src/components/charts/` → `.claude/rules/charts.md`
  (7 Recharts wrappers, typed prop contracts, palette convention).

## Skills

Four skills live under `.claude/skills/<name>/SKILL.md`:

- `shadcn` — component-library rules directly applicable to this project.
- `impeccable` — frontend design intelligence (Operate mode = dashboard).
- `ponytail` — general YAGNI / lazy-coding discipline.
- `tailwind-v4` — Tailwind v4 + shadcn `base-luma` rules (token
  addition, `@theme inline` block, Base UI vs Radix, font variable
  gotchas). Auto-loads when editing `app/globals.css`,
  `components.json`, `postcss.config.mjs`, or anything in
  `src/components/ui/`.

`shadcn`, `impeccable`, and `ponytail` ship with YAML frontmatter and
inline `{{template}}` / sibling-file references written for a different
skill runtime — those won't resolve in Claude Code. The rules text
inside each file is usable; commands that depend on missing scripts or
sibling files won't run.

## Knowledge graph

`graphify-out/` holds a persistent knowledge graph of the codebase
(structural AST edges + semantic doc edges + community detection).

- `graph.json` — raw graph data, queryable via `graphify query "<question>"`.
- `GRAPH_REPORT.md` — human-readable summary: communities, god nodes,
  surprising connections, suggested questions.
- `graph.html` — interactive browser viz (open in any browser, no server).
- `manifest.json` — incremental-update source of truth.
- `cache/` + `cost.json` — per-user build artifacts (gitignored).

When the user asks "what depends on X?", "where is Y defined?", or
"trace the path between A and B", prefer `graphify query "<question>"`
over grep. The graph already encodes cross-file dependencies, community
membership, and 53 named clusters for the 60+ shadcn primitives,
7 chart wrappers, and 22 widgets. Re-run `/graphify` after major file
changes to keep it fresh.
