# Graph Report - .  (2026-08-26)

## Corpus Check
- Corpus is ~39,900 words - fits in a single context window. You may not need a graph.

## Summary
- 754 nodes · 1767 edges · 61 communities (32 shown, 29 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 21 edges (avg confidence: 0.85)
- Token cost: 14,000 input · 2,400 output

## Community Hubs (Navigation)
- Card Alignment & Primitives
- Chart Library Doctrine
- Preview Grid Layout
- Stub Module Typedefs
- Widget Folder Barrels
- Create Page & Preset Codes
- cn() Utility & Avatar Field
- Routing & App Config
- Progress Ring & Media Widgets
- Font & Accent Pickers
- components.json Manifest
- Theme Scope & Payload Builder
- Input Group Primitive
- Radius & Chart Color Pickers
- Accordion & Tabs
- Third-party UI Dependencies
- Build Toolchain
- Design System State
- Table Primitive
- Empty State Primitive
- Dialog Primitive
- Verification Gate & Scripts
- Tooltip & Claimable Balance
- Lucide Icon Shim
- Chart Palette Tokens
- Skeleton & Loading State
- Progress Primitive
- shadcn Skill Rules
- Menu Color Picker
- Lint Config & Icon Resolver
- Impeccable Design Skill
- Ponytail Lazy-coding Skill
- cmdk Dependency
- Embla Carousel Dependency
- Input OTP Dependency
- react-day-picker Dependency
- react-dom Dependency
- Sonner Dependency
- Tabler Icons Dependency
- tailwind-merge Dependency
- Vestigial Tailwind Config
- tw-animate-css Dependency
- PostCSS Config
- Analytics Stub
- Code Highlight Stub
- Dialog Stub
- FlexRender Stub
- Core Row Model Stub
- Filtered Row Model Stub
- Pagination Row Model Stub
- Sorted Row Model Stub
- Hugeicons Icon Stub
- I18n Provider Stub
- Motion Stub
- Plus Sign Icon Stub
- Radix Root Stub
- Streamdown Stub
- useBreadcrumb Stub
- useDocsSearch Stub
- useReactTable Stub
- useReducedMotion Stub

## God Nodes (most connected - your core abstractions)
1. `cn()` - 135 edges
2. `CardContent()` - 44 edges
3. `Card()` - 43 edges
4. `CardHeader()` - 38 edges
5. `CardTitle()` - 36 edges
6. `CardDescription()` - 31 edges
7. `Button()` - 26 edges
8. `useDesignSystem()` - 24 edges
9. `CardFooter()` - 20 edges
10. `IconPlaceholder()` - 20 edges

## Surprising Connections (you probably didn't know these)
- `Icon Placeholder Resolver` --references--> `IconPlaceholder()`  [EXTRACTED]
  .claude/rules/ui-primitives.md → website/src/components/ui/icon-placeholder.tsx
- `Verification Gate` --references--> `scripts`  [EXTRACTED]
  CLAUDE.md → website/package.json
- `Four Chart Wrappers` --references--> `ProgressRing()`  [EXTRACTED]
  .claude/rules/charts.md → website/src/components/charts/ProgressRing.tsx
- `Live Theme Customizer` --references--> `Customizer()`  [EXTRACTED]
  README.md → website/src/components/create/customizer.tsx
- `Runtime Token Injection` --references--> `PreviewGrid()`  [EXTRACTED]
  README.md → website/src/components/create/preview-grid.tsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Chart Wrapper Set** — website_src_components_charts_barchart_barchart, website_src_components_charts_donutchart_donutchart, website_src_components_charts_minibarchart_minibarchart, website_src_components_charts_progressring_progressring, claude_rules_charts_generic_chart [EXTRACTED 1.00]
- **Design + Discipline Pairing: impeccable (Operate mode craft) + ponytail (YAGNI ladder) jointly govern dashboard surface changes** — claude_skills_impeccable_skill_md_operate_mode, claude_skills_ponytail_skill_md_the_ladder [INFERRED 0.85]
- **Runtime Theme Injection Flow** — website_src_components_create_use_design_system, website_src_registry_index, website_src_components_create_theme_scope_themescope, website_src_components_create_preview_grid_previewgrid [EXTRACTED 1.00]
- **Card Alignment Contract** — claude_grid_owns_width, claude_rules_widgets_no_width_on_card_root, claude_rules_widgets_no_padding_on_card_root, claude_rules_widgets_min_width_zero, claude_rules_widgets_column_span_over_wide_card [EXTRACTED 1.00]

## Communities (61 total, 29 thin omitted)

### Community 0 - "Card Alignment & Primitives"
Cohesion: 0.05
Nodes (63): Grid Owns Width, Card Owns Padding, No Padding on Card Root, Button(), Card(), CardContent(), CardDescription(), CardFooter(), CardHeader() (+55 more)

### Community 1 - "Chart Library Doctrine"
Cohesion: 0.06
Nodes (39): Four Chart Wrappers, Generic Chart Dispatcher, No Direct Recharts in Widgets, Right Primitive per Data Shape, recharts, Base UI, Not Radix, No ui Barrel, Primitives Come From the shadcn CLI (+31 more)

### Community 2 - "Preview Grid Layout"
Cohesion: 0.05
Nodes (43): Calendar Hydration Mismatch, Column Span, Not a Wider Card, min-w-0 Shrink Contract, No Width on Card Root, react, react, PreviewGrid(), buttonVariants (+35 more)

### Community 3 - "Stub Module Typedefs"
Cohesion: 0.06
Nodes (42): dom, dom.iterable, esnext, ./src/lib/lucide-react, ./src/lib/stub-empty, tsconfig Stub Modules, ColumnDef, ColumnFiltersState (+34 more)

### Community 4 - "Widget Folder Barrels"
Cohesion: 0.05
Nodes (9): Kebab-case Widget Folders, Mock-first Data Rule, Optional data Prop Contract, Widget Folder Barrel, Full Extraction Plan (superseded), Calendar(), CalendarData, CalendarEvent (+1 more)

### Community 5 - "Create Page & Preset Codes"
Cohesion: 0.11
Nodes (22): metadata, formatClipboardText(), Customizer(), configFromPresetCode(), parsePresetInput(), presetCodeFromConfig(), ActionButton(), Indicator (+14 more)

### Community 6 - "cn() Utility & Avatar Field"
Cohesion: 0.10
Nodes (27): cn(), Avatar(), AvatarBadge(), AvatarFallback(), AvatarGroup(), AvatarGroupCount(), AvatarImage(), Checkbox() (+19 more)

### Community 7 - "Routing & App Config"
Cohesion: 0.07
Nodes (25): Remote Image Allowlist, Two-step Widget Registration, Single /create Route, Live Theme Customizer, ./app/**/*.ts, ./app/**/*.tsx, ./lib/**/*.ts, .next (+17 more)

### Community 8 - "Progress Ring & Media Widgets"
Cohesion: 0.11
Nodes (14): ProgressRing(), ProgressRingProps, Badge(), badgeVariants, AlbumCard(), AlbumCardData, mockData, InvestmentPortfolio() (+6 more)

### Community 9 - "Font & Accent Pickers"
Cohesion: 0.14
Nodes (19): MenuAccentPicker(), FontPicker(), Props, AaGlyph(), FONT_HEADING_OPTIONS, FONTS, getFont(), getMenuAccent() (+11 more)

### Community 10 - "components.json Manifest"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 11 - "Theme Scope & Payload Builder"
Cohesion: 0.18
Nodes (16): BaseColorPicker(), buildPayload(), formatVarBlock(), Payload, buildCss(), ScopeProps, ThemeScope(), ACCENTS (+8 more)

### Community 12 - "Input Group Primitive"
Cohesion: 0.15
Nodes (14): InputGroup(), InputGroupAddon(), inputGroupAddonVariants, InputGroupButton(), inputGroupButtonVariants, InputGroupInput(), InputGroupText(), InputGroupTextarea() (+6 more)

### Community 13 - "Radius & Chart Color Pickers"
Cohesion: 0.17
Nodes (15): ChartColorPicker(), RadiusPicker(), CircleOutline(), SettingCard(), SwatchDot(), StylePicker(), ThemePicker(), useDesignSystem() (+7 more)

### Community 14 - "Accordion & Tabs"
Cohesion: 0.18
Nodes (12): Accordion(), AccordionContent(), AccordionItem(), AccordionTrigger(), Tabs(), TabsContent(), TabsList(), tabsListVariants (+4 more)

### Community 15 - "Third-party UI Dependencies"
Cohesion: 0.12
Nodes (17): @base-ui/react, class-variance-authority, clsx, lucide-react, next, next-themes, react-resizable-panels, shadcn (+9 more)

### Community 16 - "Build Toolchain"
Cohesion: 0.12
Nodes (17): eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node, @types/react, @types/react-dom, typescript (+9 more)

### Community 17 - "Design System State"
Cohesion: 0.18
Nodes (14): IconLibraryPicker(), Action, DEFAULT_CONFIG, DesignSystemContext, DesignSystemProvider(), loadFromStorage(), persist(), pickRandom() (+6 more)

### Community 18 - "Table Primitive"
Cohesion: 0.17
Nodes (12): CardAction(), Table(), TableBody(), TableCaption(), TableCell(), TableFooter(), TableHead(), TableHeader() (+4 more)

### Community 19 - "Empty State Primitive"
Cohesion: 0.40
Nodes (8): Empty(), EmptyContent(), EmptyDescription(), EmptyHeader(), EmptyMedia(), emptyMediaVariants, EmptyTitle(), Spinner()

### Community 20 - "Dialog Primitive"
Cohesion: 0.18
Nodes (7): Dialog(), DialogContent(), DialogDescription(), DialogFooter(), DialogHeader(), DialogOverlay(), DialogTitle()

### Community 21 - "Verification Gate & Scripts"
Cohesion: 0.20
Nodes (9): Verification Gate, name, private, scripts, build, dev, lint, start (+1 more)

### Community 22 - "Tooltip & Claimable Balance"
Cohesion: 0.29
Nodes (5): Tooltip(), TooltipContent(), TooltipTrigger(), ClaimableBalance(), claimableBalanceMockData

### Community 23 - "Lucide Icon Shim"
Cohesion: 0.22
Nodes (7): fallback, Icon, IconComp, LucideIcon, LucideProps, m, names

### Community 24 - "Chart Palette Tokens"
Cohesion: 0.32
Nodes (7): Chart Palette Token Convention, Runtime Token Injection, @theme inline Token Dance, CHART_PALETTES, ChartPalette, getChartPalette(), ThemeName

### Community 25 - "Skeleton & Loading State"
Cohesion: 0.36
Nodes (4): Skeleton(), LoadingState(), LoadingStateData, mockData

### Community 26 - "Progress Primitive"
Cohesion: 0.33
Nodes (5): Progress(), ProgressIndicator(), ProgressLabel(), ProgressTrack(), ProgressValue()

### Community 27 - "shadcn Skill Rules"
Cohesion: 0.40
Nodes (5): Shadcn Skill Rules, Shadcn CLI Workflow (info/docs/add/preset), Forms & Component Composition Rules, Project Context Key Fields (aliases/isRSC/tailwind/base/style), Styling & Tailwind Rules

### Community 28 - "Menu Color Picker"
Cohesion: 0.60
Nodes (4): MenuColorPicker(), getMenuColor(), MENU_COLORS, MenuColorValue

### Community 29 - "Lint Config & Icon Resolver"
Cohesion: 0.50
Nodes (3): Clean Lint Invariant, Icon Placeholder Resolver, eslintConfig

### Community 30 - "Impeccable Design Skill"
Cohesion: 0.50
Nodes (4): Impeccable Skill Rules, The Brief Wins Principle, Operate Mode (Dashboard), Visitor Mode Framework (Persuade/Operate/Read/Experience)

### Community 31 - "Ponytail Lazy-coding Skill"
Cohesion: 0.67
Nodes (4): Ponytail Skill Rules, Ponytail Intensity Levels (lite/full/ultra), Bug Fix = Root Cause Not Symptom, The Lazy Ladder (YAGNI Rungs)

## Ambiguous Edges - Review These
- `Full Extraction Plan (superseded)` → `Four Chart Wrappers`  [AMBIGUOUS]
  .claude/plans/full-extraction-shadcn-extraction-to-website.md · relation: conceptually_related_to
- `Full Extraction Plan (superseded)` → `Widget Folder Barrel`  [AMBIGUOUS]
  .claude/plans/full-extraction-shadcn-extraction-to-website.md · relation: conceptually_related_to

## Knowledge Gaps
- **159 isolated node(s):** `metadata`, `ebGaramondHeading`, `notoSans`, `geistSans`, `geistMono` (+154 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **29 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Full Extraction Plan (superseded)` and `Four Chart Wrappers`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Full Extraction Plan (superseded)` and `Widget Folder Barrel`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `cn()` connect `cn() Utility & Avatar Field` to `Card Alignment & Primitives`, `Chart Library Doctrine`, `Preview Grid Layout`, `Create Page & Preset Codes`, `Routing & App Config`, `Progress Ring & Media Widgets`, `Font & Accent Pickers`, `Input Group Primitive`, `Radius & Chart Color Pickers`, `Accordion & Tabs`, `Table Primitive`, `Empty State Primitive`, `Dialog Primitive`, `Tooltip & Claimable Balance`, `Skeleton & Loading State`, `Progress Primitive`?**
  _High betweenness centrality (0.322) - this node is a cross-community bridge._
- **Why does `react` connect `Preview Grid Layout` to `Chart Library Doctrine`, `Create Page & Preset Codes`, `Font & Accent Pickers`, `Theme Scope & Payload Builder`, `Radius & Chart Color Pickers`, `Third-party UI Dependencies`, `Design System State`?**
  _High betweenness centrality (0.157) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Third-party UI Dependencies` to `cmdk Dependency`, `Embla Carousel Dependency`, `Input OTP Dependency`, `Preview Grid Layout`, `react-day-picker Dependency`, `react-dom Dependency`, `Chart Library Doctrine`, `Sonner Dependency`, `Tabler Icons Dependency`, `tailwind-merge Dependency`, `tw-animate-css Dependency`, `Verification Gate & Scripts`?**
  _High betweenness centrality (0.143) - this node is a cross-community bridge._
- **What connects `metadata`, `ebGaramondHeading`, `notoSans` to the rest of the system?**
  _159 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Card Alignment & Primitives` be split into smaller, more focused modules?**
  _Cohesion score 0.05467762326169406 - nodes in this community are weakly interconnected._