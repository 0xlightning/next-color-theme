"use client"

import * as React from "react"

const STORAGE_KEY = "next-color-theme:create-state"

/**
 * Backstop for the customizer.
 *
 * `sanitizeConfig` closes the storage boundary, so anything that still throws
 * here is a real bug rather than bad saved data — but the failure mode without
 * a boundary is a blank white page with the state that caused it still in
 * localStorage, which the user cannot escape by reloading. Offer the reset.
 */
export default function CreateError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  React.useEffect(() => {
    console.error("[/create]", error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-xl font-semibold">The customizer hit an error</h1>
      <p className="max-w-md text-sm text-zinc-600">
        {error.message || "Something went wrong while rendering the preview."}
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={reset}
          className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm"
        >
          Try again
        </button>
        <button
          type="button"
          onClick={() => {
            try {
              window.localStorage.removeItem(STORAGE_KEY)
            } catch {
              // private mode — nothing to clear
            }
            window.location.href = "/create"
          }}
          className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white"
        >
          Reset saved settings
        </button>
      </div>
    </div>
  )
}
