"use client"

import * as React from "react"
import { toast } from "sonner"
import { useDesignSystem } from "./use-design-system"
import { buildPayload, formatClipboardText } from "./build-payload"
import type { DesignSystemConfig } from "@/registry/types"

/**
 * Wires keyboard shortcuts to the design-system store.
 * r = randomize, c = copy, Escape/0 = reset. No undo tree in v1.
 * Mounted once inside the customizer.
 */
export function KeyboardShortcuts() {
  const { randomize, reset, state } = useDesignSystem()
  const stateRef = React.useRef<DesignSystemConfig>(state)

  React.useEffect(() => {
    stateRef.current = state
  }, [state])

  React.useEffect(() => {
    function isTypingTarget(target: EventTarget | null) {
      if (!(target instanceof HTMLElement)) {
        return false
      }
      if (target.isContentEditable) {
        return true
      }
      const tag = target.tagName
      return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT"
    }

    function onKey(event: KeyboardEvent) {
      if (event.metaKey || event.ctrlKey) {
        return
      }
      if (isTypingTarget(event.target)) {
        return
      }
      const key = event.key.toLowerCase()
      if (key === "r") {
        event.preventDefault()
        randomize()
      } else if (key === "c") {
        event.preventDefault()
        const text = formatClipboardText(buildPayload(stateRef.current))
        navigator.clipboard
          .writeText(text)
          .then(() => toast.success("Copied to clipboard"))
          .catch(() => toast.error("Could not copy"))
      } else if (key === "escape" || key === "0") {
        event.preventDefault()
        reset()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [randomize, reset])

  return null
}
