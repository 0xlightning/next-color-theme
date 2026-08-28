"use client"

import * as React from "react"
import { useDesignSystem } from "./use-design-system"
import { getTheme, THEMES, type ThemeName } from "@/registry"
import { SettingCard, SwatchDot } from "./setting-card"

export function ThemePicker() {
  const { state, set } = useDesignSystem()
  const current = getTheme(state.theme)
  return (
    <SettingCard
      label="Theme"
      field="theme"
      value={state.theme}
      valueLabel={current?.label ?? "—"}
      indicator={<SwatchDot color={current?.swatch ?? "#9ca3af"} />}
      options={THEMES.map((theme) => ({
        value: theme.name,
        label: theme.label,
      }))}
      onChange={(value) => set({ theme: value as ThemeName })}
    />
  )
}