# Customization

Full reference for every customizer control in /create. Source of truth for options is website/src/registry/.

## Live Dual-Mode Preview
The preview renders a full shadcn component showcase twice — once in light mode and once in dark — to judge contrast and color fidelity without toggling.

## Customizer Controls

### Style
8 named styles (src/registry/styles.ts). Each sets a font pairing and optional wrapper class for radius or density.

| Style | Description |
|---|---|
| Luma | Rounded, friendly, generous spacing. |
| Lyra | Square edges, monospace headings. |
| Maia | Soft pastel accent, generous radius. |
| Mira | Compact density, sharp corners. |
| Nova | Default density, modern sans. |
| Rhea | Display serif headings, calm body. |
| Sera | Warm earth tones, serif headings. |
| Vega | Sharp, minimal, monospace everywhere. |

### Base Color
6 neutral scales (src/registry/base-colors.ts). Each defines the full light and dark CSS variable map for backgrounds, cards, popovers, and other core surfaces.

| Base Color | Swatch |
|---|---|
| Mist | #a3b8cc |
| Neutral | #525252 |
| Gray | #6b7280 |
| Zinc | #71717a |
| Stone | #78716c |
| Slate | #64748b |

### Theme
Primary and accent color applied over the active base color's primary and accent slots (src/registry/accents.ts, src/registry/options.ts).

| Theme | Swatch |
|---|---|
| Neutral | #9ca3af |
| Blue | #2563eb |
| Green | #16a34a |
| Orange | #ea580c |
| Violet | #7c3aed |
| Rose | #e11d48 |
| Cyan | #0099b5 |
| Lime | #78d600 |

### Chart Color
Independent 5-swatch chart palette keyed by theme names (src/registry/chart-palettes.ts), mapped to --chart-1 through --chart-5.

### Heading and Body Font
5 loaded fonts plus "Same as body" for headings (src/registry/options.ts). All fonts must have a matching next/font variable in website/app/layout.tsx.

| Font | Type | CSS variable |
|---|---|---|
| Geist | sans | --font-geist-sans |
| Inter | sans | --font-inter |
| Noto Sans | sans | --font-noto-sans |
| JetBrains Mono | mono | --font-jetbrains-mono |
| EB Garamond | serif | --font-eb-garamond |

### Icon Library
5 icon sets (src/registry/options.ts): Lucide, Tabler Icons, HugeIcons, Phosphor Icons, Remix Icon.

### Library
Export target only. The live preview always renders Base UI.

| Library | Exported style | Notes |
|---|---|---|
| Base UI | base-luma | shadcn on @base-ui/react. |
| Radix UI | new-york | Classic shadcn on @radix-ui primitives. |

### Radius
5-step border-radius scale (src/registry/options.ts): None (0), Small (0.45rem), Medium (0.625rem), Large (0.875rem), Round (1.5rem).

### Menu Color
Sidebar surface options: Default Solid, Default Translucent, Inverted Solid, Inverted Translucent.

### Menu Accent
Sidebar active-item accent strength: Subtle or Bold.

## Lock and Shuffle
Lock specific controls to pin them. Shuffle randomizes only the unlocked fields.

## Presets
Configurations are encoded as short preset codes (e.g., b2D0wqNxT) via src/components/create/preset-code.ts. Presets encode 10 of 13 DesignSystemConfig fields. mode and accent are excluded; library only affects export.

## Save Designs
Snapshot configurations to browser localStorage. Saved designs are managed in the /creates gallery.

## Export (Get Code)
Export dialog provides three tabs:

1. **globals.css**: Complete Tailwind v4 CSS file with design tokens. Font stacks use literal family names.
2. **components.json**: Configured shadcn components.json targeting selected library, base color, icons, and style.
3. **Install**: Exact npx shadcn@latest init and add commands for selected components.

Export and preview use the same buildThemeVars() function for consistency.

## Component Picker
The export dialog allows selecting shadcn components for installation. The list is synced with the shadcn manifest via src/components/create/registry-catalog.ts.
