"use client"

import * as React from "react"
import { useDesignSystem } from "./use-design-system"
import { CHART_COLORS, getTheme, type ThemeName } from "@/registry"
import { SettingCard, SwatchDot } from "./setting-card"

export function ChartColorPicker() {
  const { state, set } = useDesignSystem()
  const current = getTheme(state.chartColor)
  return (
    <SettingCard
      label="Chart Color"
      field="chartColor"
      value={state.chartColor}
      valueLabel={current?.label ?? "—"}
      indicator={<SwatchDot color={current?.swatch ?? "#9ca3af"} />}
      options={CHART_COLORS.map((theme) => ({
        value: theme.name,
        label: theme.label,
      }))}
      onChange={(value) => set({ chartColor: value as ThemeName })}
    />
  )
}