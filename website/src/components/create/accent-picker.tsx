"use client"

import * as React from "react"
import { useDesignSystem } from "./use-design-system"
import { getMenuAccent, MENU_ACCENTS, type MenuAccentValue } from "@/registry"
import { SettingCard } from "./setting-card"

/** Diamond/star accent glyph from v4's MenuAccentPicker. The fill switches
 *  between muted and foreground depending on the active accent value, so the
 *  icon visualizes "bold" vs "subtle". */
function AccentGlyph({ value }: { value: string }) {
  return (
    <svg
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      className="text-[#f2f2f2]"
    >
      <path
        d="M19 12.1294L12.9388 18.207C11.1557 19.9949 10.2641 20.8889 9.16993 20.9877C8.98904 21.0041 8.80705 21.0041 8.62616 20.9877C7.53195 20.8889 6.64039 19.9949 4.85726 18.207L2.83687 16.1811C1.72104 15.0622 1.72104 13.2482 2.83687 12.1294M19 12.1294L10.9184 4.02587M19 12.1294H2.83687M10.9184 4.02587L2.83687 12.1294M10.9184 4.02587L8.89805 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        data-accent={value}
        className="fill-[#5a5a5a]/40 data-[accent=bold]:fill-[#f2f2f2]"
      />
      <path
        d="M22 20C22 21.1046 21.1046 22 20 22C18.8954 22 18 21.1046 18 20C18 18.8954 20 17 20 17C20 17 22 18.8954 22 20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        data-accent={value}
        className="fill-[#5a5a5a]/40 data-[accent=bold]:fill-[#f2f2f2]"
      />
    </svg>
  )
}

export function MenuAccentPicker() {
  const { state, set } = useDesignSystem()
  const current = getMenuAccent(state.menuAccent as string)
  return (
    <SettingCard
      label="Menu Accent"
      field="menuAccent"
      value={state.menuAccent}
      valueLabel={current?.label ?? "—"}
      indicator={<AccentGlyph value={state.menuAccent} />}
      options={MENU_ACCENTS.map((accent) => ({
        value: accent.value,
        label: accent.label,
      }))}
      onChange={(value) => set({ menuAccent: value as MenuAccentValue })}
    />
  )
}