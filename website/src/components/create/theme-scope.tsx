"use client"

import * as React from "react"
import type { DesignSystemConfig } from "@/registry/types"
import { useDesignSystem } from "./use-design-system"
import { buildThemeVars, formatVarBlock } from "./build-payload"

const STYLE_ELEMENT_ID = "create-theme-vars"

/**
 * The preview's CSS lives under `.theme-scope` rather than `:root` so the
 * customizer chrome around it keeps its own colors. Both mode blocks are
 * always emitted — `/create` renders a light scope and a dark scope side by
 * side, so both have to be live at once.
 */
function buildCss(config: DesignSystemConfig): string {
  const vars = buildThemeVars(config)
  if (!vars) {
    return ""
  }
  return [
    ".theme-scope {",
    "  color-scheme: light;",
    formatVarBlock({ ...vars.light, ...vars.shared }, "  "),
    "}",
    ".theme-scope.dark {",
    "  color-scheme: dark;",
    formatVarBlock(vars.dark, "  "),
    "}",
  ].join("\n")
}

type ScopeProps = {
  children: React.ReactNode
  /** Pin the scope to one mode. Omit to follow `state.mode`. */
  mode?: "light" | "dark"
  className?: string
}

export function ThemeScope({ children, mode, className }: ScopeProps) {
  const { state } = useDesignSystem()
  const css = React.useMemo(() => buildCss(state), [state])

  // Inject <style id="create-theme-vars"> synchronously to avoid flash.
  React.useLayoutEffect(() => {
    let element = document.getElementById(
      STYLE_ELEMENT_ID
    ) as HTMLStyleElement | null
    if (!element) {
      element = document.createElement("style")
      element.id = STYLE_ELEMENT_ID
      document.head.appendChild(element)
    }
    element.textContent = css
    return () => {
      // Element is shared across navigation; keep it in place.
    }
  }, [css])

  const resolved = mode ?? state.mode
  return (
    <div
      className={[
        "theme-scope",
        resolved === "dark" ? "dark" : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  )
}

/**
 * Same token emission, but scoped to an arbitrary selector and driven by a
 * config that is *not* the live one. `/creates` uses this to paint each saved
 * design's thumbnail in its own colors.
 */
export function StaticThemeScope({
  config,
  mode = "light",
  className,
  children,
}: {
  config: DesignSystemConfig
  mode?: "light" | "dark"
  className?: string
  children: React.ReactNode
}) {
  const vars = React.useMemo(() => buildThemeVars(config), [config])
  if (!vars) {
    return null
  }
  // Inline styles, not a <style> tag: the token names are runtime data, so
  // they cannot be Tailwind classes, and each card needs its own values.
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
      {children}
    </div>
  )
}
