"use client"

import * as React from "react"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"
import { useDesignSystem } from "./use-design-system"
import { getMenuColor, MENU_COLORS, type MenuColorValue } from "@/registry"
import { SettingCard } from "./setting-card"

export function MenuColorPicker() {
  const { state, set } = useDesignSystem()
  const current = getMenuColor(state.menuColor)
  return (
    <SettingCard
      label="Menu"
      field="menuColor"
      value={state.menuColor}
      valueLabel={current?.label ?? "—"}
      indicator={
        <span className="text-[#f2f2f2] [&_svg]:size-3.5 [&_svg]:text-[#f2f2f2]">
          <IconPlaceholder
            lucide="AlignLeft"
            tabler="IconAlignLeft"
            hugeicons="AlignLeftIcon"
            phosphor="AlignLeftIcon"
            remixicon="RiAlignLeftLine"
          />
        </span>
      }
      options={MENU_COLORS.map((menu) => ({
        value: menu.value,
        label: menu.label,
      }))}
      onChange={(value) => set({ menuColor: value as MenuColorValue })}
    />
  )
}