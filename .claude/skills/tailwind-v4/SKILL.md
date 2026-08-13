---
name: tailwind-v4
description: Use when editing Tailwind v4 + shadcn (base-luma) styles, tokens, or PostCSS in this dashboard project. Triggers on globals.css edits, components.json changes, theme tokens, color/mode work, or any agent reaching for v3 patterns (tailwind.config.ts, dark:bg-…, hsl(var(--…))).
paths:
  - "website/app/globals.css"
  - "website/components.json"
  - "website/postcss.config.mjs"
  - "website/tailwind.config.ts"
  - "website/src/components/ui/**"
---

<!--
NOTE (this project): This is a Claude Code skill, rules only. No sibling
files or template variables to resolve. The references throughout are
file paths inside the repo — read them, don't try to follow links.
-->

# Tailwind v4 + shadcn (base-luma) — Project Rules

## Versions in this project (commit these as facts)

- `next` 16.2.11; `react` / `react-dom` 19.2.4
- `tailwindcss` ^4 + `@tailwindcss/postcss` ^4 (PostCSS plugin is the v4 way; there is no `tailwind.config.{js,ts}`)
- `shadcn` ^4.14.0; style `base-luma`; baseColor `mist`; iconLibrary `tabler`; `rsc: false`; `rtl: true`; `menuColor: inverted`; `menuAccent: bold`
- `tw-animate-css` ^1.4.0 (animations layer, imported in `app/globals.css`)
- `class-variance-authority` ^0.7.1 + `tailwind-merge` ^3.6.0 + `clsx` ^2.1.1 — all routed through `lib/utils.ts::cn()`
- `@base-ui/react` ^1.6.0 — `base-luma` uses **Base UI** primitives, not Radix. Primitive slots come from `@base-ui/react/<slot>` (e.g. `@base-ui/react/button`).

## Where configuration lives

- `app/globals.css` is the only stylesheet Tailwind reads. It is wired in by `app/layout.tsx`.
- Top of the file (order matters): `@import "tailwindcss";`, then `@import "tw-animate-css";`, then `@import "shadcn/tailwind.css";`. The third import resolves through **`node_modules/shadcn/`** (the CLI package is a real npm dependency), NOT a `@shadcn/react/*` tsconfig alias — that alias does not exist in `tsconfig.json`.
- `@custom-variant dark (&:is(.dark *));` redeclares the dark variant for v4. Delete it and the `dark:` modifier regresses to v3 behavior.
- `:root { … }` carries the light-mode `oklch(…)` tokens. `.dark { … }` redefines them for dark mode. `@theme inline { … }` mirrors `:root` into Tailwind's color / radius / font utility namespace.
- `components.json` declares `tailwind.config = ""` and `tailwind.css = "app/globals.css"` — components.json claims no JS/TS config.
- `postcss.config.mjs` registers `@tailwindcss/postcss` only. No autoprefixer, no `postcss-import` — Tailwind v4 handles both.
- ⚠️ **`website/tailwind.config.ts` exists** and is v3-style (`Config` type, `darkMode: 'class'`, `hsl(var(--…))` color mapping). It is effectively inert because Tailwind v4 reads tokens from `@theme inline` in `globals.css`, but it is committed. Two reasonable moves: (a) delete it (the v4 utilities come from `globals.css`), or (b) keep it as long as it doesn't shadow v4. The skill's "Forbidden places" rule below says "no `tailwind.config.{js,ts}`" — that is the intent; if the file is kept, leave a comment in it explaining why it's vestigial.

## Token addition rule

When adding a new color, radius, or font:

1. Declare `--my-token: oklch(…);` inside `:root` in `app/globals.css`.
2. Add the dark override inside `.dark` if it changes in dark mode.
3. Expose it in `@theme inline` as `--color-my-token: var(--my-token);` (or `--radius-*`, `--font-*`).
4. Consume via the utility (`bg-my-token`, `rounded-my-token`, `font-my-token`). Never write the raw `var()` in component files.

Never hardcode hex / rgb in component files. The only existing raw hex values (`#0a0a0a`, `#ededed`) live in a `@media (prefers-color-scheme: dark)` block in `app/globals.css` and are the only allowed exceptions — do not propagate that pattern.

## Token names that already exist (use these, don't invent new ones)

> Only the **color** tokens exist as raw `--…` declarations in `:root` inside `app/globals.css`. **Radius** and **font** tokens do NOT exist as raw `--…` declarations — they are derived inside the `@theme inline` block (radius scales compute from `--radius`; fonts reference layout-set vars).

- Surfaces (raw): `--background`, `--foreground`, `--card`, `--card-foreground`, `--popover`, `--popover-foreground`
- Brand (raw): `--primary`, `--primary-foreground`, `--secondary`, `--secondary-foreground`, `--accent`, `--accent-foreground`, `--muted`, `--muted-foreground`, `--destructive`, `--destructive-foreground`
- Lines / focus (raw): `--border`, `--input`, `--ring`
- Charts (raw): `--chart-1` … `--chart-5` (oklch, already mapped into `@theme inline`)
- Sidebar (raw): `--sidebar`, `--sidebar-foreground`, `--sidebar-primary`, `--sidebar-primary-foreground`, `--sidebar-accent`, `--sidebar-accent-foreground`, `--sidebar-border`, `--sidebar-ring`
- Code / surface / selection (raw, NOT yet mapped into `@theme inline`): `--surface`, `--surface-foreground`, `--code`, `--code-foreground`, `--code-highlight`, `--code-number`, `--selection`, `--selection-foreground` — declared in `tailwind.config.ts` (legacy), not in `globals.css`. Don't add new ones here without wiring both sides.
- Radius (derived only — NO raw token): base `--radius` = `0.45rem` in `:root`; `sm/md/lg/xl/2xl/3xl/4xl` scales compute via `calc()` inside `@theme inline`
- Fonts (set at runtime in `app/layout.tsx`; mapped into `@theme inline`): `--font-sans`, `--font-heading`, `--font-geist-mono`, `--font-geist-sans` (the last one is set by `Geist` from `next/font/google` even though `globals.css` does not redeclare it — utility `font-sans` works through `--font-sans`)

## Font wiring

`app/layout.tsx` sets **four** font CSS variables on `<html>` via `next/font/google`:

- `--font-sans` ← `Noto_Sans`
- `--font-heading` ← `EB_Garamond`
- `--font-geist-mono` ← `Geist_Mono`
- `--font-geist-sans` ← `Geist` (declared in `layout.tsx` but **not** referenced from `@theme inline` — its variable class is still applied to `<html>`)

`@theme inline` re-exposes `--font-sans`, `--font-heading`, and `--font-mono` (note: `--font-mono` maps to the internal `var(--font-geist-mono)` — the CSS variable name and the utility name differ on purpose).

Use `font-sans` / `font-heading` / `font-mono` utilities. Do not redefine a font family anywhere else.

## Components use these conventions

- Color via semantic tokens (`bg-primary`, `text-muted-foreground`) — never `bg-blue-500` or `text-[#…]`.
- Spacing via `flex` + `gap-*`, never `space-x-*` / `space-y-*`.
- Equal dimensions via `size-*`, never `w-* h-*` separately.
- Truncation via `truncate`, never hand-rolled `overflow-hidden text-ellipsis whitespace-nowrap`.
- No manual `dark:` overrides — semantic tokens handle it.
- No manual `z-index` on Dialog / Sheet / Popover / Drawer — they self-stack.
- Import `cn` from `@/lib/utils` (resolves to `lib/utils.ts`). Don't import `clsx` or `tailwind-merge` directly in component files.
- shadcn primitive variants reference semantic class hooks like `cn-button-variant-default`, declared in `shadcn/tailwind.css` — don't substitute raw Tailwind utilities inside a variant.

## shadcn add only

- `npx shadcn@latest add <name>` from `website/` is the only way to introduce a new primitive.
- After adding, verify: the file lands under `src/components/ui/<name>.tsx`, the import aliases (`@/components/ui`, `@/lib/utils`, `@/components`, `@/hooks`) match `components.json` aliases, and `src/components/ui/_registry.ts` (generated from registry metadata) reflects the new primitive.
- Don't hand-write into `src/components/ui/` — the `components.json` manifest and the vendored registry tree drift otherwise.

## Forbidden places

- No new files under `src/theme/` (orphan CSS that no module imports; Tailwind still scans it). The two files there — `src/theme/globals.css` and `src/theme/theme.css` — reference a missing `./legacy-themes.css`. They were already removed in commit `c9e9a01`; do not recreate them.
- No new files under `shadcn-extraction/` (vendored upstream, its own internal git history, tsconfig-excluded via `../shadcn-extraction`; read-only for pattern reference). `shadcn-extraction/` lives at the **repo root**, NOT under `website/`.
- No new `tailwind.config.{js,ts}` — `@theme inline` is the configuration surface. The current `website/tailwind.config.ts` is a leftover from the create-next-app scaffold; either delete it or leave it inert with a comment explaining why. Do not add new entries to it.
- No new tokens in `src/theme/globals.css` or `src/theme/theme.css`; new tokens go in `app/globals.css`.

## Gotchas that have broken this project before

- Renaming a CSS variable without updating the matching `@theme inline` entry silences its Tailwind utility (`bg-background`, `text-foreground`, etc. all break at once). Move them together.
- Deleting `@custom-variant dark (&:is(.dark *));` re-enables the v3-style `dark:bg-…` pattern with broken specificity. Keep it.
- The `@import "shadcn/tailwind.css";` import resolves through `node_modules/shadcn/` (the CLI's npm package). It is NOT a tsconfig path alias. If `node_modules/shadcn/` is missing or the package is removed, Tailwind utilities silently disappear and you only notice at runtime. Run `npm run build` after touching anything near it.
- shadcn primitives wrap Base UI, not Radix — they do NOT accept `asChild`. Pass props to the underlying Base UI slot instead.
- `--font-mono` references `var(--font-geist-mono)`; the utility name and the CSS variable name differ on purpose.
- The `--font-geist-sans` CSS variable is set on `<html>` by `Geist` from `next/font/google`, but `globals.css` does not redeclare it in `@theme inline` — utility consumers should reach for `font-sans` (which is `--font-sans` from `Noto_Sans`), not `font-geist-sans`.
