# Graph Report - next-color theme  (2026-09-10)

## Corpus Check
- 93 files · ~35,293 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 836 nodes · 1365 edges · 200 communities (31 shown, 169 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 16 edges (avg confidence: 0.69)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b334b1c9`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- use-design-system.tsx
- customizer.tsx
- design-gallery.tsx
- dependencies
- cn
- compilerOptions
- layout.tsx
- showcase-block.tsx
- devDependencies
- components.json
- react
- get-code-dialog.tsx
- create/page.tsx
- field.tsx
- utils.ts
- stub-empty.ts
- icon-placeholder.tsx
- generate-icon-registry.mjs
- card.tsx
- Customizer Controls
- popover.tsx
- 3. Logic Map
- badge.tsx
- eslint.config.mjs
- postcss.config.mjs
- Analytics
- code
- Dialog
- flexRender
- getCoreRowModel
- getFilteredRowModel
- getPaginationRowModel
- getSortedRowModel
- HugeiconsIcon
- I18nProvider
- IconAlertCircle
- IconAlertOctagon
- IconAlertTriangle
- IconArrowLeft
- IconArrowRight
- IconAt
- IconAward
- IconBadgeAlert
- IconBadgeCheck
- IconBadgeDollarSign
- IconBadgeInfo
- IconBadgeMinus
- IconBadgePlus
- IconBadgeX
- IconBell
- IconBluetooth
- IconBookmark
- IconBot
- IconBrain
- IconCalendar
- IconCamera
- IconChartBar
- IconChartLine
- IconChartPie
- IconCheck
- IconChevronDown
- IconChevronLeft
- IconChevronRight
- IconChevronsDownUp
- IconChevronsLeftRight
- IconChevronsUpDown
- IconChevronUp
- IconCircleCheck
- IconClock
- IconCloud
- IconCode
- IconCommand
- IconCompass
- IconCopy
- IconCpu
- IconCrown
- IconDatabase
- IconDownload
- IconExternalLink
- IconFile
- IconFilter
- IconFlag
- IconFolder
- IconGalleryHorizontal
- IconGalleryHorizontalEnd
- IconGalleryThumbnails
- IconGalleryVertical
- IconGalleryVerticalEnd
- IconGithub
- IconGlobe
- IconGrid
- IconHash
- IconHeart
- IconHelpCircle
- IconHexagon
- IconHome
- IconIdCard
- IconIdCardLanyard
- IconImage
- IconInbox
- IconInfoCircle
- IconLayers
- IconLayout
- IconLayoutGrid
- IconLightbulb
- IconLink
- IconList
- IconLoader
- IconLoader2
- IconLock
- IconLogin
- IconLogout
- IconMail
- IconMap
- IconMapPin
- IconMaximize
- IconMedal
- IconMenu
- IconMessageCircle
- IconMessageSquare
- IconMicrophone
- IconMinimize
- IconMinus
- IconMonitor
- IconMoon
- IconMoreHorizontal
- IconMoreVertical
- IconMousePointer
- IconMove
- IconNavigation
- IconOctagon
- IconPanelBottom
- IconPanelBottomClose
- IconPanelBottomDashed
- IconPanelBottomOpen
- IconPanelLeft
- IconPanelLeftClose
- IconPanelLeftDashed
- IconPanelLeftOpen
- IconPanelRight
- IconPanelRightClose
- IconPanelRightDashed
- IconPanelRightOpen
- IconPanelTop
- IconPanelTopClose
- IconPanelTopDashed
- IconPanelTopOpen
- IconPaperclip
- IconPause
- IconPencil
- IconPlay
- IconPlus
- IconPower
- IconRadar
- IconRefreshCcw
- IconRefreshCw
- IconRocket
- IconSave
- IconSearch
- IconSend
- IconServer
- IconSettings
- IconShare
- IconSignpost
- IconSignpostBig
- IconSmartphone
- IconSparkles
- IconSquareDashed
- IconStar
- IconSun
- IconTag
- IconTerminal
- IconTrash
- IconTrendingDown
- IconTrendingUp
- IconUpload
- IconUser
- IconUsers
- IconVideo
- IconWand
- IconWifi
- IconWrench
- IconX
- motion
- PlusSignIcon
- Root
- Streamdown
- useBreadcrumb
- useDocsSearch
- useReactTable
- useReducedMotion
- shadcn/ui
- Chart Wrappers — Recharts Primitives
- Tailwind v4 + shadcn (base-luma) — Project Rules
- Ponytail
- table.tsx
- UI primitives rules
- tabs.tsx
- impeccable/SKILL.md
- Website Workspace — Next Color Theme

## God Nodes (most connected - your core abstractions)
1. `cn()` - 132 edges
2. `useDesignSystem()` - 30 edges
3. `react` - 20 edges
4. `sanitizeConfig()` - 18 edges
5. `useSavedDesigns()` - 16 edges
6. `IconPlaceholder()` - 16 edges
7. `compilerOptions` - 16 edges
8. `SettingCard()` - 14 edges
9. `getLibrary()` - 12 edges
10. `shadcn/ui` - 12 edges

## Surprising Connections (you probably didn't know these)
- `RootLayout()` --calls--> `cn()`  [EXTRACTED]
  website/app/layout.tsx → website/lib/utils.ts
- `CardAction()` --calls--> `cn()`  [EXTRACTED]
  website/src/components/ui/card.tsx → website/lib/utils.ts
- `CardFooter()` --calls--> `cn()`  [EXTRACTED]
  website/src/components/ui/card.tsx → website/lib/utils.ts
- `DialogOverlay()` --calls--> `cn()`  [EXTRACTED]
  website/src/components/ui/dialog.tsx → website/lib/utils.ts
- `DropdownMenuCheckboxItem()` --calls--> `cn()`  [EXTRACTED]
  website/src/components/ui/dropdown-menu.tsx → website/lib/utils.ts

## Import Cycles
- None detected.

## Communities (200 total, 169 thin omitted)

### Community 0 - "use-design-system.tsx"
Cohesion: 0.05
Nodes (71): BaseColorPicker(), buildThemeCss(), buildThemeVars(), formatVarBlock(), Payload, ThemeVars, FontPicker(), Props (+63 more)

### Community 1 - "customizer.tsx"
Cohesion: 0.08
Nodes (41): MenuAccentPicker(), ChartColorPicker(), Customizer(), IconLibraryPicker(), configFromPresetCode(), parsePresetInput(), presetCodeFromConfig(), RadiusPicker() (+33 more)

### Community 2 - "design-gallery.tsx"
Cohesion: 0.10
Nodes (31): SaveDesignDialog(), ActionButton(), commit(), EMPTY, findSavedDesign(), getServerSnapshot(), getSnapshot(), invalidate() (+23 more)

### Community 3 - "dependencies"
Cohesion: 0.05
Nodes (37): @base-ui/react, class-variance-authority, clsx, @hugeicons/core-free-icons, @hugeicons/react, lucide-react, next, next-themes (+29 more)

### Community 4 - "cn"
Cohesion: 0.16
Nodes (21): cn(), Avatar(), AvatarBadge(), AvatarFallback(), AvatarGroup(), AvatarGroupCount(), AvatarImage(), Progress() (+13 more)

### Community 5 - "compilerOptions"
Cohesion: 0.09
Nodes (30): dom, dom.iterable, esnext, ./src/lib/stub-empty, compilerOptions, allowJs, esModuleInterop, incremental (+22 more)

### Community 6 - "layout.tsx"
Cohesion: 0.08
Nodes (23): ./app/**/*.ts, ./app/**/*.tsx, ./lib/**/*.ts, .next, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules (+15 more)

### Community 7 - "showcase-block.tsx"
Cohesion: 0.11
Nodes (19): ProgressRing(), ProgressRingProps, REVENUE, ROWS, SEGMENTS, SLEEP, SPARK, Accordion() (+11 more)

### Community 8 - "devDependencies"
Cohesion: 0.08
Nodes (25): eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node, @types/react, @types/react-dom, typescript (+17 more)

### Community 9 - "components.json"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 10 - "react"
Cohesion: 0.10
Nodes (22): react, CreateError(), react, AreaChart(), BarChart(), DonutChart(), MiniBarChart(), MiniBarChartProps (+14 more)

### Community 11 - "get-code-dialog.tsx"
Cohesion: 0.23
Nodes (12): buildPayload(), exportFamily(), CodePanel(), copy(), GetCodeDialog(), BY_NAME, CATALOG, CatalogEntry (+4 more)

### Community 12 - "create/page.tsx"
Cohesion: 0.15
Nodes (10): metadata, metadata, metadata, IconLibraryProvider(), ShowcaseBlock(), ScopeProps, ThemeScope(), useDesignConfig() (+2 more)

### Community 13 - "field.tsx"
Cohesion: 0.15
Nodes (13): Field(), FieldContent(), FieldDescription(), FieldError(), FieldGroup(), FieldLabel(), FieldLegend(), FieldSeparator() (+5 more)

### Community 14 - "utils.ts"
Cohesion: 0.24
Nodes (6): Button(), buttonVariants, Calendar(), Input(), Skeleton(), Switch()

### Community 15 - "stub-empty.ts"
Cohesion: 0.18
Nodes (10): ColumnDef, ColumnFiltersState, IconComp, Placeholder, Row, SortingState, TablerFallback, _tablerProxy (+2 more)

### Community 16 - "icon-placeholder.tsx"
Cohesion: 0.14
Nodes (15): IconLibraryContext, useIconLibrary(), Checkbox(), IconPlaceholder(), IconPlaceholderProps, HUGEICONS, HugeiconsData, IconComponent (+7 more)

### Community 17 - "generate-icon-registry.mjs"
Cohesion: 0.28
Nodes (7): alias(), imp(), LIBS, map(), names, sorted, SRC

### Community 18 - "card.tsx"
Cohesion: 0.25
Nodes (7): Card(), CardAction(), CardContent(), CardDescription(), CardFooter(), CardHeader(), CardTitle()

### Community 19 - "Customizer Controls"
Cohesion: 0.05
Nodes (35): Base Color, Chart Color, Component Picker, Customization, Customizer Controls, Export (Get Code), Heading and Body Font, Icon Library (+27 more)

### Community 20 - "popover.tsx"
Cohesion: 0.29
Nodes (6): Popover(), PopoverContent(), PopoverDescription(), PopoverHeader(), PopoverTitle(), PopoverTrigger()

### Community 21 - "3. Logic Map"
Cohesion: 0.08
Nodes (26): 10. Knowledge Graph, 11. Working Style, 1. Quick Orientation, 2. Routes, 3. Logic Map, 4. Search Guide, 5. Verification Gate, 6. Commands (+18 more)

### Community 191 - "shadcn/ui"
Cohesion: 0.11
Nodes (18): CLI, Component Docs, Examples, and Usage, Component Selection, Component Structure → [composition.md](./rules/composition.md), Critical Rules, Current Project Context, Detailed References, Forms & Inputs → [forms.md](./rules/forms.md) (+10 more)

### Community 192 - "Chart Wrappers — Recharts Primitives"
Cohesion: 0.18
Nodes (10): Adding a new wrapper, BarChart / DonutChart (pass-throughs), Chart Wrappers — Recharts Primitives, Don't, Mapping widget patterns to wrappers, MiniBarChart, Palette convention, ProgressRing (+2 more)

### Community 193 - "Tailwind v4 + shadcn (base-luma) — Project Rules"
Cohesion: 0.18
Nodes (10): Components use these conventions, Font wiring, Forbidden places, Gotchas, shadcn add only, Tailwind v4 + shadcn (base-luma) — Project Rules, Token addition rule, Token names that already exist (+2 more)

### Community 194 - "Ponytail"
Cohesion: 0.22
Nodes (8): Boundaries, Intensity, Output, Persistence, Ponytail, Rules, The ladder, When NOT to be lazy

### Community 195 - "table.tsx"
Cohesion: 0.22
Nodes (8): Table(), TableBody(), TableCaption(), TableCell(), TableFooter(), TableHead(), TableHeader(), TableRow()

### Community 196 - "UI primitives rules"
Cohesion: 0.29
Nodes (6): How to add a new primitive, Sibling rules, The generic `Chart`, Theme tokens, UI primitives rules, What's here

### Community 197 - "tabs.tsx"
Cohesion: 0.40
Nodes (5): Tabs(), TabsContent(), TabsList(), tabsListVariants, TabsTrigger()

### Community 198 - "impeccable/SKILL.md"
Cohesion: 0.40
Nodes (4): Commands, How to design, Modes, Setup

### Community 199 - "Website Workspace — Next Color Theme"
Cohesion: 0.40
Nodes (4): 📦 Key Folder Locations, 🚀 Quick Start, 🧭 Routes, Website Workspace — Next Color Theme

## Knowledge Gaps
- **430 isolated node(s):** `metadata`, `metadata`, `metadata`, `geistSans`, `geistMono` (+425 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **169 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `use-design-system.tsx`, `customizer.tsx`, `design-gallery.tsx`, `table.tsx`, `tabs.tsx`, `layout.tsx`, `showcase-block.tsx`, `react`, `get-code-dialog.tsx`, `create/page.tsx`, `field.tsx`, `utils.ts`, `icon-placeholder.tsx`, `card.tsx`, `popover.tsx`, `badge.tsx`?**
  _High betweenness centrality (0.130) - this node is a cross-community bridge._
- **Why does `react` connect `react` to `use-design-system.tsx`, `customizer.tsx`, `design-gallery.tsx`, `dependencies`, `get-code-dialog.tsx`, `create/page.tsx`, `icon-placeholder.tsx`?**
  _High betweenness centrality (0.085) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `devDependencies`, `react`?**
  _High betweenness centrality (0.081) - this node is a cross-community bridge._
- **Are the 10 inferred relationships involving `sanitizeConfig()` (e.g. with `getAccent()` and `getBaseColor()`) actually correct?**
  _`sanitizeConfig()` has 10 INFERRED edges - model-reasoned connections that need verification._
- **What connects `metadata`, `metadata`, `metadata` to the rest of the system?**
  _430 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `use-design-system.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05426356589147287 - nodes in this community are weakly interconnected._
- **Should `customizer.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07966457023060797 - nodes in this community are weakly interconnected._