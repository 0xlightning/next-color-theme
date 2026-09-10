# CLAUDE.md — Agent Navigation Guide

Project: **Next Color Theme** — Next.js 16 + React 19 live theme customizer.
All source lives under `website/`. Run every command from `website/` unless stated otherwise.

`README.md` is the human-facing product overview (features, stack, routes, structure).
This file is the **agent-facing ground truth**: how to navigate the code, locate logic,
search files, and apply the rules that keep the project stable.

---

## 1. Quick orientation

```
next-color-theme/
  website/                 ← ALL source + dev commands live here
    app/                   ← Next.js App Router pages + global CSS
    src/
      components/
        create/            ← customizer engine (11 pickers + state + export)
        creates/           ← saved-design gallery
        charts/            ← 4 Recharts wrappers
        ui/                ← shadcn primitives
      registry/            ← design-token data (the canonical source of truth)
      lib/                 ← tsconfig-path stubs only
    lib/utils.ts           ← cn() helper
  graphify-out/            ← queryable knowledge graph of the codebase
  .claude/
    rules/                 ← scoped lint rules (ui-primitives.md, charts.md)
    skills/                ← loadable skill files (shadcn, impeccable, ponytail, tailwind-v4)
    plans/                 ← planning artifacts
```

---

## 2. Routes — where each page lives

| URL | Page file | What renders |
|---|---|---|
| `/` | *(no file)* | 307 → `/dashboard` via `website/next.config.ts` |
| `/dashboard` | `website/app/dashboard/page.tsx` | Landing: "Get Design" + "Saved Designs" links |
| `/create` | `website/app/create/page.tsx` | `<Customizer>` sidebar + `<ShowcaseBlock>` in light AND dark |
| `/creates` | `website/app/creates/page.tsx` | `<DesignGallery>` of saved designs |

> **Never add `app/page.tsx`** — it would shadow the `/` → `/dashboard` redirect in `next.config.ts`.

The shared nav `<SiteHeader>` lives in `src/components/site-header.tsx`.
It is mounted **outside** any `ThemeScope` intentionally — it is app chrome, not a themed surface.

---

## 3. How to find logic — a file-by-file map

### State: where config lives

| What | File |
|---|---|
| Live customizer state + reducer + `DesignSystemProvider` | `src/components/create/use-design-system.tsx` |
| `DesignSystemConfig` type (the 13-field shape) | `src/registry/types.ts` |
| Default config (`DEFAULT_CONFIG`) | `use-design-system.tsx` line ~28 |
| localStorage key for live state | `"next-color-theme:create-state"` (same file) |
| Saved designs store (`useSyncExternalStore`) | `src/components/create/use-saved-designs.tsx` |
| localStorage key for saved designs | `"next-color-theme:saved-designs"` (same file) |

### Token data: registry

All design-token data is in `src/registry/`. Add a new token option here first; the
picker and randomizer pick it up automatically.

| File | What's inside |
|---|---|
| `types.ts` | Every TypeScript type used by the customizer |
| `options.ts` | `FONTS`, `THEMES`, `RADII`, `MENU_COLORS`, etc. + getter helpers |
| `accents.ts` | `ACCENTS` array (primary / primaryForeground per accent name) |
| `base-colors.ts` | `BASE_COLORS` array (light + dark CSS var maps per base color) |
| `chart-palettes.ts` | `CHART_PALETTES` (5-swatch arrays keyed by theme name) |
| `styles.ts` | `STYLES` array (wrapperClassName, fontFamily, headingFontFamily) |
| `index.ts` | Re-exports everything; always import from `"@/registry"` |

### Config → CSS: the single pipeline

```
DesignSystemConfig
    │
    ▼
buildThemeVars()          ← src/components/create/build-payload.ts
    │  returns ThemeVars { light, dark, shared }
    ▼
┌─────────────────────────────────────────────────────────┐
│  ThemeScope (live preview)   → injects <style> tag      │
│  StaticThemeScope (/creates) → inline style= on div     │
│  buildPayload() (Get Code)   → formats globals.css text │
└─────────────────────────────────────────────────────────┘
```

**`buildThemeVars()` is the single source of truth.** Do NOT create a second config→CSS mapping.

### Pickers (customizer sidebar controls)

Each picker is a self-contained file in `src/components/create/`:

| Picker file | Controls |
|---|---|
| `style-picker.tsx` | Style (luma, …) |
| `base-color-picker.tsx` | Base color (mist, slate, …) |
| `theme-picker.tsx` | Primary color theme (cyan, blue, …) |
| `chart-color-picker.tsx` | Chart palette |
| `font-picker.tsx` | Body font + heading font (param prop) |
| `icon-library-picker.tsx` | Tabler / Lucide |
| `library-picker.tsx` | Base UI / Radix (export target only) |
| `radius-picker.tsx` | Border radius (none → round) |
| `menu-picker.tsx` | Menu color (default / inverted / translucent) |
| `accent-picker.tsx` | Menu accent (subtle / bold) |

`setting-card.tsx` is the shared row primitive that wraps every picker. It owns the lock toggle UI.
`customizer.tsx` is the sidebar shell that stacks all pickers and the footer action buttons.

### Preview surface

`src/components/create/showcase-block.tsx` — the **only** preview surface.
`/create` mounts it twice: once in `<ThemeScope mode="light">`, once in `<ThemeScope mode="dark">`.

Rules inside the showcase:
- All element `id`s are suffixed with `mode` to avoid duplicate IDs (e.g. `id={email-${mode}}`).
- All data is deterministic module-level consts — no `fetch()`, no `Math.random()` in render.
- Chart type rules: `ProgressRing` for numeric %, `DonutChart` for categorical shares,
  `BarChart` for time-series, `MiniBarChart` for inline row data.

### Export pipeline

`get-code-dialog.tsx` — the UI dialog.
`build-payload.ts` — `buildPayload(config, components)` generates three outputs:
- `componentsJson` — paste-ready `components.json`
- `globalsCss` — paste-ready `globals.css` with literal font family names (not `var()` refs)
- `installCommand` — `npx shadcn@latest init … && npx shadcn@latest add …`

`registry-catalog.ts` — flattens the shadcn manifest for the component picker in the dialog.

### Preset codec

`preset-code.ts` encodes/decodes 10 config fields via `shadcn/preset`.
`mode` and `accent` are **excluded** from presets (mode is a UI toggle; accent is local).
`configFromPresetCode()` returns a partial config; callers overlay `mode`, `accent`, `library`.

### Saved designs

`use-saved-designs.tsx`:
- `useSavedDesigns()` — React hook backed by `useSyncExternalStore` (not setState in effect).
- `findSavedDesign(id)` — one-shot read, used by `use-design-system.tsx` for the `?design=` hand-off.
- `suggestName(config)` — generates "Cyan · Mist · Luma" default name.

### Charts

Four wrappers in `src/components/charts/`:
- `BarChart.tsx` — thin `ui/chart.tsx` wrappers; exports both `BarChart` and `AreaChart`.
- `DonutChart.tsx` — thin `ui/chart.tsx` wrapper.
- `MiniBarChart.tsx` — sparkline bar row.
- `ProgressRing.tsx` — SVG ring for numeric percentage.

`LineChart` and `Sparkline` no longer exist as named exports. Use `ui/chart.tsx`
directly with `type="line"` if needed. `AreaChart` does still exist — it lives in
`BarChart.tsx` and `showcase-block.tsx` renders it.

### UI primitives

`src/components/ui/` — shadcn primitives. **Never hand-write new components here.**
Add primitives with `npx shadcn add <name>` only.

Two files need post-install patches:
- `calendar.tsx` — `CalendarDayButton` must pin `data-day` to `toLocaleDateString("en-GB")`.
- `sonner.tsx` — must have `"use client"` at the top.

### Fonts

Every font the picker offers must be loaded in `app/layout.tsx` with a matching `--font-*`
variable name. The CSS variable name must match the `family` string in `src/registry/options.ts`.
If mismatched, `--font-sans` becomes invalid at computed-value time and the font silently
disappears. `buildPayload` rewrites font stacks to literal family names for export.

---

## 4. How to search for things

| "I want to find…" | Where to look |
|---|---|
| A specific CSS variable (`--primary`, `--background`, etc.) | `src/registry/base-colors.ts` (per base color) or `app/globals.css` |
| Where a token gets written to the DOM | `src/components/create/theme-scope.tsx` → `buildCss()` |
| A specific picker's options | `src/registry/options.ts` or `accents.ts` / `styles.ts` / `chart-palettes.ts` |
| Where `DesignSystemConfig` fields are defined | `src/registry/types.ts` |
| Where state dispatch actions are | `src/components/create/use-design-system.tsx` → `reducer()` |
| The export output format | `src/components/create/build-payload.ts` → `buildPayload()` |
| localStorage key names | `use-design-system.tsx` (`create-state`) + `use-saved-designs.tsx` (`saved-designs`) |
| Shadcn component manifest | `src/components/create/registry-catalog.ts` → `REGISTRY_RAW` |
| Knowledge graph queries | `graphify query "<question>"` or open `graphify-out/graph.html` |

For structural questions ("what depends on X?", "where is Y defined?") prefer:
```bash
graphify query "<question>"
```
over grep. Re-run `/graphify` after major file changes.

---

## 5. Verification gate (mandatory before any "done" claim)

Run from `website/`. All three must exit 0:

```bash
npm run build     # next build — compile + tsc + static prerender
npm run lint      # eslint — 0 errors 0 warnings; keep it there
npx tsc --noEmit  # standalone typecheck (fast feedback)
```

Expected build output: a `Route (app)` table with exactly four `○ (Static)` lines —
`/_not-found`, `/create`, `/creates`, `/dashboard`.

There is no `test` script. Don't add one.

---

## 6. Commands

```bash
# From website/
npm run dev       # next dev — http://localhost:3000
npm run build     # production build (also runs tsc)
npm run start     # serve the build output
npm run lint      # eslint with eslint-config-next
npx tsc --noEmit  # standalone typecheck
npx shadcn add <name>  # add a new shadcn primitive
```

---

## 7. Critical rules

### Code rules
1. **`buildThemeVars()` is the only config→CSS mapping.** Don't add a second one.
2. **All colors in the preview come from CSS variables.** No hardcoded hex/rgb inside `showcase-block.tsx`. Sidebar chrome (`aside`) uses hardcoded hex intentionally — it is not themed.
3. **Never `setState` inside an effect.** Use `useSyncExternalStore` for external stores.
4. **Reducers must be pure.** `randomize` receives its random config as an action payload; `Math.random()` is called by the dispatch site, not inside the reducer.
5. **`DesignSystemConfig` is the serialized shape.** Locks and picked-component list live *beside* it in the store envelope — never inside the config object. The preset codec and `build-payload` round-trip just the config.
6. **`persist` is gated on `state.hydrated`.** Writing before the first localStorage read would clobber saved data with `DEFAULT_CONFIG`.
7. **Use `next/link` for in-app navigation.** Raw `<a>` for internal routes is a regression.
8. **Every font in the picker must be loaded in `app/layout.tsx`.** Missing font variable = silently broken font.
9. **New UI primitives come from `npx shadcn add <name>` only.** Never hand-write into `src/components/ui/`.
10. **Fixtures in `showcase-block.tsx` are module-level consts.** No `fetch`, no `Math.random()` — SSR and both mode copies must agree.

### Lint / CSS rules
- **Lint is clean — keep it zero.** `eslint.config.mjs` has two overrides: `^_`-prefix for unused bindings, and a relaxation for `src/lib/**` + `src/registry/**`. Don't widen those globs.
- **`cn-luma.css` beats Tailwind utilities on portalled surfaces.** Never color a portal (dropdown, dialog) with hardcoded hex — it will lose its background while keeping text color, producing invisible content. Let the primitive take `bg-popover` / `text-popover-foreground` from its token.
- **`app/globals.css` imports `shadcn/tailwind.css`** via `node_modules/shadcn/`. This is NOT a tsconfig alias. Don't remove it.

### Dependencies
- **Don't bump majors opportunistically.** Next, React, shadcn, Tailwind major bumps are multi-day yak-shaves.
- **No backend / no `fetch()` in the app.** Everything is localStorage. No server-side data.
- **`next.config.ts` has no `images` block.** Adding a remote image requires `images.remotePatterns` back.

---

## 8. Known pitfalls

- **`calendar.tsx` hydration mismatch.** `CalendarDayButton` must pin `data-day` to
  `toLocaleDateString("en-GB")`. Without it, Node and browser disagree on zero-padding and
  React reports a mismatch on every day cell. Re-apply after any `npx shadcn add calendar`.
- **`sonner.tsx` missing `"use client"`.** The shadcn CLI writes it without one; it calls
  `useTheme`, and `app/layout.tsx` is a server component. Re-add after any `npx shadcn add sonner`.
- **The store hydrates once; `persist` is gated on `state.hydrated`.** Both live in the
  reducer. Mount effects all run in the same commit, so a ref set by the hydrate effect is
  already `true` when the persist effect runs — which would silently write `DEFAULT_CONFIG`
  over saved state. The hydrate effect is idempotent (React double-invokes in dev).

---

## 9. Scoped rules and skills

**Scoped rules** (read before touching those directories):
- `website/src/components/ui/` → `.claude/rules/ui-primitives.md`
- `website/src/components/charts/` → `.claude/rules/charts.md`

**Skills** (under `.claude/skills/<name>/SKILL.md`):
- `shadcn` — shadcn component-library rules for this project.
- `impeccable` — frontend design intelligence (dashboard mode).
- `ponytail` — YAGNI / lazy-coding discipline.
- `tailwind-v4` — Tailwind v4 + shadcn `base-luma` rules. Auto-loads when editing
  `app/globals.css`, `components.json`, `postcss.config.mjs`, or anything in `src/components/ui/`.

> Note: `shadcn`, `impeccable`, and `ponytail` ship with YAML frontmatter and `{{template}}`
> references written for a different skill runtime — those won't resolve in Claude Code.
> The rules text inside each file is usable as-is.

---

## 10. Knowledge graph

`graphify-out/` holds a persistent knowledge graph of the codebase.

- `graph.json` — raw graph data, queryable via `graphify query "<question>"`.
- `GRAPH_REPORT.md` — human-readable summary.
- `graph.html` — interactive browser visualization (open in any browser, no server needed).
- `manifest.json` — incremental-update source of truth.
- `cache/` + `cost.json` — per-user build artifacts (gitignored).

When asked "what depends on X?", "where is Y defined?", or "trace the path from A to B",
prefer `graphify query "<question>"` over grep. Re-run `/graphify` after major file changes.

---

## 11. Working style

When a task has more than one reasonable interpretation or could regress the page,
**stop and ask**. Default to the smallest diff that satisfies the task; don't refactor
adjacent code in passing.

Branching: feature branches off `main`, squash-merged. Conventional commits
(`feat:`, `fix:`, `chore:`, …). No release branches — this is not a published package.
