import Link from "next/link"

import { SavedCount } from "@/components/creates/saved-count"
import { SiteHeader } from "@/components/site-header"

export const metadata = {
  title: "Dashboard — Next Color Theme",
  description: "Start a new design or reopen a saved one.",
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-zinc-50 font-sans text-zinc-900">
      <SiteHeader active="/dashboard" />

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-8 px-6 py-16">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-semibold tracking-tight">
            Design a theme, take the code.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-zinc-600">
            Pick colors, fonts, radius and chart palette in the customizer, see
            the whole component set render in light and dark at once, then
            export a paste-ready <code>globals.css</code> and shadcn install
            command for your own project.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/create"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-zinc-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
          >
            Get Design
          </Link>
          <Link
            href="/creates"
            className="inline-flex h-10 items-center justify-center rounded-lg border border-zinc-300 bg-white px-5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100"
          >
            Saved Designs <SavedCount />
          </Link>
        </div>
      </main>
    </div>
  )
}
