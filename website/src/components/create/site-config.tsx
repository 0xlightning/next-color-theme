// @ts-nocheck
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars, react-hooks/set-state-in-effect, @typescript-eslint/no-empty-object-type */
"use client"

import * as React from "react"
import { GalleryHorizontalIcon } from "lucide-react"

import { trackEvent } from "@/lib/events"
import { cn } from "@/lib/utils"
import { useLayout } from "@/hooks/use-layout"
import { Button } from "@/registry/new-york-v4/ui/button"

export function SiteConfig({ className }: React.ComponentProps<typeof Button>) {
  const { layout, setLayout } = useLayout()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        const newLayout = layout === "fixed" ? "full" : "fixed"
        setLayout(newLayout)
        trackEvent({
          name: "set_layout",
          properties: { layout: newLayout },
        })
      }}
      className={cn("size-8", className)}
      title="Toggle layout"
    >
      <span className="sr-only">Toggle layout</span>
      <GalleryHorizontalIcon />
    </Button>
  )
}
