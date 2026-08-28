"use client"

import * as React from "react"
import { useDesignSystem } from "./use-design-system"
import { BASE_COLORS, getBaseColor } from "@/registry"
import { SettingCard, SwatchDot } from "./setting-card"

export function BaseColorPicker() {
  const { state, set } = useDesignSystem()
  const current = getBaseColor(state.baseColor)
  return (
    <SettingCard
      label="Base Color"
      field="baseColor"
      value={state.baseColor}
      valueLabel={current?.label ?? "—"}
      indicator={<SwatchDot color={current?.swatch ?? "#9ca3af"} />}
      options={BASE_COLORS.map((color) => ({
        value: color.name,
        label: color.label,
      }))}
      onChange={(value) => set({ baseColor: value })}
    />
  )
}