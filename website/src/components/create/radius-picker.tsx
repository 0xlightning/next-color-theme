"use client"

import * as React from "react"
import { useDesignSystem } from "./use-design-system"
import { getRadius, RADII, type RadiusName } from "@/registry"
import { SettingCard } from "./setting-card"

/** Small rounded-corner preview SVG, lifted from the v4 RadiusPicker. */
function RadiusGlyph({ value }: { value: string }) {
  return (
    <svg
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      className="text-[#f2f2f2]"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 20v-5C4 8.925 8.925 4 15 4h5"
      />
    </svg>
  )
}

export function RadiusPicker() {
  const { state, set } = useDesignSystem()
  const current = getRadius(state.radius)
  return (
    <SettingCard
      label="Radius"
      value={state.radius}
      valueLabel={current?.label ?? "—"}
      indicator={<RadiusGlyph value={current?.value ?? "0"} />}
      options={RADII.map((radius) => ({
        value: radius.name,
        label: radius.label,
      }))}
      onChange={(value) => set({ radius: value as RadiusName })}
    />
  )
}