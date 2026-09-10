# KSPRAVEEN20 Profile Website

**Next Color Theme** is a live theme customizer for shadcn dashboards — pick every visual
dimension of a shadcn design system in a sidebar, see a full component showcase re-skin
in real time (light *and* dark simultaneously), then export a paste-ready `globals.css`
and `npx shadcn add` command tailored to exactly the components you chose.

---

## ✨ Features

Customizer controls, presets, save/export flow → see [CUSTOMIZATION.md](CUSTOMIZATION.md).

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2 (App Router, Turbopack) |
| UI + React | React 19.2, shadcn UI (`base-luma` style), Base UI (`@base-ui/react`) |
| Styling | Tailwind CSS v4, PostCSS, `tw-animate-css`, `clsx`, `tailwind-merge` |
| Icons | Tabler Icons (`@tabler/icons-react`) |
| Data visualization | Recharts 3.10 |
| Fonts | next/font/google — Geist, Inter, Noto Sans, JetBrains Mono, EB Garamond |
| Persistence | Browser `localStorage` only — no backend |

---

## 🚀 Getting Started

```bash
cd website
npm install
npm run dev
```

Open <http://localhost:3000> — it redirects to `/dashboard`.

---

## 🧭 Routes

| Route | What it is |
|---|---|
| `/` | 307 redirect to `/dashboard` (declared in `website/next.config.ts`) |
| `/dashboard` | Landing page — "Get Design" → `/create`, "Saved Designs" → `/creates` |
| `/create` | Customizer sidebar + the showcase block in light and dark side by side |
| `/creates` | Gallery of saved designs — load, rename, delete |

---

## 📦 Project Structure

```
website/
  app/
    layout.tsx            # fonts (next/font) + globals.css + <Toaster />
    dashboard/page.tsx    # landing
    create/page.tsx       # the customizer
    creates/page.tsx      # saved designs gallery
    globals.css           # oklch design tokens + @theme inline + @layer base
    cn-luma.css           # shadcn base-luma overrides
  src/
    components/
      create/             # customizer engine
        customizer.tsx         # sidebar shell (11 pickers + footer actions)
        setting-card.tsx       # shared row primitive + lock toggle
        *-picker.tsx           # 11 individual picker controls
        use-design-system.tsx  # state (reducer + DesignSystemProvider)
        theme-scope.tsx        # CSS variable injection into .theme-scope
        showcase-block.tsx     # the full component preview (mounts twice)
        build-payload.ts       # config → ThemeVars + export output
        get-code-dialog.tsx    # export UI (globals.css / components.json / install)
        preset-code.ts         # preset encode / decode via shadcn/preset
        registry-catalog.ts   # flattens shadcn manifest for component picker
        save-design-dialog.tsx # save-design form
        use-saved-designs.tsx  # localStorage store for saved designs
      creates/
        design-gallery.tsx     # /creates grid of saved design cards
        saved-count.tsx        # badge count shown in the nav
      charts/
        BarChart.tsx           # time-series bars (Recharts)
        DonutChart.tsx         # categorical shares
        MiniBarChart.tsx       # inline row sparkline
        ProgressRing.tsx       # SVG ring for numeric %
      ui/                  # shadcn primitives (add with: npx shadcn add <name>)
      site-header.tsx      # shared nav across all routes
    registry/              # design-token source of truth
      types.ts             # TypeScript types (DesignSystemConfig, etc.)
      options.ts           # FONTS, THEMES, RADII, MENU_COLORS, getters
      accents.ts           # ACCENTS (primary + primaryForeground per name)
      base-colors.ts       # BASE_COLORS (light + dark CSS var maps)
      chart-palettes.ts    # CHART_PALETTES (5-swatch arrays)
      styles.ts            # STYLES (wrapperClassName, font families)
      index.ts             # re-exports everything
    lib/                   # module stubs wired via tsconfig paths
  lib/utils.ts             # cn() — the only clsx/tailwind-merge helper
```

---

## ⚙️ How the theming works

1. **User picks settings** in the `<Customizer>` sidebar → calls `store.set()`.
2. **`use-design-system.tsx`** holds the `DesignSystemConfig` in a `useReducer` store
   and persists it to `localStorage` under `next-color-theme:create-state`.
3. **`buildThemeVars(config)`** in `build-payload.ts` resolves the config into a
   `ThemeVars` object — `{ light, dark, shared }` maps of CSS custom property values.
4. **`ThemeScope`** (in `theme-scope.tsx`) calls `buildThemeVars` and injects a `<style>`
   tag scoped to `.theme-scope`. `/create` mounts `<ShowcaseBlock>` inside a light scope
   and a dark scope side by side.
5. **Export** — clicking "Get Code" calls `buildPayload()` which calls the same
   `buildThemeVars()`, formats the result as a standalone `globals.css`, and generates
   the matching `components.json` and install command.

The same function drives the live preview, the `/creates` thumbnails, and the export.
**What you see is exactly what you copy.**

---

## 💾 Persistence

All state is **localStorage only** — there is no backend.

| Key | Contents |
|---|---|
| `next-color-theme:create-state` | Live customizer config + locks + component list |
| `next-color-theme:saved-designs` | Array of saved design snapshots |

Saved designs are written as `{ id, name, config, createdAt, updatedAt }` objects.
Opening a saved design from `/creates` navigates to `/create?design=<id>`, which the
customizer reads on mount and then cleans the URL.

---

## 🛠️ Scripts

Run from `website/`:

```bash
npm run dev     # development server (Turbopack)
npm run build   # production build (also typechecks via tsc)
npm run start   # serve the production build
npm run lint    # eslint with eslint-config-next
npx tsc --noEmit  # standalone typecheck
```

`npm run build`, `npm run lint`, and `npx tsc --noEmit` all currently exit 0.

---

## 📊 Knowledge Graph

`graphify-out/` holds a queryable knowledge graph of the codebase.

- Open `graphify-out/graph.html` in any browser for the interactive visualization.
- Read `graphify-out/GRAPH_REPORT.md` for the text summary.
- Run `graphify query "<question>"` to query the graph from the CLI.
