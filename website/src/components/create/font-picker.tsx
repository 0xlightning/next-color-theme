"use client"

import * as React from "react"
import { useDesignSystem } from "./use-design-system"
import {
  type FontOption,
  type FontValue,
  FONTS,
  FONT_HEADING_OPTIONS,
  getFont,
} from "@/registry"
import { AaGlyph, SettingCard } from "./setting-card"

type Props = {
  /** Which field to drive — body font or heading font. */
  param: "font" | "fontHeading"
}

export function FontPicker({ param }: Props) {
  const { state, set } = useDesignSystem()
  const currentValue = param === "font" ? state.font : state.fontHeading
  const inheritBodyFont = param === "fontHeading" && currentValue === "inherit"
  const fontOptions: readonly FontOption[] =
    param === "fontHeading" ? FONT_HEADING_OPTIONS : FONTS
  const current: FontOption | undefined = inheritBodyFont
    ? getFont(state.font) ?? fontOptions[0]
    : (fontOptions.find((font) => font.value === currentValue) ?? fontOptions[0])

  // Group fonts by type for the popover, mirroring shadcn's picker layout.
  const groups = React.useMemo(() => {
    const byType = new Map<string, FontOption[]>()
    for (const font of fontOptions) {
      const list = byType.get(font.type) ?? []
      list.push(font)
      byType.set(font.type, list)
    }
    return Array.from(byType.entries()).map(([type, items]) => ({
      label: type.charAt(0).toUpperCase() + type.slice(1),
      options: items.map((font) => ({
        value: font.value,
        label: inheritBodyFont && font.value === "inherit"
          ? current?.label ?? font.label
          : font.label,
      })),
    }))
  }, [fontOptions, inheritBodyFont, current])

  return (
    <SettingCard
      label={param === "fontHeading" ? "Heading" : "Font"}
      value={String(currentValue)}
      valueLabel={current?.label ?? "—"}
      indicator={<AaGlyph fontFamily={current?.family ?? "inherit"} />}
      options={fontOptions.map((font) => ({
        value: font.value,
        label: font.label,
      }))}
      groups={groups}
      onChange={(value) => {
        if (param === "font") {
          set({ font: value as FontValue })
        } else {
          set({ fontHeading: value as FontValue | "inherit" })
        }
      }}
    />
  )
}