# Next Color Theme

A **Next.js 16** / **React 19** live theme customizer for a shadcn dashboard.
Pick a style, base color, accent, chart palette, fonts, icon library, radius,
and menu treatment in the sidebar; a full component showcase re-skins
instantly underneath, rendered twice so you see light and dark at once.

Lock any setting so Shuffle leaves it alone, save designs to revisit later,
and export the theme as a paste-ready `globals.css` plus a `shadcn add`
command for exactly the components you pick.

---

## 🛠️ Technology Stack

- **Framework:** Next.js 16.2 (App Router with Turbopack)
- **UI & React:** React 19.2, shadcn UI (`base-luma` style), Base UI (`@base-ui/react`)
- **Styling:** Tailwind CSS v4, PostCSS, `tw-animate-css`, `clsx`, `tailwind-merge`
- **Icons:** Tabler Icons (`@tabler/icons-react`)
- **Data Visualization:** Recharts 3.10

---

## 🚀 Getting Started

The application source lives in `website/`.

```bash
cd website
npm install
npm run dev
```

Then open <http://localhost:3000> — it redirects to `/dashboard`.

---

## 🧭 Routes

| Route | What it is |
| --- | --- |
| `/dashboard` | Landing page. "Get Design" → `/create`, "Saved Designs" → `/creates`. |
| `/create` | Customizer sidebar + the showcase block in light and dark. |
| `/creates` | Gallery of saved designs — load, rename, delete. |
| `/` | 307 redirect to `/dashboard` (declared in `website/next.config.ts`). |

---

## 📦 Project Structure

```
website/
  app/
    layout.tsx          # fonts + globals.css + <Toaster />
    dashboard/page.tsx  # landing
    create/page.tsx     # the customizer
    creates/page.tsx    # saved designs
    globals.css         # oklch design tokens
    cn-luma.css
  src/
    components/
      create/           # customizer: pickers, state, theme injection, showcase, export
      creates/          # saved-design gallery
      charts/           # BarChart, DonutChart, MiniBarChart, ProgressRing
      ui/               # shadcn primitives + icon-placeholder
      site-header.tsx   # shared nav
    registry/           # design-token source of truth (accents, base colors, palettes, styles)
    lib/                # module stubs wired in via tsconfig paths
  lib/utils.ts          # cn()
```

**How the theming works:** `use-design-system.tsx` holds the selected config.
`build-payload.ts` turns that config into a token set — one function used by
everything. `theme-scope.tsx` writes those tokens into a `<style>` tag scoped
to `.theme-scope`, and `/create` mounts `showcase-block.tsx` inside a light
scope and a dark scope side by side. The same function generates the exported
`globals.css` and paints the `/creates` thumbnails, so what you see is what you
copy. No page reload, no rebuild.

**Where things are stored:** everything is localStorage — the live customizer
state under `next-color-theme:create-state`, saved designs under
`next-color-theme:saved-designs`. There is no backend.

---

## 🛠️ Scripts

Run from `website/`:

```bash
npm run dev     # development server
npm run build   # production build (also typechecks)
npm run start   # serve the build output
npm run lint    # eslint
```

`npm run build`, `npm run lint`, and `npx tsc --noEmit` all currently exit 0.

---

## 📊 Knowledge Graph

`graphify-out/` holds a queryable knowledge graph of the codebase. Open
`graphify-out/graph.html` in a browser for the interactive view, or read
`graphify-out/GRAPH_REPORT.md` for the summary.
