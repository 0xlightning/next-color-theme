---
paths:
  - "website/src/components/ui/**"
---

# UI primitives rules

## How to add a new primitive

1. Run `npx shadcn add <name>` from `website/`. The CLI writes into
   `src/components/ui/` per `components.json`.
2. There is **no `index.ts` barrel** in this folder (it was removed as
   unused). Import primitives by file path: `@/components/ui/button`.
3. Do not edit `src/components/ui/_registry.ts` manually — it's
   generated from registry metadata; manual edits desync it. It lists the
   full upstream catalogue (60 items), including primitives not present in
   this folder; that's expected. It is **not** dead code: the Get Code
   component picker reads it through
   `src/components/create/registry-catalog.ts`, including each item's
   `registryDependencies`.

## What's here

Only the primitives the `/create` showcase block actually renders.
Unused primitives were deleted. If you need `sheet`, `command`, `sidebar`,
`alert-dialog`, etc., run `npx shadcn add <name>`; don't hand-write them back.

`sonner.tsx` ships **without** a `"use client"` directive — add one back
after any re-add, or `app/layout.tsx` (a server component) fails to build.

`icon-placeholder.tsx` is **project-local, not shadcn**. It resolves a
`tabler` icon name to a component and falls back to a rounded square. It
also accepts `lucide` / `hugeicons` / `phosphor` / `remixicon` props so the
customizer's icon-library picker can round-trip them without leaking onto
the `<svg>` — those bindings are `_`-prefixed on purpose. Only tabler is
bundled.

## Theme tokens

- Colors come from `app/globals.css` oklch tokens. The matching entries
  in the `@theme inline { … }` block of the same file expose them as
  Tailwind utilities. There is no `tailwind.config.ts` in `components.json`
  (`tailwind.config = ""`) — **but a legacy `website/tailwind.config.ts`
  exists** from create-next-app. It is v3-style and inert under v4
  (v4 uses `@theme inline`), but it is committed. Don't add new entries
  to it. Don't add new colors as hex anywhere in `src/components/ui/`.
- The `base-luma` style + `mist` baseColor in `components.json` defines
  the visual baseline. Don't change those without an explicit pass.
- For deeper Tailwind v4 + shadcn rules (the `@theme inline` token
  dance, Base UI vs Radix, `--font-mono` vs `--font-geist-mono`, etc.),
  see the `tailwind-v4` skill under `.claude/skills/tailwind-v4/`.

## The generic `Chart`

`ui/chart.tsx` carries the upstream shadcn `ChartContainer` / `ChartTooltip`
stack **plus** a project-local `Chart` component appended at the bottom:

```tsx
export type ChartDatum = Record<string, string | number>
export function Chart({ type, data, className }: {
  type?: "bar" | "line" | "area" | "donut"
  data: ChartDatum[]
  className?: string
})
```

It infers the x-axis key and series keys from `data[0]`, so every row must
share a shape. `src/components/charts/BarChart` and `DonutChart` are thin
wrappers over it. Editing this file is the sanctioned way to add a custom
Recharts prop — it is the one hand-maintained part of `ui/`.

## Sibling rules

These scoped rules apply to other folders — they don't conflict with
this one, but you should read them when relevant:

- `.claude/rules/charts.md` — `website/src/components/charts/**`
  (4 Recharts wrappers, typed prop contracts, palette convention).
