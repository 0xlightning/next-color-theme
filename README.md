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

- **[CLAUDE.md](CLAUDE.md)** – Authoritative project rules, verification gate, and conventions for AI agents working in this repo.
- **[graphify-out/GRAPH_REPORT.md](graphify-out/GRAPH_REPORT.md)** – Knowledge graph report: communities, god nodes, cross-file dependencies for the 60+ UI primitives, 7 chart wrappers, and 20 widgets.
- **[graphify-out/graph.html](graphify-out/graph.html)** – Interactive browser visualization of the codebase knowledge graph.
- **[Shadcn-Extraction/](Shadcn-Extraction/)** – Technical design notes and component extraction logs.
- **[website/README.md](website/README.md)** – Workspace-specific setup guide and folder overview.

---

## 🕸️ Knowledge Graph / graphify

This repo has a persistent knowledge graph at `graphify-out/`. When you
ask "what depends on X?", "where is Y defined?", or "trace the path
between A and B", prefer the graph over grep — it already knows.

- **`graphify-out/GRAPH_REPORT.md`** — human-readable summary: 53 named
  communities, god nodes, surprising cross-file connections.
- **`graphify-out/graph.html`** — interactive browser visualization
  (open in any browser, no server).
- **`graphify-out/graph.json`** + **`manifest.json`** — queryable data
  backing the report.

The graph encodes structural AST edges + semantic doc edges across the
**60+ shadcn primitives** (`website/src/components/ui/`), **7 chart
wrappers** (`website/src/components/charts/`), and **20 widgets**
(`website/src/components/widgets/`) — including semantic edges
extracted from `CLAUDE.md`, `README.md`, and every `SKILL.md`.

### Quick commands

```bash
# Ask the graph a question (preferred over grep for cross-file queries)
python -m graphify query "what depends on RevenueChart?"

# Refresh after editing code only (no LLM, fast)
python -m graphify update .

# Refresh after editing markdown (semantic edges re-extract)
python -m graphify update . && python -m graphify cluster-only . --min-community-size=2

# Annual full rebuild
python -m graphify .
```

Re-run `python -m graphify update .` after major file changes to keep
the graph fresh. The full refresh-command table is below.

## 🔄 Knowledge Graph — Refresh Commands

The `graphify-out/` knowledge graph is shared across the repo. Files
marked as **shared** are committed; files marked as **personal** are
gitignored and per-user (rebuilt from the shared graph).

| When to refresh | Command (run from repo root) |
|---|---|
| You added/renamed/deleted **code files** (widgets, UI primitives, hooks, layouts) | `python -m graphify update .` — fast, no LLM |
| Restructured components/primitives (renames, refactors that change graph topology) | `python -m graphify update . --force` — same as above but allows graph shrink |
| You edited **markdown** (CLAUDE.md, README.md, SKILL.md) — semantic edges need re-extracting | `python -m graphify update .` then `python -m graphify cluster-only . --min-community-size=2` |
| Communities drifted or look wrong (needs `GEMINI_API_KEY` set) | `python -m graphify label . --missing-only` |
| Annual full rebuild / new contributor onboard | `python -m graphify .` (full re-extraction + clustering + LLM labeling) |

Heuristic: rebuild the graph whenever you change something an agent
would need to know about to navigate the codebase — usually 1–2× per
week of active development, not every commit. The `--update` flag is a
positional subcommand in modern graphify
(`python -m graphify update <path>`), not a flag on the root command.

---
