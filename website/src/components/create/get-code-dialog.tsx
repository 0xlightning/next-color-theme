"use client"

import * as React from "react"
import { toast } from "sonner"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getLibrary } from "@/registry"
import { cn } from "@/lib/utils"
import { buildPayload } from "./build-payload"
import { CATALOG, PRESENT_COMPONENTS, resolveDependencies } from "./registry-catalog"
import { ActionButton } from "./setting-card"
import { useDesignSystem } from "./use-design-system"

async function copy(text: string, what: string) {
  try {
    await navigator.clipboard.writeText(text)
    toast.success(`Copied ${what}`)
  } catch {
    toast.error("Could not copy — clipboard blocked")
  }
}

/** Scrollable code panel with its own copy button. */
function CodePanel({ code, label }: { code: string; label: string }) {
  return (
    <div className="flex min-h-0 flex-col gap-2">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs text-muted-foreground">{label}</p>
        <ActionButton
          variant="primary"
          className="h-7 w-auto shrink-0 px-3"
          onClick={() => copy(code, label)}
        >
          Copy
        </ActionButton>
      </div>
      <pre className="h-[46vh] overflow-auto rounded-md border border-border bg-muted/40 p-3 text-[11px] leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  )
}

/**
 * "Get Code" export dialog. Four tabs: pick components, then copy the install
 * command, the generated `globals.css`, and `components.json` into another
 * project.
 *
 * No colour classes on DialogContent on purpose — `cn-luma.css` is imported
 * after the utility layer, so `.cn-dialog-content` ties on specificity and
 * wins on source order. A hardcoded background here would be dropped while a
 * hardcoded text colour stuck, giving invisible content.
 */
export function GetCodeDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const { state, components, setComponents } = useDesignSystem()

  const { all, implied } = React.useMemo(
    () => resolveDependencies(components),
    [components]
  )
  const impliedSet = React.useMemo(() => new Set(implied), [implied])
  const selected = React.useMemo(() => new Set(components), [components])

  const payload = React.useMemo(
    () => buildPayload(state, all),
    [state, all]
  )

  const library = getLibrary(state.library)

  const toggle = (name: string) => {
    setComponents(
      selected.has(name)
        ? components.filter((item) => item !== name)
        : [...components, name]
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[88vh] w-[min(92vw,52rem)] max-w-none flex-col gap-4 overflow-hidden sm:max-w-none">
        <DialogHeader>
          <DialogTitle>Get Code</DialogTitle>
          <DialogDescription>
            Targeting <strong>{library?.label ?? state.library}</strong>. Pick
            the components you need, run the install command in your project,
            then paste <code>globals.css</code> over your own.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="components" className="min-h-0 flex-1 gap-3">
          <TabsList>
            <TabsTrigger value="components">
              Components ({all.length})
            </TabsTrigger>
            <TabsTrigger value="install">Install</TabsTrigger>
            <TabsTrigger value="css">globals.css</TabsTrigger>
            <TabsTrigger value="json">components.json</TabsTrigger>
          </TabsList>

          <TabsContent value="components" className="flex min-h-0 flex-col gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <ActionButton
                className="h-7 w-auto px-3"
                onClick={() => setComponents(CATALOG.map((c) => c.name))}
              >
                Select all
              </ActionButton>
              <ActionButton
                className="h-7 w-auto px-3"
                onClick={() => setComponents([])}
              >
                Clear
              </ActionButton>
              <ActionButton
                className="h-7 w-auto px-3"
                onClick={() => setComponents([...PRESENT_COMPONENTS])}
              >
                Reset to current
              </ActionButton>
              <p className="ml-auto text-xs text-muted-foreground">
                {implied.length > 0
                  ? `${implied.length} pulled in as dependencies`
                  : "Dependencies resolve automatically"}
              </p>
            </div>

            <div className="h-[46vh] overflow-y-auto rounded-md border border-border p-3">
              <div className="flex flex-wrap gap-1.5">
                {CATALOG.map((entry) => {
                  const isSelected = selected.has(entry.name)
                  const isImplied = !isSelected && impliedSet.has(entry.name)
                  return (
                    <button
                      key={entry.name}
                      type="button"
                      aria-pressed={isSelected}
                      title={
                        isImplied
                          ? `${entry.name} — required by another selected component`
                          : entry.name
                      }
                      onClick={() => toggle(entry.name)}
                      className={cn(
                        "rounded-full border px-2.5 py-1 text-xs transition-colors",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        isSelected &&
                          "border-primary bg-primary text-primary-foreground",
                        isImplied &&
                          "border-primary/40 bg-primary/15 text-foreground",
                        !isSelected &&
                          !isImplied &&
                          "border-border bg-transparent text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                      )}
                    >
                      {entry.name}
                    </button>
                  )
                })}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="install">
            <CodePanel code={payload.installCommand} label="Install command" />
          </TabsContent>
          <TabsContent value="css">
            <CodePanel code={payload.globalsCss} label="app/globals.css" />
          </TabsContent>
          <TabsContent value="json">
            <CodePanel code={payload.componentsJson} label="components.json" />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
