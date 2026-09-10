# CLAUDE.md — Agent Navigation Guide

Project: Next Color Theme — Next.js 16 + React 19 live theme customizer.
All source lives under website/. Run commands from website/ unless stated otherwise.

README.md is the human-facing overview. This file is the agent-facing ground truth for navigating the code and applying stability rules.

---

## 1. Quick Orientation

```
next-color-theme/
  website/                 # ALL source + dev commands
    app/                   # Next.js App Router pages + global CSS
    src/
      components/
        create/            # customizer engine
        creates/           # saved-design gallery
        charts/            # Recharts wrappers
        ui/                # shadcn primitives
      registry/            # design-token source of truth
      lib/                 # tsconfig-path stubs
    lib/utils.ts           # cn() helper
  graphify-out/            # queryable knowledge graph
  .claude/
    rules/                 # scoped lint rules
    skills/                # loadable skill files
    plans/                 # planning artifacts
```

---

## 2. Routes

| URL | Page file | Purpose |
|---|---|---|
| / | (no file) | 307 redirect to /dashboard |
| /dashboard | website/app/dashboard/page.tsx | Landing page |
| /create | website/app/create/page.tsx | Customizer and showcase preview |
| /creates | website/app/creates/page.tsx | Saved designs gallery |

Do not add app/page.tsx as it shadows the redirect in next.config.ts.

---

## 3. Logic Map

### State
- Live state: src/components/create/use-design-system.tsx
- Types: src/registry/types.ts
- Saved designs: src/components/create/use-saved-designs.tsx

### Registry
All tokens live in src/registry/. Add new options here first.
- types.ts: TypeScript types
- options.ts: Fonts, themes, radii, menu colors
- accents.ts: Primary and foreground colors
- base-colors.ts: Base color maps
- chart-palettes.ts: Chart swatches
- styles.ts: Style configurations

### Theme Pipeline
DesignSystemConfig -> buildThemeVars() (build-payload.ts) -> ThemeVars (light, dark, shared) -> ThemeScope (CSS injection) / buildPayload (CSS export).

buildThemeVars() is the single source of truth for config-to-CSS mapping.

### Pickers
Located in src/components/create/. Examples: style-picker.tsx, base-color-picker.tsx, font-picker.tsx.
setting-card.tsx is the shared row primitive.

### Preview
src/components/create/showcase-block.tsx is the only preview surface.
- IDs are suffixed with mode (e.g., email-light).
- Data is deterministic module-level constants.

### Export
build-payload.ts generates components.json, globals.css, and install commands.
registry-catalog.ts provides the shadcn manifest for the component picker.

### Presets
preset-code.ts handles encoding/decoding. mode and accent are excluded from presets.

### Saved Designs
use-saved-designs.tsx handles storage and retrieval via localStorage.

### Charts
Wrappers in src/components/charts/: BarChart, DonutChart, MiniBarChart, ProgressRing.

### UI Primitives
src/components/ui/ contains shadcn primitives. Use npx shadcn add <name> to add new ones.
Patch calendar.tsx (toLocaleDateString) and sonner.tsx ("use client") after install.

### Fonts
All fonts must be loaded in app/layout.tsx with a variable matching the family string in src/registry/options.ts.

---

## 4. Search Guide

| Goal | Location |
|---|---|
| CSS variables | src/registry/base-colors.ts or app/globals.css |
| DOM injection | src/components/create/theme-scope.tsx -> buildCss() |
| Picker options | src/registry/options.ts or accents.ts/styles.ts |
| Config fields | src/registry/types.ts |
| State actions | src/components/create/use-design-system.tsx -> reducer() |
| Export format | src/components/create/build-payload.ts -> buildPayload() |
| LocalStorage keys | use-design-system.tsx and use-saved-designs.tsx |
| Component manifest | src/components/create/registry-catalog.ts |
| Graph queries | graphify query "<question>" or graphify-out/graph.html |

**AI Usage Rule**: Always prefer `graphify query "<question>"` over grep for structural lookups (e.g., "what depends on X?", "where is Y defined?"). This minimizes context bloat and increases accuracy. Re-run `/graphify` after major file changes.

---

## 5. Verification Gate

Run from website/. All must exit 0:
- npm run build
- npm run lint
- npx tsc --noEmit

---

## 6. Commands

```bash
# From website/
npm run dev       # development server
npm run build     # production build
npm run start     # serve build
npm run lint      # eslint
npx tsc --noEmit  # typecheck
npx shadcn add <name>  # add shadcn primitive
```

---

## 7. Critical Rules

### Code
1. buildThemeVars() is the only config-to-CSS mapping.
2. Preview colors must use CSS variables. Sidebar chrome uses hardcoded hex.
3. No setState inside effects. Use useSyncExternalStore.
4. Reducers must be pure.
5. DesignSystemConfig is the serialized shape. Locks and picks live outside it.
6. Persist is gated on state.hydrated.
7. Use next/link for internal navigation.
8. All picker fonts must be in app/layout.tsx.
9. Add UI primitives via npx shadcn add only.
10. Showcase fixtures must be module-level constants.

### Lint and CSS
- Keep lint errors and warnings at zero.
- Use bg-popover/text-popover-foreground for portals.
- app/globals.css must import shadcn/tailwind.css.

### Dependencies
- No opportunistic major version bumps.
- No backend or fetch() in the app. LocalStorage only.
- next.config.ts has no images block.

---

## 8. Known Pitfalls

- calendar.tsx: Pin data-day to toLocaleDateString("en-GB") to avoid hydration mismatch.
- sonner.tsx: Ensure "use client" is at the top.
- Store hydration: Persist is gated on state.hydrated to prevent clobbering saved data.

---

## 9. Scoped Rules and Skills

Rules:
- website/src/components/ui/ -> .claude/rules/ui-primitives.md
- website/src/components/charts/ -> .claude/rules/charts.md

Skills:
- shadcn, impeccable, ponytail, tailwind-v4.

---

## 10. Knowledge Graph

graphify-out/ holds a persistent knowledge graph of the codebase.
See [GRAPHIFY.md](GRAPHIFY.md) for complete usage, commands, and artifacts.

**AI Usage Rule**: Always prefer `graphify query "<question>"` over grep for structural lookups (e.g., "what depends on X?", "where is Y defined?"). This minimizes context bloat and increases accuracy. Re-run `/graphify` after major file changes.

---

## 11. Working Style

Stop and ask if a task has multiple interpretations. Use the smallest diff possible.
Branch off main, squash-merge. Use conventional commits.
