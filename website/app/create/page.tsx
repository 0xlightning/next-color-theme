import Link from "next/link"
import { PreviewGrid } from "@/components/create/preview-grid"
import { ThemeScope } from "@/components/create/theme-scope"
import { DesignSystemProvider } from "@/components/create/use-design-system"
import { Sidebar } from "@/components/layout/Sidebar"

export const metadata = {
  title: "Create — Next Color Theme",
  description: "Customize the dashboard live.",
}

export default function CreatePage() {
  return (
    <DesignSystemProvider>
      <div className="flex min-h-screen w-full bg-zinc-50 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
        <aside className="sticky top-0 hidden h-screen shrink-0 md:block">
          <Sidebar />
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="flex items-center justify-between border-b border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900 sm:px-6">
            <div className="flex items-center gap-3">
              <Link href="/create" className="text-sm font-semibold tracking-tight">
                Next Color Theme
              </Link>
              <span className="text-xs text-zinc-500">/ create</span>
            </div>
            <p className="text-xs text-zinc-500">Press R to randomize</p>
          </header>

          <ThemeScope>
            <PreviewGrid />
          </ThemeScope>
        </div>
      </div>
    </DesignSystemProvider>
  )
}
