// @ts-nocheck
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars, react-hooks/set-state-in-effect, @typescript-eslint/no-empty-object-type */
"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

export function ChartIframe({
  src,
  height,
  title,
}: {
  src: string
  height: number
  title: string
}) {
  const [loaded, setLoaded] = React.useState(false)

  return (
    <iframe
      src={src}
      className={cn(
        "w-full border-none transition-opacity duration-300",
        loaded ? "opacity-100" : "opacity-0"
      )}
      height={height}
      loading="lazy"
      title={title}
      onLoad={() => setLoaded(true)}
    />
  )
}
