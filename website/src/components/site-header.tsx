import Link from "next/link"

import { cn } from "@/lib/utils"

const NAV = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/create", label: "Create" },
  { href: "/creates", label: "Saved" },
] as const

/**
 * Shared chrome for all three routes. Deliberately outside `ThemeScope` — it
 * is app chrome, not part of the previewed theme, so it keeps its own colors
 * while the preview restyles itself.
 */
export function SiteHeader({
  active,
  children,
}: {
  active?: (typeof NAV)[number]["href"]
  children?: React.ReactNode
}) {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-zinc-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard" className="text-sm font-semibold tracking-tight">
          Next Color Theme
        </Link>
        <nav className="flex items-center gap-3">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-xs transition-colors hover:text-zinc-900",
                active === item.href
                  ? "font-medium text-zinc-900"
                  : "text-zinc-500"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      {children}
    </header>
  )
}
