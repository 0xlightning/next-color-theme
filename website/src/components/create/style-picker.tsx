"use client"

import * as React from "react"
import { useDesignSystem } from "./use-design-system"
import { STYLES } from "@/registry"
import { CircleOutline, SettingCard } from "./setting-card"

export function StylePicker() {
  const { state, set } = useDesignSystem()
  const current = STYLES.find((style) => style.name === state.style)
  return (
    <SettingCard
      label="Style"
      value={state.style}
      valueLabel={current?.label ?? "—"}
      indicator={<CircleOutline />}
      options={STYLES.map((style) => ({
        value: style.name,
        label: style.label,
      }))}
      onChange={(value) => set({ style: value })}
    />
  )
}