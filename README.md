# Next Color Theme

Next Color Theme is a live theme customizer for shadcn dashboards. It allows picking visual dimensions of a shadcn design system in a sidebar and seeing a full component showcase re-skin in real time (light and dark simultaneously). Users can then export a `globals.css` and `npx shadcn add` command tailored to their selected components.

---

## Features

Customizer controls, presets, and save/export flow. See [CUSTOMIZATION.md](CUSTOMIZATION.md).

---

## Technology Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2 (App Router, Turbopack) |
| UI + React | React 19.2, shadcn UI (base-luma style), Base UI (@base-ui/react) |
| Styling | Tailwind CSS v4, PostCSS, tw-animate-css, clsx, tailwind-merge |
| Icons | Tabler Icons (@tabler/icons-react) |
| Data visualization | Recharts 3.10 |
| Fonts | next/font/google — Geist, Inter, Noto Sans, JetBrains Mono, EB Garamond |
| Persistence | Browser localStorage only — no backend |

---

## Getting Started

```bash
cd website
npm install
npm run dev
```

Open http://localhost:3000 — it redirects to /dashboard.

---

## Routes

| Route | Purpose |
|---|---|
| / | 307 redirect to /dashboard |
| /dashboard | Landing page — "Get Design" to /create, "Saved Designs" to /creates |
| /create | Customizer sidebar and showcase block in light and dark modes |
| /creates | Gallery of saved designs — load, rename, and delete |

---

## Project Structure

```
website/
  app/
    layout.tsx            # fonts, globals.css, and Toaster
    dashboard/page.tsx    # landing page
    create/page.tsx       # customizer page
    creates/page.tsx      # saved designs gallery
    globals.css           # design tokens and theme variables
    cn-luma.css           # shadcn base-luma overrides
  src/
    components/
      create/             # customizer engine
        customizer.tsx         # sidebar shell
        setting-card.tsx       # shared row primitive
        *-picker.tsx           # individual picker controls
        use-design-system.tsx  # state management
        theme-scope.tsx        # CSS variable injection
        showcase-block.tsx     # component preview
        build-payload.ts       # config to CSS logic
        get-code-dialog.tsx    # export UI
        preset-code.ts         # preset encoding/decoding
        registry-catalog.ts   # shadcn manifest flattening
        save-design-dialog.tsx # save design form
        use-saved-designs.tsx  # localStorage store
      creates/
        design-gallery.tsx     # saved designs grid
        saved-count.tsx        # navigation badge
      charts/
        BarChart.tsx           # time-series bars
        DonutChart.tsx         # categorical shares
        MiniBarChart.tsx       # inline sparkline
        ProgressRing.tsx       # SVG numeric percentage
      ui/                  # shadcn primitives
      site-header.tsx      # shared navigation
    registry/              # design-token source of truth
      types.ts             # TypeScript types
      options.ts           # fonts, themes, radii, and menu colors
      accents.ts           # accent color maps
      base-colors.ts       # base color maps
      chart-palettes.ts    # chart color swatches
      styles.ts            # style configurations
      index.ts             # registry entry point
    lib/                   # module stubs
  lib/utils.ts             # cn() helper
```

---

## How Theming Works

1. **User picks settings** in the Customizer sidebar.
2. **use-design-system.tsx** stores the config in a reducer and persists it to localStorage.
3. **buildThemeVars(config)** in build-payload.ts resolves config into a ThemeVars object (light, dark, shared CSS variables).
4. **ThemeScope** in theme-scope.tsx injects these variables into a style tag. /create mounts the showcase block in both light and dark scopes.
5. **Export** calls buildPayload(), which uses buildThemeVars() to generate a standalone globals.css, components.json, and install command.

The same logic drives the live preview, thumbnails, and export.

---

## Persistence

All state is localStorage only.

| Key | Contents |
|---|---|
| next-color-theme:create-state | Live customizer config, locks, and component list |
| next-color-theme:saved-designs | Array of saved design snapshots |

Saved designs are stored as objects with id, name, config, and timestamps. Opening a design from /creates uses a query parameter (?design=id).

---

## Scripts

Run from website/:

```bash
npm run dev     # development server
npm run build   # production build and typecheck
npm run start   # serve production build
npm run lint    # eslint check
npx tsc --noEmit  # standalone typecheck
```

---

## Knowledge Graph

graphify-out/ holds a queryable knowledge graph of the codebase.

See [GRAPHIFY.md](GRAPHIFY.md) for usage details, commands, and artifacts.
