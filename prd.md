# Product Requirements Document (PRD) – Next Color Theme Dashboard

**Project:** `next-color theme` – Next.js Financial & Analytics Dashboard  
**Status:** ✅ **Production Ready** (0 build/type errors, static prerendering verified)  
**Scope:** High-performance, responsive, dark-mode ready Next.js 16 dashboard featuring a modular library of 20 domain-specific widgets, reusable chart primitives, Shadcn UI components, and App Router application routes.

---

## 🎯 Goals & Implemented Scope

1. **Modular Widget Suite** – 20 standalone widgets covering financial analytics, portfolio performance, stock tracking, payment management, transaction logs, account settings, and user notifications.
2. **Consistent Component Architecture** – Each widget lives in its own directory under `website/src/components/widgets/` containing its React component (`<WidgetName>.tsx`), static typed mock data (`mockData.ts`), and barrel export (`index.ts`).
3. **Reusable Chart Primitives** – Encapsulated Recharts components (`AreaChart`, `BarChart`, `DonutChart`, `LineChart`, `MiniBarChart`, `ProgressRing`, `Sparkline`) with typed prop interfaces.
4. **Shadcn UI Library Integration** – ~60+ UI primitives (Buttons, Cards, Dialogs, Drawers, Tables, Tabs, Sonner toasts, Command menus) styled with Tailwind CSS v4 and `next-themes`.
5. **App Router Navigation** – 4 primary routes wrapped in layout shells:
   - `/` – Main Overview Dashboard with responsive grid of all 20 widgets.
   - `/analytics` – Dedicated analytics & metrics view.
   - `/login` – Auth page with login UI components.
   - `/settings` – User profile and dashboard settings panel.

---

## 📦 Deliverables & Folder Structure

- `website/app/` – App Router pages (`page.tsx`, `analytics/page.tsx`, `login/page.tsx`, `settings/page.tsx`, `layout.tsx`, `globals.css`).
- `website/src/components/widgets/` – 20 modular widget directories (`RevenueChart`, `account-access`, `buy-investment`, `calendar`, `claimable-balance`, `contact-information`, `contribution-history`, `dividend-income`, `empty-state`, `growth-statistics`, `investment-portfolio`, `loading-state`, `monthly-activity`, `notifications`, `payment-cards`, `payment-log`, `payment-threshold`, `portfolio-breakdown`, `savings-target`, `stock-performance`) + root barrel `index.ts`.
- `website/src/components/charts/` – 7 Recharts wrapper primitives (`AreaChart`, `BarChart`, `DonutChart`, `LineChart`, `MiniBarChart`, `ProgressRing`, `Sparkline`).
- `website/src/components/layout/` – App shell components (`DashboardLayout.tsx`, `Header.tsx`, `Sidebar.tsx`).
- `website/src/components/ui/` – 60+ Shadcn UI primitive components.
- `website/src/theme/` – Global CSS tokens and dark/light theme definitions.

---

## ⚙️ Technical Specifications

- **Framework:** Next.js 16.2.11 (App Router with Turbopack)
- **UI Runtime:** React 19.2.4
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`), custom CSS variables for dark/light themes
- **State & Theme:** `next-themes` ThemeProvider
- **Component Primitives:** Shadcn UI, Base UI (`@base-ui/react`), Tabler Icons (`@tabler/icons-react`), Recharts 3.10

---

## 🆕 Inventory of Newly Added Files & Verification Summary

### 1. Newly Added Files & Modules
- **`website/src/components/widgets/calendar/Calendar.tsx`** & **`index.ts`**: Newly implemented Calendar schedule component using `@tabler/icons-react`.
- **`website/src/components/widgets/stock-performance/StockPerformance.tsx`**, **`mockData.ts`**, & **`index.ts`**: Newly implemented stock ticker component with `@tabler/icons-react` trends.
- **`website/src/components/widgets/dividend-income/mockData.ts`** & **`index.ts`**: Newly created mock dataset and barrel export.
- **`website/src/components/widgets/payment-cards/mockData.ts`** & **`index.ts`**: Newly created mock dataset and barrel export.
- **`website/src/components/widgets/savings-target/mockData.ts`** & **`index.ts`**: Newly created mock dataset and barrel export.
- **`website/README.md`**: Newly created workspace guide for developer quick start.

### 2. Build & Type Verification
- **Production Build Status:** Passed `npm run build` with **0 TypeScript or compilation errors**.
- **Static Pre-rendering:** Prerendered 5 static pages (`/`, `/_not-found`, `/analytics`, `/login`, `/settings`).
- **Component Repairs Executed:**
  - Added optional `data` props with default objects across 8 widgets (`AccountAccess`, `GrowthStatistics`, `PortfolioBreakdown`, `MonthlyActivity`, `PaymentLog`, `Notifications`, `LoadingState`, `EmptyState`, `ContactInformation`).
  - Fixed chart component prop matching in `InvestmentPortfolio.tsx` (`ProgressRing` for numeric percentage values).
  - Resolved `Select` and `Slider` union/null parameter handling in `BuyInvestment.tsx` and `PaymentThreshold.tsx`.
  - Replaced raw `<a>` tags with Next.js `<Link>` in `Sidebar.tsx` for client routing.
  - Escaped JSX entities in `ContactInformation.tsx`.

---
*Maintained with Antigravity AI assistant*
