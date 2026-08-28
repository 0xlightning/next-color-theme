"use client"

import * as React from "react"
import { toast } from "sonner"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ActionButton } from "./setting-card"
import { useDesignSystem } from "./use-design-system"
import { suggestName, useSavedDesigns } from "./use-saved-designs"

/**
 * Names and stores the current config under `/creates`. Only the config is
 * saved — locks and the component selection are editor state, not part of a
 * design.
 */
export function SaveDesignDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const { state } = useDesignSystem()
  const { save } = useSavedDesigns()

  // `null` means "untouched" — the field then shows a suggestion derived from
  // the live config. Storing the suggestion in state instead would need an
  // effect to re-seed it, and would fight the user once they start typing.
  const [draft, setDraft] = React.useState<string | null>(null)
  const fallback = suggestName(state)
  const name = draft ?? fallback

  const close = () => {
    setDraft(null)
    onOpenChange(false)
  }

  const commit = () => {
    const design = save(name, state)
    toast.success(`Saved “${design.name}”`)
    close()
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) {
          setDraft(null)
        }
        onOpenChange(next)
      }}
    >
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Save Design</DialogTitle>
          <DialogDescription>
            Stores the current settings in this browser. Find it again under
            Saved Designs.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 py-2">
          <Label htmlFor="design-name">Name</Label>
          <Input
            id="design-name"
            value={name}
            autoFocus
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault()
                commit()
              }
            }}
            placeholder={fallback}
          />
        </div>
        <DialogFooter>
          <ActionButton onClick={close}>Cancel</ActionButton>
          <ActionButton variant="primary" onClick={commit}>
            Save
          </ActionButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
