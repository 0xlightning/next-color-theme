// @ts-nocheck
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars, react-hooks/set-state-in-effect, @typescript-eslint/no-empty-object-type */
"use client"

import * as React from "react"
import { useDesignSystem } from "./use-design-system"
import type { Mode } from "@/registry/types"
import { cn } from "@/lib/utils"

const MODES: { value: Mode; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
]

export function ModeSwitcher() {
  const { state, set } = useDesignSystem()
  return (
    <div className="inline-flex rounded-md border border-border bg-card p-0.5">
      {MODES.map((mode) => {
        const isActive = state.mode === mode.value
        return (
          <button
            key={mode.value}
            type="button"
            onClick={() => set({ mode: mode.value })}
            aria-pressed={isActive}
            className={cn(
              "rounded px-3 py-1 text-xs font-medium transition-colors",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {mode.label}
          </button>
        )
      })}
    </div>
  )
}