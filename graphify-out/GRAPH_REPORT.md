# Graph Report - .  (2026-07-30)

## Corpus Check
- 136 files · ~0 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 800 nodes · 1692 edges · 53 communities (50 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.86)
- Token cost: 8,820 input · 6,240 output

## Community Hubs (Navigation)
- Card + Charts (Card primitive family + all chart primitives: AreaChart, BarChart, DonutChart, LineChart, MiniBarChart, ProgressRing, Sparkline, plus their props types)
- React + Login Page (react runtime + /login route + LoginPage component)
- Sheet + Sidebar (Sheet sliding panel + sidebar navigation components)
- App Routes + Pages (/, /analytics, /settings pages + AnalyticsPage + SettingsPage + Home)
- Runtime Dependencies (@base-ui/react, cmdk, embla-carousel-react, input-otp, next, next-themes, etc.)
- DropdownMenu + Menubar + ContextMenu (all menu-family primitives: DropdownMenu, Menubar, ContextMenu)
- Combobox Primitive (autocomplete + chips selection: Combobox, ComboboxValue, ComboboxTrigger, etc.)
- package.json + Build Config (package.json metadata, devDependencies, scripts)
- cn() + Avatar + Misc (cn() utility + Avatar primitive + several small primitives)
- CLAUDE.md Knowledge (Authoritative Project Rules + Skills Index + Impeccable Rules + Operate Mode + Brief Wins)
- Command Primitive (keyboard command palette: Command, CommandDialog, CommandInput, etc.)
- components.json (shadcn config: $schema, style, base, iconLibrary, aliases, etc.)
- ContextMenu Primitive (right-click menu — separated from c5 on this run: ContextMenu/Portal/Item/etc.)
- Drawer Primitive (bottom-sheet drawer: Drawer, DrawerContext, DrawerContextProps)
- Carousel Primitive (embla-powered carousel: Carousel, CarouselApi, UseCarouselParameters)
- AlertDialog Primitive (destructive confirmation: AlertDialog, AlertDialogTrigger, etc.)
- Field Primitive (form-field composition: FieldSet, FieldLegend, Field, FieldGroup, etc.)
- tsconfig Compiler Options (compilerOptions: target, allowJs, esModuleInterop, jsx, module, etc.)
- IconPlaceholder (cross-cutting: IconPlaceholder + IconPlaceholderProps + the create-route helper)
- Item Primitive (list-row layout: ItemGroup, ItemSeparator, Item, ItemHeader, etc.)
- MessageScroller Primitive (chat scroll container: MessageScrollerProvider, MessageScroller, etc.)
- Attachment Primitive (file-attach UI: attachmentVariants, Attachment, AttachmentGroup, etc.)
- tsconfig Paths (paths: @/registry/bases/base/ui/*, ./src/components/ui/*, etc.)
- NavigationMenu Primitive (top-nav mega-menu: NavigationMenu, NavigationMenuList, etc.)
- Badge Primitive + CVA reference (Badge, badgeVariants + ref_class_variance_authority)
- UI Index/Registry (ui/index.ts, _registry.ts, ui/direction.tsx — shadcn registry plumbing)
- Toggle + ToggleGroup Primitives (ToggleGroupContext, ToggleGroup, Toggle variants)
- Root Layout + Fonts (layout.tsx + ebGaramondHeading + notoSans + Geist font loading)
- Pagination Primitive (paged navigation: Pagination, PaginationContent, etc.)
- Bubble Primitive (chat-bubble UI: BubbleGroup, bubbleVariants, Bubble, etc.)
- Popover Primitive (floating overlay: Popover, PopoverTrigger, PopoverContent, etc.)
- Utils + AspectRatio (utils.ts + AspectRatio primitive + Kbd/Slider scattered)
- Breadcrumb Primitive (path breadcrumb nav: Breadcrumb, BreadcrumbList, etc.)
- Empty Primitive (no-data/empty-state composition: Empty, EmptyHeader, etc.)
- Progress Primitive (progress bar: Progress, ProgressTrack)
- Tabs Primitive (tabbed content: Tabs, tabsListVariants, TabsTrigger, etc.)
- tsconfig Include (include patterns: next-env.d.ts, **/*.ts, **/*.tsx)
- tsconfig Exclude + Next Config (exclude + next.config.ts + nextConfig)
- Accordion Primitive (expand-collapse sections: Accordion, AccordionItem, etc.)
- InputOTP Primitive (one-time-code entry: InputOTP, InputOTPGroup, etc.)
- Alert Primitive (callout/inline notice: alertVariants, Alert, AlertTitle, etc.)
- Collapsible Primitive (simple show/hide: Collapsible, CollapsibleTrigger)
- HoverCard Primitive (hover-revealed card: HoverCard, HoverCardTrigger)
- RadioGroup Primitive (mutually-exclusive radio: RadioGroup, RadioGroupItem)
- ESLint Config (eslint.config.mjs + eslintConfig + ref_eslint_config)
- Resizable Primitive (resizable panel groups: ResizablePanelGroup, ResizablePanel)
- ButtonGroup Primitive (buttonGroupVariants, ButtonGroup + Separator)
- ScrollArea Primitive (custom scrollbar: ScrollArea, ScrollBar)
- TS Compiler Lib Options (lib: dom, dom.iterable, esnext)
- Sonner Toaster (Toaster + ref_next_themes — toast container)
- Slider Primitive (Slider + ref_base_ui_react_slider)
- Tailwind Config (tailwind.config.ts + ref_tailwindcss)
- PostCSS Config (postcss.config.mjs + config helper)

## God Nodes (most connected - your core abstractions)
1. `cn()` - 337 edges
2. `utils.ts` - 61 edges
3. `ui/index.ts` - 61 edges
4. `ref_react` - 59 edges
5. `sidebar.tsx` - 56 edges
6. `app/page.tsx` - 44 edges
7. `menubar.tsx` - 38 edges
8. `card.tsx` - 31 edges
9. `combobox.tsx` - 30 edges
10. `PaymentThreshold.tsx` - 29 edges

## Surprising Connections (you probably didn't know these)
- `icon-placeholder.tsx` --imports_from--> `ref_react`  [EXTRACTED]
  website/app/(create)/components/icon-placeholder.tsx → 
- `icon-placeholder.tsx` --imports_from--> `ref_tabler_icons_react`  [EXTRACTED]
  website/app/(create)/components/icon-placeholder.tsx → 
- `icon-placeholder.tsx` --imports_from--> `accordion.tsx`  [EXTRACTED]
  website/app/(create)/components/icon-placeholder.tsx → website/src/components/ui/accordion.tsx
- `icon-placeholder.tsx` --imports_from--> `breadcrumb.tsx`  [EXTRACTED]
  website/app/(create)/components/icon-placeholder.tsx → website/src/components/ui/breadcrumb.tsx
- `icon-placeholder.tsx` --imports_from--> `calendar.tsx`  [EXTRACTED]
  website/app/(create)/components/icon-placeholder.tsx → website/src/components/ui/calendar.tsx
- `icon-placeholder.tsx` --imports_from--> `carousel.tsx`  [EXTRACTED]
  website/app/(create)/components/icon-placeholder.tsx → website/src/components/ui/carousel.tsx
- `icon-placeholder.tsx` --imports_from--> `combobox.tsx`  [EXTRACTED]
  website/app/(create)/components/icon-placeholder.tsx → website/src/components/ui/combobox.tsx
- `icon-placeholder.tsx` --imports_from--> `command.tsx`  [EXTRACTED]
  website/app/(create)/components/icon-placeholder.tsx → website/src/components/ui/command.tsx
- `icon-placeholder.tsx` --imports_from--> `context-menu.tsx`  [EXTRACTED]
  website/app/(create)/components/icon-placeholder.tsx → website/src/components/ui/context-menu.tsx
- `icon-placeholder.tsx` --imports_from--> `dialog.tsx`  [EXTRACTED]
  website/app/(create)/components/icon-placeholder.tsx → website/src/components/ui/dialog.tsx
- `icon-placeholder.tsx` --imports_from--> `dropdown-menu.tsx`  [EXTRACTED]
  website/app/(create)/components/icon-placeholder.tsx → website/src/components/ui/dropdown-menu.tsx
- `icon-placeholder.tsx` --imports_from--> `input-otp.tsx`  [EXTRACTED]
  website/app/(create)/components/icon-placeholder.tsx → website/src/components/ui/input-otp.tsx
- `icon-placeholder.tsx` --imports_from--> `menubar.tsx`  [EXTRACTED]
  website/app/(create)/components/icon-placeholder.tsx → website/src/components/ui/menubar.tsx
- `icon-placeholder.tsx` --imports_from--> `message-scroller.tsx`  [EXTRACTED]
  website/app/(create)/components/icon-placeholder.tsx → website/src/components/ui/message-scroller.tsx
- `icon-placeholder.tsx` --imports_from--> `navigation-menu.tsx`  [EXTRACTED]
  website/app/(create)/components/icon-placeholder.tsx → website/src/components/ui/navigation-menu.tsx
- `icon-placeholder.tsx` --imports_from--> `pagination.tsx`  [EXTRACTED]
  website/app/(create)/components/icon-placeholder.tsx → website/src/components/ui/pagination.tsx
- `icon-placeholder.tsx` --imports_from--> `select.tsx`  [EXTRACTED]
  website/app/(create)/components/icon-placeholder.tsx → website/src/components/ui/select.tsx
- `icon-placeholder.tsx` --imports_from--> `sheet.tsx`  [EXTRACTED]
  website/app/(create)/components/icon-placeholder.tsx → website/src/components/ui/sheet.tsx
- `icon-placeholder.tsx` --imports_from--> `sidebar.tsx`  [EXTRACTED]
  website/app/(create)/components/icon-placeholder.tsx → website/src/components/ui/sidebar.tsx
- `icon-placeholder.tsx` --imports_from--> `sonner.tsx`  [EXTRACTED]
  website/app/(create)/components/icon-placeholder.tsx → website/src/components/ui/sonner.tsx

## Import Cycles
- None detected.

## Communities (53 total, 3 thin omitted)

### Community 0 - "Card + Charts (Card primitive family + all chart primitives: AreaChart, BarChart, DonutChart, LineChart, MiniBarChart, ProgressRing, Sparkline, plus their props types)"
Cohesion: 0.05
Nodes (53): ref_base_ui_react_button, ref_base_ui_react_input, ref_base_ui_react_select, ref_base_ui_react_separator, ref_base_ui_react_tooltip, ref_tabler_icons_react, ProgressRing(), ProgressRingProps (+45 more)

### Community 1 - "React + Login Page (react runtime + /login route + LoginPage component)"
Cohesion: 0.06
Nodes (34): react, ref_next_link, ref_react, ref_react_day_picker, ref_recharts, react, BarChart(), MiniBarChart() (+26 more)

### Community 2 - "Sheet + Sidebar (Sheet sliding panel + sidebar navigation components)"
Cohesion: 0.06
Nodes (37): ref_base_ui_react_dialog, Sheet(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetTitle() (+29 more)

### Community 3 - "App Routes + Pages (/, /analytics, /settings pages + AnalyticsPage + SettingsPage + Home)"
Cohesion: 0.06
Nodes (37): DashboardLayout(), AccountAccess(), BuyInvestment(), Calendar(), ContactInformation(), DividendIncome(), EmptyState(), GrowthStatistics() (+29 more)

### Community 4 - "Runtime Dependencies (@base-ui/react, cmdk, embla-carousel-react, input-otp, next, next-themes, etc.)"
Cohesion: 0.06
Nodes (35): @base-ui/react, class-variance-authority, clsx, cmdk, embla-carousel-react, input-otp, next, next-themes (+27 more)

### Community 5 - "DropdownMenu + Menubar + ContextMenu (all menu-family primitives: DropdownMenu, Menubar, ContextMenu)"
Cohesion: 0.08
Nodes (28): ref_base_ui_react_menu, ref_base_ui_react_menubar, DropdownMenu(), DropdownMenuCheckboxItem(), DropdownMenuContent(), DropdownMenuGroup(), DropdownMenuItem(), DropdownMenuLabel() (+20 more)

### Community 6 - "Combobox Primitive (autocomplete + chips selection: Combobox, ComboboxValue, ComboboxTrigger, etc.)"
Cohesion: 0.09
Nodes (23): ref_base_ui_react, ComboboxChip(), ComboboxChips(), ComboboxChipsInput(), ComboboxClear(), ComboboxContent(), ComboboxEmpty(), ComboboxGroup() (+15 more)

### Community 7 - "package.json + Build Config (package.json metadata, devDependencies, scripts)"
Cohesion: 0.08
Nodes (25): eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node, @types/react, @types/react-dom, typescript (+17 more)

### Community 8 - "cn() + Avatar + Misc (cn() utility + Avatar primitive + several small primitives)"
Cohesion: 0.14
Nodes (23): ref_base_ui_react_avatar, cn(), Avatar(), AvatarBadge(), AvatarFallback(), AvatarGroup(), AvatarGroupCount(), AvatarImage() (+15 more)

### Community 9 - "CLAUDE.md Knowledge (Authoritative Project Rules + Skills Index + Impeccable Rules + Operate Mode + Brief Wins)"
Cohesion: 0.11
Nodes (24): CLAUDE.md (Authoritative Project Rules), Document Supersession (prd.md + architecture.md removed; CLAUDE.md authoritative), graphify-out Knowledge Graph, Pitfalls (lint red, orphan CSS, shadcn-extraction readonly), Project Conventions (kebab-case widgets, optional data, semantic colors), Skills Index (shadcn / impeccable / ponytail), Verification Gate (build/lint/tsc), Impeccable Skill Rules (+16 more)

### Community 10 - "Command Primitive (keyboard command palette: Command, CommandDialog, CommandInput, etc.)"
Cohesion: 0.11
Nodes (17): ref_cmdk, Command(), CommandDialog(), CommandEmpty(), CommandGroup(), CommandInput(), CommandItem(), CommandList() (+9 more)

### Community 11 - "components.json (shadcn config: $schema, style, base, iconLibrary, aliases, etc.)"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 12 - "ContextMenu Primitive (right-click menu — separated from c5 on this run: ContextMenu/Portal/Item/etc.)"
Cohesion: 0.12
Nodes (10): ref_base_ui_react_context_menu, ContextMenuCheckboxItem(), ContextMenuContent(), ContextMenuItem(), ContextMenuLabel(), ContextMenuRadioItem(), ContextMenuSeparator(), ContextMenuShortcut() (+2 more)

### Community 13 - "Drawer Primitive (bottom-sheet drawer: Drawer, DrawerContext, DrawerContextProps)"
Cohesion: 0.14
Nodes (11): ref_base_ui_react_drawer, DrawerContent(), DrawerContext, DrawerContextProps, DrawerDescription(), DrawerFooter(), DrawerHeader(), DrawerOverlay() (+3 more)

### Community 14 - "Carousel Primitive (embla-powered carousel: Carousel, CarouselApi, UseCarouselParameters)"
Cohesion: 0.18
Nodes (14): ref_embla_carousel_react, Carousel(), CarouselApi, CarouselContent(), CarouselContext, CarouselContextProps, CarouselItem(), CarouselNext() (+6 more)

### Community 15 - "AlertDialog Primitive (destructive confirmation: AlertDialog, AlertDialogTrigger, etc.)"
Cohesion: 0.14
Nodes (10): ref_base_ui_react_alert_dialog, AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogDescription(), AlertDialogFooter(), AlertDialogHeader(), AlertDialogMedia() (+2 more)

### Community 16 - "Field Primitive (form-field composition: FieldSet, FieldLegend, Field, FieldGroup, etc.)"
Cohesion: 0.16
Nodes (12): Field(), FieldContent(), FieldDescription(), FieldError(), FieldGroup(), FieldLabel(), FieldLegend(), FieldSeparator() (+4 more)

### Community 17 - "tsconfig Compiler Options (compilerOptions: target, allowJs, esModuleInterop, jsx, module, etc.)"
Cohesion: 0.14
Nodes (14): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, module, moduleResolution (+6 more)

### Community 18 - "IconPlaceholder (cross-cutting: IconPlaceholder + IconPlaceholderProps + the create-route helper)"
Cohesion: 0.19
Nodes (9): ref_base_ui_react_checkbox, IconPlaceholder(), IconPlaceholderProps, Checkbox(), NativeSelect(), NativeSelectOptGroup(), NativeSelectOption(), NativeSelectProps (+1 more)

### Community 19 - "Item Primitive (list-row layout: ItemGroup, ItemSeparator, Item, ItemHeader, etc.)"
Cohesion: 0.18
Nodes (12): Item(), ItemActions(), ItemContent(), ItemDescription(), ItemFooter(), ItemGroup(), ItemHeader(), ItemMedia() (+4 more)

### Community 20 - "MessageScroller Primitive (chat scroll container: MessageScrollerProvider, MessageScroller, etc.)"
Cohesion: 0.17
Nodes (10): website_shadcn_extraction_ui_packages_react_src_message_scroller_index, website_shadcn_extraction_ui_packages_react_src_message_scroller_index_messagescroller, website_shadcn_extraction_ui_packages_react_src_message_scroller_index_usemessagescroller, website_shadcn_extraction_ui_packages_react_src_message_scroller_index_usemessagescrollerscrollable, website_shadcn_extraction_ui_packages_react_src_message_scroller_index_usemessagescrollervisibility, MessageScroller(), MessageScrollerButton(), MessageScrollerContent() (+2 more)

### Community 21 - "Attachment Primitive (file-attach UI: attachmentVariants, Attachment, AttachmentGroup, etc.)"
Cohesion: 0.20
Nodes (11): Attachment(), AttachmentAction(), AttachmentActions(), AttachmentContent(), AttachmentDescription(), AttachmentGroup(), AttachmentMedia(), attachmentMediaVariants (+3 more)

### Community 22 - "tsconfig Paths (paths: @/registry/bases/base/ui/*, ./src/components/ui/*, etc.)"
Cohesion: 0.18
Nodes (11): ./app/(create)/components/*, ./lib/*, ./shadcn-extraction/ui/packages/react/src/*, ./src/components/ui/*, ./src/hooks/*, paths, @/app/(create)/components/*, @/registry/bases/base/hooks/* (+3 more)

### Community 23 - "NavigationMenu Primitive (top-nav mega-menu: NavigationMenu, NavigationMenuList, etc.)"
Cohesion: 0.20
Nodes (10): ref_base_ui_react_navigation_menu, NavigationMenu(), NavigationMenuContent(), NavigationMenuIndicator(), NavigationMenuItem(), NavigationMenuLink(), NavigationMenuList(), NavigationMenuPositioner() (+2 more)

### Community 24 - "Badge Primitive + CVA reference (Badge, badgeVariants + ref_class_variance_authority)"
Cohesion: 0.27
Nodes (8): ref_base_ui_react_use_render, ref_class_variance_authority, Badge(), badgeVariants, Marker(), MarkerContent(), MarkerIcon(), markerVariants

### Community 25 - "UI Index/Registry (ui/index.ts, _registry.ts, ui/direction.tsx — shadcn registry plumbing)"
Cohesion: 0.22
Nodes (5): ref_base_ui_react_direction_provider, ref_shadcn_schema, Kbd(), KbdGroup(), ui

### Community 26 - "Toggle + ToggleGroup Primitives (ToggleGroupContext, ToggleGroup, Toggle variants)"
Cohesion: 0.33
Nodes (7): ref_base_ui_react_toggle, ref_base_ui_react_toggle_group, ToggleGroup(), ToggleGroupContext, ToggleGroupItem(), Toggle(), toggleVariants

### Community 27 - "Root Layout + Fonts (layout.tsx + ebGaramondHeading + notoSans + Geist font loading)"
Cohesion: 0.22
Nodes (8): ref_next_font_google, website_app_globals, ebGaramondHeading, geistMono, geistSans, metadata, notoSans, RootLayout()

### Community 28 - "Pagination Primitive (paged navigation: Pagination, PaginationContent, etc.)"
Cohesion: 0.22
Nodes (7): Pagination(), PaginationContent(), PaginationEllipsis(), PaginationLink(), PaginationLinkProps, PaginationNext(), PaginationPrevious()

### Community 29 - "Bubble Primitive (chat-bubble UI: BubbleGroup, bubbleVariants, Bubble, etc.)"
Cohesion: 0.32
Nodes (7): ref_base_ui_react_merge_props, Bubble(), BubbleContent(), BubbleGroup(), BubbleReactions(), bubbleReactionsVariants, bubbleVariants

### Community 30 - "Popover Primitive (floating overlay: Popover, PopoverTrigger, PopoverContent, etc.)"
Cohesion: 0.25
Nodes (5): ref_base_ui_react_popover, PopoverContent(), PopoverDescription(), PopoverHeader(), PopoverTitle()

### Community 31 - "Utils + AspectRatio (utils.ts + AspectRatio primitive + Kbd/Slider scattered)"
Cohesion: 0.25
Nodes (5): ref_base_ui_react_switch, ref_clsx, ref_tailwind_merge, AspectRatio(), Switch()

### Community 32 - "Breadcrumb Primitive (path breadcrumb nav: Breadcrumb, BreadcrumbList, etc.)"
Cohesion: 0.25
Nodes (7): Breadcrumb(), BreadcrumbEllipsis(), BreadcrumbItem(), BreadcrumbLink(), BreadcrumbList(), BreadcrumbPage(), BreadcrumbSeparator()

### Community 33 - "Empty Primitive (no-data/empty-state composition: Empty, EmptyHeader, etc.)"
Cohesion: 0.29
Nodes (7): Empty(), EmptyContent(), EmptyDescription(), EmptyHeader(), EmptyMedia(), emptyMediaVariants, EmptyTitle()

### Community 34 - "Progress Primitive (progress bar: Progress, ProgressTrack)"
Cohesion: 0.29
Nodes (6): ref_base_ui_react_progress, Progress(), ProgressIndicator(), ProgressLabel(), ProgressTrack(), ProgressValue()

### Community 35 - "Tabs Primitive (tabbed content: Tabs, tabsListVariants, TabsTrigger, etc.)"
Cohesion: 0.33
Nodes (6): ref_base_ui_react_tabs, Tabs(), TabsContent(), TabsList(), tabsListVariants, TabsTrigger()

### Community 36 - "tsconfig Include (include patterns: next-env.d.ts, **/*.ts, **/*.tsx)"
Cohesion: 0.29
Nodes (7): **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, **/*.ts, **/*.tsx, include

### Community 37 - "tsconfig Exclude + Next Config (exclude + next.config.ts + nextConfig)"
Cohesion: 0.29
Nodes (5): .next, node_modules, shadcn-extraction, nextConfig, exclude

### Community 38 - "Accordion Primitive (expand-collapse sections: Accordion, AccordionItem, etc.)"
Cohesion: 0.33
Nodes (5): ref_base_ui_react_accordion, Accordion(), AccordionContent(), AccordionItem(), AccordionTrigger()

### Community 39 - "InputOTP Primitive (one-time-code entry: InputOTP, InputOTPGroup, etc.)"
Cohesion: 0.33
Nodes (4): ref_input_otp, InputOTP(), InputOTPGroup(), InputOTPSlot()

### Community 40 - "Alert Primitive (callout/inline notice: alertVariants, Alert, AlertTitle, etc.)"
Cohesion: 0.40
Nodes (5): Alert(), AlertAction(), AlertDescription(), AlertTitle(), alertVariants

### Community 42 - "HoverCard Primitive (hover-revealed card: HoverCard, HoverCardTrigger)"
Cohesion: 0.40
Nodes (2): ref_base_ui_react_preview_card, HoverCardContent()

### Community 43 - "RadioGroup Primitive (mutually-exclusive radio: RadioGroup, RadioGroupItem)"
Cohesion: 0.40
Nodes (4): ref_base_ui_react_radio, ref_base_ui_react_radio_group, RadioGroup(), RadioGroupItem()

### Community 44 - "ESLint Config (eslint.config.mjs + eslintConfig + ref_eslint_config)"
Cohesion: 0.40
Nodes (4): ref_eslint_config, ref_eslint_config_next_core_web_vitals, ref_eslint_config_next_typescript, eslintConfig

### Community 45 - "Resizable Primitive (resizable panel groups: ResizablePanelGroup, ResizablePanel)"
Cohesion: 0.40
Nodes (3): ref_react_resizable_panels, ResizableHandle(), ResizablePanelGroup()

### Community 46 - "ButtonGroup Primitive (buttonGroupVariants, ButtonGroup + Separator)"
Cohesion: 0.50
Nodes (4): ButtonGroup(), ButtonGroupSeparator(), ButtonGroupText(), buttonGroupVariants

### Community 47 - "ScrollArea Primitive (custom scrollbar: ScrollArea, ScrollBar)"
Cohesion: 0.50
Nodes (3): ref_base_ui_react_scroll_area, ScrollArea(), ScrollBar()

### Community 48 - "TS Compiler Lib Options (lib: dom, dom.iterable, esnext)"
Cohesion: 0.50
Nodes (4): dom, dom.iterable, esnext, lib

### Community 49 - "Sonner Toaster (Toaster + ref_next_themes — toast container)"
Cohesion: 0.50
Nodes (2): ref_next_themes, ref_sonner

### Community 50 - "Slider Primitive (Slider + ref_base_ui_react_slider)"
Cohesion: 0.67
Nodes (2): ref_base_ui_react_slider, Slider()

## Knowledge Gaps
- **128 isolated node(s):** `IconPlaceholderProps`, `ebGaramondHeading`, `notoSans`, `geistSans`, `geistMono` (+123 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<2 nodes) omitted from report** — run `graphify query` to explore isolated nodes.