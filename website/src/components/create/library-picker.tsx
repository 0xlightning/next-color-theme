"use client"

import { IconPlaceholder } from "@/components/ui/icon-placeholder"
import { LIBRARIES, getLibrary, type LibraryValue } from "@/registry"
import { SettingCard } from "./setting-card"
import { useDesignSystem } from "./use-design-system"

/**
 * Which primitive library the *exported* code targets. The preview always
 * renders `@base-ui/react`; this only changes what `build-payload.ts` emits
 * into components.json and the install command.
 */
export function LibraryPicker() {
  const { state, set } = useDesignSystem()
  const current = getLibrary(state.library)
  return (
    <SettingCard
      label="Library"
      field="library"
      value={state.library}
      valueLabel={current?.label ?? "—"}
      indicator={
        <span className="text-[#f2f2f2] [&_svg]:size-3.5 [&_svg]:text-[#f2f2f2]">
          <IconPlaceholder
            lucide="Package"
            tabler="IconPackage"
            hugeicons="PackageIcon"
            phosphor="PackageIcon"
            remixicon="RiBox3Line"
          />
        </span>
      }
      options={LIBRARIES.map((library) => ({
        value: library.value,
        label: library.label,
        description: library.description,
      }))}
      onChange={(value) => set({ library: value as LibraryValue })}
    />
  )
}
