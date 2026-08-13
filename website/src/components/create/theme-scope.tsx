"use client"

import * as React from "react"
import { useDesignSystem } from "./use-design-system"
import {
  getBaseColor,
  getAccent,
  resolveRadiusValue,
  getStyle,
  getFont,
  getChartPalette,
} from "@/registry"

const STYLE_ELEMENT_ID = "create-theme-vars"

function buildCss(config: ReturnType<typeof useDesignSystem>["state"]): string {
  const base = getBaseColor(config.baseColor)
  const accent = getAccent(config.accent)
  const radius = resolveRadiusValue(config.radius)
  const style = getStyle(config.style)
  const font = getFont(config.font)
  const chartPalette = getChartPalette(config.chartColor)
  if (!base || !accent) {
    return ""
  }

  // Five chart swatches per palette, indexed 0..4 → --chart-1..5.
  const chartVars = chartPalette
    ? chartPalette.swatches.map((value, idx) => `    --chart-${idx + 1}: ${value};`)
    : []

  const lightEntries = Object.entries({
    ...base.light,
    primary: accent.primary,
    "primary-foreground": accent.primaryForeground,
    accent: accent.primary,
    "accent-foreground": accent.primaryForeground,
    radius,
  })
    .filter(([, value]) => Boolean(value))
    .map(([k, v]) => `    --${k}: ${v};`)

  const darkEntries = Object.entries({
    ...base.dark,
    primary: accent.primary,
    "primary-foreground": accent.primaryForeground,
    accent: accent.primary,
    "accent-foreground": accent.primaryForeground,
  })
    .filter(([, value]) => Boolean(value))
    .map(([k, v]) => `    --${k}: ${v};`)

  const fontFamily = font?.family ?? "var(--font-geist-sans), sans-serif"
  const headingFamily =
    style?.headingFontFamily ?? "var(--font-heading), inherit"

  return [
    ".theme-scope {",
    "  color-scheme: light;",
    ...lightEntries,
    ...chartVars,
    `  --font-sans: ${fontFamily};`,
    `  --font-heading: ${headingFamily};`,
    "  --radius: " + radius + ";",
    "}",
    ".theme-scope.dark {",
    "  color-scheme: dark;",
    ...darkEntries,
    ...chartVars,
    "}",
  ].join("\n")
}

type ScopeProps = {
  children: React.ReactNode
}

export function ThemeScope({ children }: ScopeProps) {
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

  const className =
    "theme-scope" + (state.mode === "dark" ? " dark" : "")

  return <div className={className}>{children}</div>
}