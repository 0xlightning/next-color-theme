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
      field="style"
      value={state.style}
      valueLabel={current?.label ?? "—"}
      indicator={<CircleOutline />}
      options={STYLES.map((style) => ({
        value: style.name,
        label: style.label,
      }))}
      onChange={(value) => {
        // A style is a preset: seed its fonts onto the config so the pickers
        // stay the single authority and a later pick always wins.
        const next = STYLES.find((style) => style.name === value)
        set(
          next
            ? { style: value, font: next.font, fontHeading: next.fontHeading ?? "inherit" }
            : { style: value }
        )
      }}
    />
  )
}