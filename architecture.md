# Architecture Overview & Comprehensive File Map

This document provides an exhaustive architectural specification and repository file map for the **Next Color Theme Dashboard** project, including all core modules, newly added widgets, barrel exports, mock datasets, and layout components.

---

## 🌳 Complete Repository Directory Tree

```
next-color theme/
├─ .gitignore                # [MODIFIED] Root Git ignore rules (node_modules, build artifacts, env files, cache, IDE configs).
├─ README.md                 # [UPDATED] Master project overview, getting started guide, technology stack, and route listing.
├─ prd.md                    # [UPDATED] Product Requirements Document (PRD) detailing scope, widget specs, and build verification.
├─ architecture.md           # [UPDATED] (This file) – High-level architectural overview and full file tree.
├─ Shadcn-Extraction/        # Reference guides detailing Shadcn UI extraction and design system roadmap.
│   ├─ 001-Setup.md          # Environment initialization and package installation guide.
│   ├─ 002-Theme.md          # HSL theme token definitions and dark-mode setup.
│   ├─ 003-Components.md     # Extraction notes for primitive UI components.
│   ├─ 004-Registry.md       # Component registry manifest structure.
│   ├─ 005-Widgets.md        # Guidelines for composing widgets from primitives.
│   ├─ 006-Layouts.md        # App shell, header, and sidebar layout extraction patterns.
│   ├─ 007-Roadmap.md        # Design system expansion roadmap.
│   └─ README.md             # Overview of extraction guide collection.
├─ skill/                    # AI coding guidelines and engineering reference documentation.
│   ├─ codereview.md         # Code review principles for Next.js, React, and TypeScript.
│   ├─ ponytail.md           # Component styling and layout standards.
│   └─ shadcn.md             # Shadcn UI customization and theme token guidelines.
└─ website/                  # Primary Next.js 16 Web Application Workspace
    ├─ .gitignore            # [MODIFIED] Workspace-level Git ignore rules (build artifacts, .next/, out/, .env*).
    ├─ README.md             # [NEW] Workspace-level setup and developer guide.
    ├─ app/                  # Next.js 16 App Router pages, layouts, and global styles.
    │   ├─ (create)/         # Scaffolding utilities.
    │   │   └─ components/   # Helper placeholders (icon-placeholder.tsx).
    │   ├─ analytics/        # Analytics dashboard route (/analytics).
    │   │   └─ page.tsx      # Analytics dashboard sub-page showcasing key widgets.
    │   ├─ favicon.ico       # Site favicon asset.
    │   ├─ globals.css       # Global CSS imports and Tailwind utility directives.
    │   ├─ layout.tsx        # Root App Router layout configuring ThemeProvider, fonts, and metadata.
    │   ├─ login/            # Authentication route (/login).
    │   │   └─ page.tsx      # Login & authentication page with modern form controls.
    │   ├─ page.tsx          # Main Overview dashboard (/), importing and rendering all 20 widgets in a grid.
    │   └─ settings/         # Settings route (/settings).
    │       └─ page.tsx      # User account and preference management page.
    ├─ components/           # Fallback/legacy component aliases.
    │   └─ ui/               # Primitive UI references.
    ├─ lib/                  # Application utility functions.
    │   └─ utils.ts          # Classname merger helper (cn) combining clsx and tailwind-merge.
    ├─ public/               # Static web assets served directly by Next.js.
    ├─ src/                  # Core Application Source Tree
    │   ├─ components/       # Component Architecture
    │   │   ├─ charts/       # Reusable Recharts & SVG Primitives
    │   │   │   ├─ AreaChart.tsx      # [MODIFIED] Area chart wrapper component with unknown type safety.
    │   │   │   ├─ BarChart.tsx       # [MODIFIED] Bar chart wrapper component with unknown type safety.
    │   │   │   ├─ DonutChart.tsx     # [MODIFIED] Donut chart wrapper component with unknown type safety.
    │   │   │   ├─ LineChart.tsx      # [MODIFIED] Line chart wrapper component with unknown type safety.
    │   │   │   ├─ MiniBarChart.tsx   # Compact inline bar chart primitive.
    │   │   │   ├─ ProgressRing.tsx   # SVG radial progress ring primitive.
    │   │   │   └─ Sparkline.tsx      # Mini trendline sparkline primitive.
    │   │   ├─ layout/       # Application Shell Components
    │   │   │   ├─ DashboardLayout.tsx # Responsive shell container with Header and Sidebar.
    │   │   │   ├─ Header.tsx         # Top bar with navigation search, theme toggle, and profile.
    │   │   │   └─ Sidebar.tsx        # [MODIFIED] Collapsible side navigation with Next.js <Link> routing.
    │   │   ├─ ui/           # Shadcn UI Component Suite (~60+ components)
    │   │   │   ├─ _registry.ts       # Registry metadata manifest for UI components.
    │   │   │   ├─ accordion.tsx, alert.tsx, avatar.tsx, badge.tsx, button.tsx, card.tsx...
    │   │   │   └─ index.ts           # Barrel export for UI primitives.
    │   │   └─ widgets/      # Modular Domain Widget Library (20 Widgets)
    │   │       ├─ RevenueChart/          # [MODIFIED] Revenue analytics chart widget (RevenueChart.tsx, mockData.ts).
    │   │       ├─ account-access/        # [MODIFIED] Security, 2FA, & session widget (AccountAccess.tsx, mockData.ts).
    │   │       ├─ buy-investment/        # [MODIFIED] Investment order placement widget (BuyInvestment.tsx, mockData.ts, index.ts).
    │   │       ├─ calendar/              # [NEW WIDGET] Schedule & calendar events (Calendar.tsx [NEW], mockData.ts, index.ts [NEW]).
    │   │       ├─ claimable-balance/     # [MODIFIED] Royalty balance & payout rule widget (ClaimableBalance.tsx, mockData.ts, index.ts).
    │   │       ├─ contact-information/   # [MODIFIED] User contact card widget (ContactInformation.tsx, defaultData).
    │   │       ├─ contribution-history/  # [MODIFIED] Historical contributions chart (ContributionHistory.tsx, mockData.ts).
    │   │       ├─ dividend-income/       # [MODIFIED] Dividend earnings breakdown (DividendIncome.tsx, mockData.ts [NEW], index.ts [NEW]).
    │   │       ├─ empty-state/           # [MODIFIED] Placeholder empty state card widget (EmptyState.tsx, defaultData).
    │   │       ├─ growth-statistics/     # [MODIFIED] Growth metric summary card (GrowthStatistics.tsx, defaultData).
    │   │       ├─ investment-portfolio/  # [MODIFIED] Portfolio goal progress ring widget (InvestmentPortfolio.tsx, mockData.ts).
    │   │       ├─ loading-state/         # [MODIFIED] Skeleton loading placeholder widget (LoadingState.tsx, defaultData).
    │   │       ├─ monthly-activity/      # [MODIFIED] Transaction activity log widget (MonthlyActivity.tsx, defaultData).
    │   │       ├─ notifications/         # [MODIFIED] Real-time alert notifications widget (Notifications.tsx, defaultData).
    │   │       ├─ payment-cards/         # [MODIFIED] Credit card balance & payment (PaymentCards.tsx, mockData.ts [NEW], index.ts [NEW]).
    │   │       ├─ payment-log/           # [MODIFIED] Payment history audit log widget (PaymentLog.tsx, defaultData).
    │   │       ├─ payment-threshold/     # [MODIFIED] Payout threshold slider config (PaymentThreshold.tsx, mockData.ts, index.ts).
    │   │       ├─ portfolio-breakdown/   # [MODIFIED] Asset allocation breakdown widget (PortfolioBreakdown.tsx, defaultData).
    │   │       ├─ savings-target/        # [MODIFIED] Savings goal progress ring (SavingsTarget.tsx, mockData.ts [NEW], index.ts [NEW]).
    │   │       ├─ stock-performance/     # [NEW WIDGET] Live stock ticker tracking (StockPerformance.tsx [NEW], mockData.ts [NEW], index.ts [NEW]).
    │   │       └─ index.ts               # Root barrel re-exporting all 20 widgets.
    │   ├─ hooks/            # Custom React Hooks (use-mobile.ts).
    │   └─ theme/            # Theme Engine & Styling System (globals.css, theme.css).
    ├─ components.json       # Shadcn CLI configuration manifest.
    ├─ eslint.config.mjs     # ESLint configuration for Next.js 16 and TypeScript.
    ├─ next-env.d.ts         # Next.js ambient TypeScript definitions.
    ├─ next.config.ts        # Next.js framework configuration.
    ├─ package.json          # Workspace dependencies and npm scripts.
    ├─ postcss.config.mjs    # PostCSS pipeline configuration (@tailwindcss/postcss).
    ├─ tailwind.config.ts    # [MODIFIED] Tailwind CSS configuration.
    └─ tsconfig.json         # TypeScript configuration with path aliases.
```

---

## 🆕 Detailed Inventory of Newly Added & Modified Files

### 1. Newly Created Files
- **`website/src/components/widgets/calendar/Calendar.tsx`**: Fully implemented schedule calendar component featuring `@tabler/icons-react` icons (`IconCalendar`, `IconClock`) and typed event items.
- **`website/src/components/widgets/calendar/index.ts`**: Barrel export re-exporting `Calendar`.
- **`website/src/components/widgets/dividend-income/mockData.ts`**: Typed mock dataset exporting holding share amounts, dividend payment histories, and latest yield totals.
- **`website/src/components/widgets/dividend-income/index.ts`**: Barrel export re-exporting `DividendIncome`.
- **`website/src/components/widgets/payment-cards/mockData.ts`**: Typed mock dataset exporting card balance (`$3,450.75`), due dates, currency, and available credit limits.
- **`website/src/components/widgets/payment-cards/index.ts`**: Barrel export re-exporting `PaymentCards`.
- **`website/src/components/widgets/savings-target/mockData.ts`**: Typed mock dataset exporting savings goal targets (`$25,000`), projected completion dates, and monthly averages.
- **`website/src/components/widgets/savings-target/index.ts`**: Barrel export re-exporting `SavingsTarget`.
- **`website/src/components/widgets/stock-performance/StockPerformance.tsx`**: Stock market ticker widget using `@tabler/icons-react` (`IconTrendingUp`, `IconTrendingDown`) for positive/negative market indicators.
- **`website/src/components/widgets/stock-performance/mockData.ts`**: Typed mock array exporting stock symbols (`AAPL`, `NVDA`, `TSLA`, `AMZN`), prices, and percentages.
- **`website/src/components/widgets/stock-performance/index.ts`**: Barrel export re-exporting `StockPerformance`.
- **`website/README.md`**: Workspace-specific developer guide detailing local dev, linting, and build commands inside `website/`.

### 2. Modified Component Files & Type Fixes
- **`website/src/components/widgets/RevenueChart/RevenueChart.tsx`**: Added missing `export default RevenueChart`.
- **`website/src/components/widgets/contribution-history/ContributionHistory.tsx`**: Added missing `export default ContributionHistory`.
- **`website/src/components/widgets/account-access/AccountAccess.tsx`**: Imported `mockData` and made `data` prop optional (`data = mockData`).
- **`website/src/components/widgets/growth-statistics/GrowthStatistics.tsx`**: Added default object fallback for `data` prop.
- **`website/src/components/widgets/portfolio-breakdown/PortfolioBreakdown.tsx`**: Added default object fallback for `data` prop.
- **`website/src/components/widgets/monthly-activity/MonthlyActivity.tsx`**: Added default object fallback for `data` prop.
- **`website/src/components/widgets/payment-log/PaymentLog.tsx`**: Added default object fallback for `data` prop.
- **`website/src/components/widgets/notifications/Notifications.tsx`**: Added default object fallback for `data` prop with sample notification list.
- **`website/src/components/widgets/loading-state/LoadingState.tsx`**: Added default object fallback for `data` prop.
- **`website/src/components/widgets/empty-state/EmptyState.tsx`**: Added default object fallback for `data` prop.
- **`website/src/components/widgets/contact-information/ContactInformation.tsx`**: Added default object fallback for `data` prop and escaped JSX apostrophe entity.
- **`website/src/components/widgets/investment-portfolio/InvestmentPortfolio.tsx`**: Swapped `DonutChart` for `ProgressRing` component matching `{ value, size, strokeWidth }` props and removed unused imports.
- **`website/src/components/widgets/buy-investment/BuyInvestment.tsx`**: Wrapped `Select` `onValueChange` to fall back to `"market"` on `null`.
- **`website/src/components/widgets/claimable-balance/ClaimableBalance.tsx`**: Removed unsupported `asChild` prop from `TooltipTrigger`.
- **`website/src/components/widgets/payment-threshold/PaymentThreshold.tsx`**: Wrapped `Select` `onValueChange` and safely extracted numeric values from `Slider` `onValueChange` array/number union.
- **`website/src/components/layout/Sidebar.tsx`**: Replaced standard `<a>` tags with Next.js `<Link>` for client routing across navigation items.
- **`website/src/components/charts/AreaChart.tsx`, `BarChart.tsx`, `DonutChart.tsx`, `LineChart.tsx`**: Replaced implicit `any` props with `unknown` type safety.
- **`website/tailwind.config.ts`**: Removed unavailable `tailwindcss-animate` requirement (project uses `tw-animate-css`).

---
*Maintained with Antigravity AI assistant*
