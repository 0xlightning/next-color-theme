# Customization

Full reference for every customizer control in `/create`. Source of truth for each list is
`website/src/registry/` — add new options there, not here.

## Live dual-mode preview
The preview renders a full shadcn component showcase **twice on the same screen** — once in
light mode, once in dark — so you can judge contrast and color fidelity at a glance without
toggling back and forth.

## 11 customizer controls

### Style
8 named styles (`src/registry/styles.ts`). Each sets a font pairing and optional wrapper class
(radius / density overrides).

| Style | Description |
|---|---|
| **Luma** | Rounded, friendly, generous spacing. |
| **Lyra** | Square edges, monospace headings. |
| **Maia** | Soft pastel accent, generous radius. |
| **Mira** | Compact density, sharp corners. |
| **Nova** | Default density, modern sans. |
| **Rhea** | Display serif headings, calm body. |
| **Sera** | Warm earth tones, serif headings. |
| **Vega** | Sharp, minimal, monospace everywhere. |

### Base Color
6 neutral scales (`src/registry/base-colors.ts`). Each defines the full light + dark CSS var
map — background, card, popover, primary, secondary, muted, accent, destructive, border,
input, ring, sidebar-*.

| Base Color | Swatch |
|---|---|
| **Mist** | `#a3b8cc` |
| **Neutral** | `#525252` |
| **Gray** | `#6b7280` |
| **Zinc** | `#71717a` |
| **Stone** | `#78716c` |
| **Slate** | `#64748b` |

### Theme
Primary / accent color, applied over the active base color's `--primary` / `--accent` slots
(`src/registry/accents.ts`, `src/registry/options.ts`).

| Theme | Swatch |
|---|---|
| **Neutral** | `#9ca3af` |
| **Blue** | `#2563eb` |
| **Green** | `#16a34a` |
| **Orange** | `#ea580c` |
| **Violet** | `#7c3aed` |
| **Rose** | `#e11d48` |
| **Cyan** | `#0099b5` |
| **Lime** | `#78d600` |

### Chart Color
Independent 5-swatch chart palette keyed by the same 8 theme names as above
(`src/registry/chart-palettes.ts`), mapped to `--chart-1`…`--chart-5`. Swatches run
brightest → dimmest per palette.

### Heading Font / Body Font
5 loaded fonts plus "Same as body" for headings (`src/registry/options.ts`). Every font here
must have a matching `next/font` variable in `website/app/layout.tsx`.

| Font | Type | CSS variable |
|---|---|---|
| **Geist** | sans | `--font-geist-sans` |
| **Inter** | sans | `--font-inter` |
| **Noto Sans** | sans | `--font-noto-sans` |
| **JetBrains Mono** | mono | `--font-jetbrains-mono` |
| **EB Garamond** | serif | `--font-eb-garamond` |

### Icon Library
5 icon sets (`src/registry/options.ts`):

- **Lucide**
- **Tabler Icons**
- **HugeIcons**
- **Phosphor Icons**
- **Remix Icon**

### Library
Export target only — the live preview always renders Base UI.

| Library | Exported `style` | Notes |
|---|---|---|
| **Base UI** | `base-luma` | shadcn on `@base-ui/react` — what this app renders. |
| **Radix UI** | `new-york` | Classic shadcn on `@radix-ui` primitives. |

### Radius
5-step border-radius scale (`src/registry/options.ts`):

| Radius | Value |
|---|---|
| **None** | `0` |
| **Small** | `0.45rem` |
| **Medium** | `0.625rem` |
| **Large** | `0.875rem` |
| **Round** | `1.5rem` |

### Menu Color
Sidebar surface — color choice × translucency, 4 combinations:

- **Default / Solid**
- **Default / Translucent**
- **Inverted / Solid**
- **Inverted / Translucent**

### Menu Accent
Sidebar active-item accent strength:

- **Subtle**
- **Bold**

## Lock and Shuffle
Lock any subset of controls. Hit **Shuffle** and only the unlocked fields randomize —
so you can pin your brand color and explore typeface + radius combinations at random.

## Presets
Every configuration is encoded as a short **preset code** (e.g. `b2D0wqNxT`) via the
shadcn preset codec (`src/components/create/preset-code.ts`). Copy it from the sidebar,
share it with a teammate, or paste it back with **Open Preset**. Presets encode 10 of the
13 `DesignSystemConfig` fields — `mode` (UI-only toggle) and `accent` (local) are excluded;
`library` only affects export, not the live preview.

## Save Designs
Click **Save Design** to snapshot the current configuration to the browser's localStorage.
Saved designs are listed in the `/creates` gallery where you can rename, delete, or click
any card to re-open it in the customizer for further editing.

## Get Code — paste-ready export
Click **Get Code** to open the export dialog with three ready-to-copy tabs:

1. **`globals.css`** — a complete Tailwind v4 CSS file with all design tokens (oklch
   CSS variables, `@theme inline` block, `@layer base` resets). Font stacks are written
   as literal family names so they work in any project without this app's `next/font` setup.
2. **`components.json`** — a fully configured shadcn `components.json` targeting your chosen
   library, base color, icon library, and style.
3. **Install** — the exact `npx shadcn@latest init` + `npx shadcn@latest add` commands for
   the components you ticked in the Components tab.

What you see is exactly what you copy — the export and the preview use the same
`buildThemeVars()` function, so there are no surprises.

## Component picker
The Get Code dialog lets you select which shadcn components you want installed. The list
is pulled from the shadcn manifest (`src/components/create/registry-catalog.ts`) so it
stays up to date with upstream releases.
