# Website Workspace — Next Color Theme

The **Next.js 16 (App Router)** application. See the repo-root `README.md` for
the product overview and `CLAUDE.md` for engineering ground truth.

## 🚀 Quick Start

```bash
npm install
npm run dev     # http://localhost:3000 → redirects to /dashboard
npm run lint
npm run build
npm run start
```

## 🧭 Routes

**`/dashboard`** (landing), **`/create`** (customizer), **`/creates`** (saved
designs). `/` is a 307 redirect to `/dashboard`, declared in `next.config.ts`.
There is no `app/page.tsx`; adding one would shadow the redirect.

## 📦 Key Folder Locations

- `app/` – `layout.tsx`, `dashboard/`, `create/`, `creates/`, `globals.css`,
  `cn-luma.css`.
- `src/components/create/` – the customizer: `customizer.tsx` (sidebar shell),
  `*-picker.tsx` (controls), `setting-card.tsx` (shared row primitive + lock),
  `use-design-system.tsx` (state), `build-payload.ts` (config → tokens and the
  export), `theme-scope.tsx` (CSS variable injection), `showcase-block.tsx`
  (the previewed component set), `get-code-dialog.tsx` (export UI),
  `registry-catalog.ts` (component picker data), `use-saved-designs.tsx`.
- `src/components/creates/` – `design-gallery.tsx`, `saved-count.tsx`.
- `src/registry/` – design-token source of truth read by `build-payload.ts`.
- `src/components/charts/` – `BarChart`, `DonutChart`, `MiniBarChart`,
  `ProgressRing`.
- `src/components/ui/` – shadcn primitives (`npx shadcn add <name>` for more)
  plus `icon-placeholder.tsx`.
- `src/lib/` – `lucide-react.ts` and `stub-empty.ts`, stub modules resolved via
  `tsconfig.json` `paths`. Not application code.
- `lib/utils.ts` – the `cn()` helper.
