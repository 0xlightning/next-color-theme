"use client"

import * as React from "react"
import type { DesignSystemConfig } from "@/registry/types"
import { buildThemeVars } from "./build-payload"
import { IconLibraryProvider } from "./icon-library-context"

type ScopeProps = {
  config: DesignSystemConfig
  mode?: "light" | "dark"
  className?: string
  children: React.ReactNode
}

export function StaticThemeScope({
  config,
  mode = "light",
  className,
  children,
}: ScopeProps) {
  const vars = React.useMemo(() => buildThemeVars(config), [config])
  const style = Object.fromEntries(
    Object.entries({
      ...(mode === "dark" ? vars.dark : vars.light),
      ...vars.shared,
    })
      .filter(([, value]) => Boolean(value))
      .map(([key, value]) => [`--${key}`, value])
  ) as React.CSSProperties

  return (
    <div
      className={[mode === "dark" ? "dark" : "", className ?? ""]
        .filter(Boolean)
        .join(" ")}
      style={{ ...style, colorScheme: mode }}
    >
      <IconLibraryProvider iconLibrary={config.iconLibrary ?? "tabler"}>
        {children}
      </IconLibraryProvider>
    </div>
  )
}
