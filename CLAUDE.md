# CLAUDE.md

Project: **Next Color Theme** — Next.js 16 + React 19 live theme customizer
(`website/`). Working directory for all commands below is `website/` unless
noted.

`README.md` is the human-facing overview. This file is the authoritative
source of ground truth. New agents start here.

## Three routes

- **`/dashboard`** — landing page. "Get Design" → `/create`, "Saved Designs"
  → `/creates`.
- **`/create`** — the customizer sidebar plus the showcase block rendered
  twice, once in a light `ThemeScope` and once in a dark one.
- **`/creates`** — gallery of designs saved from the customizer, stored in
  localStorage under `next-color-theme:saved-designs`.

`/` redirects to `/dashboard`, declared in `next.config.ts` — there is
**no `app/page.tsx`**, and adding one would shadow the redirect.

`src/components/site-header.tsx` is the shared nav for all three. It sits
outside `ThemeScope` on purpose: it is app chrome, not previewed theme.

The 42 mock widgets and the horizontally-scrolling preview grid were deleted.
One `showcase-block.tsx` replaces them.

## Verification gate (mandatory before any "done" claim)

Run all three from `website/`. All must exit 0:

```bash
npm run build     # next build — compile + tsc + static prerender
npm run lint      # eslint — currently clean, 0 errors 0 warnings; keep it there
npx tsc --noEmit  # standalone typecheck (redundant with build but fast feedback)
```

Build output in the success case: a `Route (app)` table with exactly four
`○ (Static)` lines — `/_not-found`, `/create`, `/creates`, `/dashboard`.

There is no `test` script. Don't add one.

## Commands

```bash
npm run dev       # next dev — http://localhost:3000
npm run build     # production build (also runs tsc)
npm run start     # serve the build output
npm run lint      # eslint with eslint-config-next
```

No `format`, no `typecheck` script — `tsc --noEmit` is the typecheck path.

## Project layout — only what matters

- `app/` — `layout.tsx` (fonts + `globals.css` + `<Toaster />`),
  `dashboard/page.tsx`, `create/page.tsx`, `creates/page.tsx`, `globals.css`,
  `cn-luma.css`, `favicon.ico`. No `page.tsx` at the root.
- `src/components/create/` — the customizer. `customizer.tsx` is the sidebar
  shell, `setting-card.tsx` is the shared row primitive (and owns the lock
  toggle), the `*-picker.tsx` files are the individual controls,
  `use-design-system.tsx` holds the state, `theme-scope.tsx` injects the
  resulting CSS variables, `showcase-block.tsx` is the previewed component
  set, `build-payload.ts` generates the export, `get-code-dialog.tsx` is the
  export UI, `registry-catalog.ts` flattens the shadcn manifest for the
  component picker, and `use-saved-designs.tsx` is the localStorage store.
- `src/components/creates/` — `design-gallery.tsx` and `saved-count.tsx`.
- `src/registry/` — the design-token source of truth (`accents`,
  `base-colors`, `chart-palettes`, `styles`, `options`, `types`), re-exported
  through `src/registry/index.ts`.
- `src/components/charts/` — 4 Recharts wrappers (`BarChart`, `DonutChart`,
  `MiniBarChart`, `ProgressRing`).
- `src/components/ui/` — shadcn primitives, plus `_registry.ts` (the upstream
  manifest, now read by `registry-catalog.ts`) and `icon-placeholder.tsx`.
  Add more with `npx shadcn add <name>`.
- `src/lib/` — only `lucide-react.ts` and `stub-empty.ts`, both stub modules
  wired in by `tsconfig.json` `paths`. Not application code.
- `lib/utils.ts` — the only `cn()` helper. Use it; don't `clsx` raw.

## Conventions that differ from defaults

1. **`showcase-block.tsx` is the only preview surface.** It renders every
   primitive the theme touches, and `/create` mounts it twice — `mode="light"`
   and `mode="dark"`. Anything added there must be visible in both. Ids inside
   it are suffixed with `mode` (`email-${mode}`) because the block appears
   twice on the page and duplicate ids would break every `htmlFor`.
2. **Fixtures are deterministic module-level consts.** No `fetch`, no
   `Math.random()` in render — the two copies must agree, and so must SSR.
3. **Right chart primitive per shape.** Numeric percentage → `ProgressRing`
   (`{ value, size, strokeWidth }`). Categorical shares → `DonutChart`.
   Time-series bars → `BarChart`. Row-internal → `MiniBarChart`.
   `AreaChart`, `LineChart`, and `Sparkline` no longer exist — the internal
   `Chart` in `ui/chart.tsx` still supports `type="area"` and `type="line"`,
   so route through it if you need those.
4. **Routing uses `next/link`.** Raw `<a>` for in-app navigation is a
   regression.
5. **Every font the picker offers must be loaded in `app/layout.tsx`, under
   the exact variable name `src/registry/options.ts` references.**
   `--font-sans: var(--font-undefined), sans-serif` is invalid at
   computed-value time, so the whole declaration is dropped and the font
   silently vanishes — it does *not* fall back to the rest of the stack.
   `build-payload.ts` therefore rewrites the stacks to literal family names
   for export, since the consuming project has none of these variables.
6. **`DesignSystemConfig` is the serialized shape.** Locks and the picked
   component list live *beside* it in the store, not inside it — the preset
   codec and `build-payload` both round-trip the config, and an extra field
   corrupts them.
7. **All colors come from CSS variables** defined in `app/globals.css`
   (oklch tokens) and surfaced through the `@theme inline` block, then
   overridden at runtime by `theme-scope.tsx`. Don't hardcode hex/rgb inside
   the preview. (The customizer sidebar chrome is deliberate hardcoded hex —
   it is not themed.)
8. **`buildThemeVars()` in `build-payload.ts` is the single config → CSS
   mapping.** `theme-scope.tsx` (live preview), the export, and the `/creates`
   thumbnails all go through it. Don't add a second one.
9. **Branching: feature branches off `main`, squash-merged.** Conventional
   commits (`feat:`, `fix:`, `chore:`, …). No release branches; this is
   not a published package.

## Pitfalls

- **Lint is clean — keep it clean.** `eslint.config.mjs` has exactly two
  overrides: an `^_`-prefix ignore pattern for deliberately-unused bindings,
  and a rule relaxation scoped to `src/lib/**` + `src/registry/**` (generated
  stubs and loosely typed upstream token data). Don't widen those globs to
  make new code pass.
- **New UI primitives come from `npx shadcn add <name>`.** Never hand-write
  a new component into `src/components/ui/`. The `components.json` manifest
  (`baseColor: mist`, `style: base-luma`, `iconLibrary: tabler`) is the
  source of truth.
- **`app/globals.css` imports `shadcn/tailwind.css`** which resolves through
  `node_modules/shadcn/` (the shadcn CLI's npm package). It is NOT a
  tsconfig path alias. Don't remove the import without checking the render.
- **`cn-luma.css` beats Tailwind utilities — never colour a portalled
  surface with a hardcoded class.** `app/globals.css` imports
  `shadcn/tailwind.css` *after* the utility layer, so a class like
  `.cn-menu-translucent` (`@apply bg-popover/70`) or `.cn-dialog-content`
  (`@apply bg-popover text-popover-foreground`) has equal specificity to
  `bg-[#1f1f1f]` and wins on source order. A surface written as
  `bg-[#1f1f1f] text-[#f2f2f2]` therefore loses its *background* to the light
  popover token while keeping its near-white *text* — invisible content. The
  customizer's Menu dropdown and Open Preset dialog both had this; they now
  carry no colour classes and take `bg-popover` / `text-popover-foreground`
  from the primitive. The sidebar chrome itself (`aside`, the Menu trigger) is
  in-flow, not portalled, and its hardcoded hex is fine. `setting-card.tsx`
  still forces `bg-white !text-zinc-900` on the picker menus — that works only
  because of the `!`, and is worth converting to tokens next time it is
  touched.
- **`next.config.ts` has no `images` block any more.** It went with
  `album-card`, the only `next/image` consumer. Adding a remote image needs
  `images.remotePatterns` back, or `next/image` throws at runtime.
- **Data is mock-first.** The showcase uses inline typed fixtures. Do not
  introduce `fetch()` or backend integration without explicit owner approval.
  Saved designs are localStorage only — there is no server.
- **Never `setState` inside an effect.** `eslint-config-next` enables the
  React Compiler's `react-hooks/set-state-in-effect` rule and it is an
  *error*, not a warning. To read an external store, use
  `useSyncExternalStore` (see `use-saved-designs.tsx`); to default a field
  from props, compute it during render (see `save-design-dialog.tsx`).
- **The store hydrates once, and `persist` is gated on `state.hydrated`.**
  Both live in the reducer, not a ref: mount effects all run in the same
  commit, so a ref set by the hydrate effect is already `true` when the
  persist effect runs with the *pre-hydration* state — which silently wrote
  `DEFAULT_CONFIG` over the user's saved theme. The hydrate effect is also
  idempotent (it does not clear `?design=`; a second effect does that once
  `state.hydrated` flips) because React double-invokes mount effects in dev.
- **Reducers must be pure.** `randomize` takes the random config as its
  action payload rather than calling `Math.random()` inside the reducer.
- **`src/components/ui/calendar.tsx` diverges from upstream shadcn.**
  `CalendarDayButton` pins `data-day` to `toLocaleDateString(locale?.code ??
  "en-GB")`. With no argument the runtime default locale is used and Node and
  the browser disagree on zero-padding (`26/7/2026` vs `26/07/2026`), which
  React reported as a hydration mismatch on every day cell. Re-apply this
  after any `npx shadcn add calendar`. The console is now clean — keep it
  that way.
- **`src/components/ui/sonner.tsx` needs its `"use client"` directive.** The
  shadcn CLI writes it without one; it calls `useTheme`, and `app/layout.tsx`
  is a server component. Re-add it after any `npx shadcn add sonner`. Without
  `<Toaster />` mounted in the layout, every `toast.*` call in the app is a
  silent no-op.
- **Touching major versions** (Next, React, shadcn, Tailwind) is a
  multi-day yak-shave. Don't bump majors opportunistically.

## Working style

When a task has more than one reasonable interpretation or the change
could regress the page, **stop and ask**. Default to the smallest diff that
satisfies the task; don't refactor adjacent code in passing.

## Scoped rules

- `website/src/components/ui/` → `.claude/rules/ui-primitives.md`
- `website/src/components/charts/` → `.claude/rules/charts.md`

## Skills

Four skills live under `.claude/skills/<name>/SKILL.md`:

- `shadcn` — component-library rules directly applicable to this project.
- `impeccable` — frontend design intelligence (Operate mode = dashboard).
- `ponytail` — general YAGNI / lazy-coding discipline.
- `tailwind-v4` — Tailwind v4 + shadcn `base-luma` rules. Auto-loads when
  editing `app/globals.css`, `components.json`, `postcss.config.mjs`, or
  anything in `src/components/ui/`.

`shadcn`, `impeccable`, and `ponytail` ship with YAML frontmatter and
inline `{{template}}` / sibling-file references written for a different
skill runtime — those won't resolve in Claude Code. The rules text
inside each file is usable.

## Knowledge graph

`graphify-out/` holds a persistent knowledge graph of the codebase
(structural AST edges + semantic doc edges + community detection).

- `graph.json` — raw graph data, queryable via `graphify query "<question>"`.
- `GRAPH_REPORT.md` — human-readable summary.
- `graph.html` — interactive browser viz (open in any browser, no server).
- `manifest.json` — incremental-update source of truth.
- `cache/` + `cost.json` — per-user build artifacts (gitignored).

When the user asks "what depends on X?", "where is Y defined?", or
"trace the path between A and B", prefer `graphify query "<question>"`
over grep. Re-run `/graphify` after major file changes to keep it fresh.
