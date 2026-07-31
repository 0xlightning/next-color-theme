---
paths:
  - "website/src/components/ui/**"
---

# UI primitives rules

## How to add a new primitive

1. Run `npx shadcn add <name>` from `website/`. The CLI writes into
   `src/components/ui/` per `components.json`.
2. Confirm the new file is added to `src/components/ui/index.ts` barrel
   (the CLI usually does this; verify).
3. Do not edit `src/components/ui/_registry.ts` manually — it's
   generated from registry metadata; manual edits desync it.

## Theme tokens

- Colors come from `app/globals.css` oklch tokens. The matching entries
  in the `@theme inline { … }` block of the same file expose them as
  Tailwind utilities. There is no `tailwind.config.ts` — do not create
  one. Don't add new colors as hex anywhere in `src/components/ui/`.
- The `base-luma` style + `mist` baseColor in `components.json` defines
  the visual baseline. Don't change those without an explicit pass.
- For deeper Tailwind v4 + shadcn rules (the `@theme inline` token
  dance, Base UI vs Radix, `--font-mono` vs `--font-geist-mono`, etc.),
  see the `tailwind-v4` skill under `.claude/skills/tailwind-v4/`.

## Vendored upstream

- `website/shadcn-extraction/` is the source of truth for upstream
  patterns but is not the same tree as `src/components/ui/`. Patterns
  and API shapes may drift; check both before assuming parity.

## Sibling rules

These scoped rules apply to other folders — they don't conflict with
this one, but you should read them when relevant:

- `.claude/rules/widgets.md` — `website/src/components/widgets/**`
  (kebab-case folders, optional `data` prop, mock-first, right chart
  primitive per shape).
- `.claude/rules/charts.md` — `website/src/components/charts/**`
  (7 Recharts wrappers, typed prop contracts, palette convention).
