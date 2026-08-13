"use client"

import * as React from "react"
import { useDesignSystem } from "./use-design-system"
import { cn } from "@/lib/utils"

type Props = {
  variant: "random" | "reset"
}

export function ActionButton({ variant }: Props) {
  const { randomize, reset } = useDesignSystem()
  const onClick = variant === "random" ? randomize : reset
  const label = variant === "random" ? "Random" : "Reset"
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium transition-colors hover:bg-muted"
      )}
    >
      {label}
    </button>
  )
}