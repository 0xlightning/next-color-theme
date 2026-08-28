"use client"

import * as React from "react"
import Link from "next/link"
import { toast } from "sonner"
import { StaticThemeScope } from "@/components/create/theme-scope"
import {
  useSavedDesigns,
  type SavedDesign,
} from "@/components/create/use-saved-designs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { getFont, getLibrary, getStyle } from "@/registry"
import { cn } from "@/lib/utils"

const CHART_TOKENS = ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"]
const SURFACE_TOKENS = ["background", "primary", "accent", "secondary", "muted"]

function formatDate(ts: number): string {
  return new Date(ts).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

/**
 * Miniature of one saved design. Token names are runtime data, so the
 * swatches are painted with inline `var(--token)` rather than Tailwind
 * classes — `StaticThemeScope` supplies the variables for this card alone.
 */
function Thumbnail({ design }: { design: SavedDesign }) {
  const { config } = design
  const bodyFont = getFont(config.font)
  const headingFont =
    config.fontHeading === "inherit" ? bodyFont : getFont(config.fontHeading)

  return (
    <StaticThemeScope
      config={config}
      mode={config.mode}
      className="flex flex-col gap-3 rounded-lg border p-3"
    >
      <div
        className="flex flex-col gap-2 rounded-md p-3"
        style={{
          background: "var(--card)",
          color: "var(--card-foreground)",
          borderRadius: "var(--radius)",
        }}
      >
        <span
          className="text-base leading-tight"
          style={{ fontFamily: headingFont?.family ?? "inherit" }}
        >
          Heading sample
        </span>
        <span
          className="text-[11px] leading-snug opacity-70"
          style={{ fontFamily: bodyFont?.family ?? "inherit" }}
        >
          Body text renders in {bodyFont?.label ?? "the body face"}.
        </span>
        <div className="flex items-center gap-2 pt-1">
          <span
            className="px-2 py-1 text-[10px] font-medium"
            style={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
              borderRadius: "var(--radius)",
            }}
          >
            Button
          </span>
          <span
            className="px-2 py-1 text-[10px] font-medium"
            style={{
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
            }}
          >
            Outline
          </span>
        </div>
      </div>

      <div className="flex gap-1">
        {SURFACE_TOKENS.map((token) => (
          <span
            key={token}
            title={`--${token}`}
            className="h-4 flex-1 rounded-sm ring-1 ring-black/10"
            style={{ background: `var(--${token})` }}
          />
        ))}
      </div>
      <div className="flex gap-1">
        {CHART_TOKENS.map((token) => (
          <span
            key={token}
            title={`--${token}`}
            className="h-2.5 flex-1 rounded-full"
            style={{ background: `var(--${token})` }}
          />
        ))}
      </div>
    </StaticThemeScope>
  )
}

export function DesignGallery() {
  const { designs, hydrated, rename, remove } = useSavedDesigns()
  const [editingId, setEditingId] = React.useState<string | null>(null)
  const [draftName, setDraftName] = React.useState("")
  const [pendingDelete, setPendingDelete] = React.useState<SavedDesign | null>(
    null
  )

  const commitRename = (design: SavedDesign) => {
    if (draftName.trim() && draftName.trim() !== design.name) {
      rename(design.id, draftName)
      toast.success("Renamed")
    }
    setEditingId(null)
  }

  if (!hydrated) {
    // Nothing is known until localStorage is read post-mount; rendering the
    // empty state here would flash the wrong thing on every load.
    return <div className="min-h-40" aria-busy />
  }

  if (designs.length === 0) {
    return (
      <div className="flex flex-col items-start gap-3 rounded-xl border border-dashed border-zinc-300 bg-white p-8">
        <p className="text-sm text-zinc-600">
          No saved designs yet. Build one in the customizer and hit Save Design.
        </p>
        <Link
          href="/create"
          className="inline-flex h-9 items-center justify-center rounded-lg bg-zinc-900 px-4 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
        >
          Get Design
        </Link>
      </div>
    )
  }

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {designs.map((design) => (
          <div
            key={design.id}
            className="flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-3"
          >
            <Thumbnail design={design} />

            <div className="flex flex-col gap-0.5 px-1">
              {editingId === design.id ? (
                <Input
                  value={draftName}
                  autoFocus
                  onChange={(event) => setDraftName(event.target.value)}
                  onBlur={() => commitRename(design)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault()
                      commitRename(design)
                    }
                    if (event.key === "Escape") {
                      setEditingId(null)
                    }
                  }}
                  className="h-8"
                />
              ) : (
                <span className="truncate text-sm font-semibold text-zinc-900">
                  {design.name}
                </span>
              )}
              <span className="text-[11px] text-zinc-500">
                {getStyle(design.config.style)?.label ?? design.config.style} ·{" "}
                {getLibrary(design.config.library)?.label ??
                  design.config.library}{" "}
                · {formatDate(design.updatedAt)}
              </span>
            </div>

            <div className="flex items-center gap-1.5 px-1 pb-1">
              <Link
                href={`/create?design=${design.id}`}
                className="inline-flex h-8 flex-1 items-center justify-center rounded-md bg-zinc-900 px-3 text-xs font-semibold text-white transition-colors hover:bg-zinc-800"
              >
                Load
              </Link>
              <button
                type="button"
                onClick={() => {
                  setEditingId(design.id)
                  setDraftName(design.name)
                }}
                className="inline-flex h-8 items-center justify-center rounded-md border border-zinc-300 px-3 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-100"
              >
                Rename
              </button>
              <button
                type="button"
                onClick={() => setPendingDelete(design)}
                className={cn(
                  "inline-flex h-8 items-center justify-center rounded-md border border-zinc-300 px-3 text-xs font-medium transition-colors",
                  "text-red-600 hover:border-red-300 hover:bg-red-50"
                )}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <Dialog
        open={pendingDelete !== null}
        onOpenChange={(open) => {
          if (!open) {
            setPendingDelete(null)
          }
        }}
      >
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Delete design?</DialogTitle>
            <DialogDescription>
              “{pendingDelete?.name}” will be removed from this browser. This
              cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button
              type="button"
              onClick={() => setPendingDelete(null)}
              className="inline-flex h-9 items-center justify-center rounded-md border border-border px-4 text-sm font-medium"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                if (pendingDelete) {
                  remove(pendingDelete.id)
                  toast.success(`Deleted “${pendingDelete.name}”`)
                }
                setPendingDelete(null)
              }}
              className="inline-flex h-9 items-center justify-center rounded-md bg-red-600 px-4 text-sm font-semibold text-white transition-colors hover:bg-red-700"
            >
              Delete
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
