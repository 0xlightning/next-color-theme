"use client"

import { useSavedDesigns } from "@/components/create/use-saved-designs"

/**
 * Badge showing how many designs are stored. Renders nothing until the
 * post-mount localStorage read lands, so the server and client agree on the
 * first paint.
 */
export function SavedCount() {
  const { designs, hydrated } = useSavedDesigns()
  if (!hydrated || designs.length === 0) {
    return null
  }
  return (
    <span className="ml-2 inline-flex min-w-5 items-center justify-center rounded-full bg-zinc-900 px-1.5 text-[11px] font-semibold text-white">
      {designs.length}
    </span>
  )
}
