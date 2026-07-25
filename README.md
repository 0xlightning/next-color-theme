# Next Color Theme Dashboard

A modern **Next.js 16** and **React 19** financial & analytics dashboard built with **Tailwind CSS v4**, **Shadcn UI** components (~60+ primitives), and a modular library of **20 reusable widgets** (cards, interactive charts, data tables, and forms). The application features full light and dark mode theme switching, responsive sidebar navigation, and dedicated pages for analytics, authentication, and settings.

---

## 🛠️ Technology Stack

- **Framework:** Next.js 16.2 (App Router with Turbopack)
- **UI & React:** React 19.2, Shadcn UI, Base UI (`@base-ui/react`)
- **Styling:** Tailwind CSS v4, PostCSS, `tw-animate-css`, `clsx`, `tailwind-merge`
- **Icons:** Tabler Icons (`@tabler/icons-react`)
- **Data Visualization:** Recharts 3.10
- **Theme Management:** `next-themes` (Dark/Light mode)

---

## 🚀 Getting Started

The web application source code is located in the `website/` directory.

```bash
# Navigate to the website workspace
cd website

# Install dependencies
npm install

# Start the development server (http://localhost:3000)
npm run dev
```

---

## 📦 Project Structure & Pages

The application is organized under `website/`:

- **Main Dashboard (`/`)** – Responsive overview page showcasing all 20 dashboard widgets in a grid layout.
- **Analytics (`/analytics`)** – Targeted analytics dashboard sub-page with focused charts and stats.
- **Authentication (`/login`)** – Full login/auth screen with modern form controls and visual branding.
- **Settings (`/settings`)** – User account and preference management page.
- **Widget Library (`website/src/components/widgets/`)** – 20 standalone widgets including `RevenueChart`, `Calendar` [NEW], `StockPerformance` [NEW], `PortfolioBreakdown`, `DividendIncome`, `PaymentCards`, `InvestmentPortfolio`, `SavingsTarget`, and more.
- **Chart Primitives (`website/src/components/charts/`)** – Reusable chart primitives (`AreaChart`, `BarChart`, `DonutChart`, `LineChart`, `MiniBarChart`, `ProgressRing`, `Sparkline`).
- **Shadcn UI Components (`website/src/components/ui/`)** – Complete set of ~60+ UI building blocks (buttons, dialogs, tables, drawers, sonner toasts, etc.).

---

## 🛠️ Building & Scripts

Run these scripts from within the `website/` folder:

```bash
# Development mode
npm run dev

# Lint codebase
npm run lint

# Production build
npm run build

# Start production server
npm run start
```

---

## 📚 Documentation & Specifications

- **[architecture.md](architecture.md)** – Comprehensive repository file map, component breakdown, and newly added file inventory.
- **[prd.md](prd.md)** – Product Requirements Document detailing scope, widget spec, and build verification status.
- **[Shadcn-Extraction/](Shadcn-Extraction/)** – Technical design notes and component extraction logs.
- **[website/README.md](website/README.md)** – Workspace-specific setup guide and folder overview.

---
*Maintained with Antigravity AI assistant*
