"use client"

import * as React from "react"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"
import { useDesignSystem } from "./use-design-system"
import { ICON_LIBRARIES, type IconLibraryValue } from "@/registry"
import { SettingCard } from "./setting-card"

export function IconLibraryPicker() {
  const { state, set } = useDesignSystem()
  const current = ICON_LIBRARIES.find(
    (library) => library.value === state.iconLibrary
  )
  return (
    <SettingCard
      label="Icon Library"
      value={state.iconLibrary}
      valueLabel={current?.label ?? "—"}
      indicator={
        <span className="text-[#f2f2f2] [&_svg]:size-3.5 [&_svg]:text-[#f2f2f2]">
          <IconPlaceholder
            lucide="Sparkles"
            tabler="IconSparkles"
            hugeicons="MagicStickIcon"
            phosphor="SparkleIcon"
            remixicon="RiSparklingLine"
          />
        </span>
      }
      options={ICON_LIBRARIES.map((library) => ({
        value: library.value,
        label: library.label,
      }))}
      onChange={(value) => set({ iconLibrary: value as IconLibraryValue })}
    />
  )
}