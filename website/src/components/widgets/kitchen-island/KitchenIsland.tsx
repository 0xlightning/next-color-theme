"use client"

import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"
import { mockData, type KitchenIslandData } from "./mockData"

export default function KitchenIsland({
  data = mockData,
}: {
  data?: KitchenIslandData
}) {
  const [enabled, setEnabled] = React.useState(data.enabled)
  const [brightness, setBrightness] = React.useState(data.brightness)
  const [colorTemp, setColorTemp] = React.useState(data.colorTemp)
  const [volume, setVolume] = React.useState(data.volume)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Kitchen Island</CardTitle>
        <CardDescription>Hue Color Ambient</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="bg-muted flex h-32 flex-col items-center justify-center rounded-lg border text-sm">
          {enabled ? "Hue ambient on" : "Off"}
        </div>
        <div className="flex flex-col gap-3">
          <SliderRow
            label="Brightness"
            tabler="IconSun"
            value={brightness}
            onChange={setBrightness}
            disabled={!enabled}
          />
          <SliderRow
            label="Color Temp"
            tabler="IconThermometer"
            value={colorTemp}
            onChange={setColorTemp}
            disabled={!enabled}
          />
          <SliderRow
            label="Volume"
            tabler="IconVolume"
            value={volume}
            onChange={setVolume}
            disabled={!enabled}
          />
        </div>
        <button
          type="button"
          onClick={() => setEnabled((v) => !v)}
          className="border-input bg-muted/40 hover:bg-muted rounded-md border px-3 py-1.5 text-xs font-medium"
        >
          {enabled ? "Turn off" : "Turn on"}
        </button>
      </CardContent>
    </Card>
  )
}

function SliderRow({
  label,
  tabler,
  value,
  onChange,
  disabled,
}: {
  label: string
  tabler: string
  value: number
  onChange: (n: number) => void
  disabled?: boolean
}) {
  return (
    <div className="flex items-center gap-3">
      <IconPlaceholder tabler={tabler} className="text-muted-foreground size-4 shrink-0" />
      <span className="w-20 text-sm">{label}</span>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(Number(e.target.value))}
        className="flex-1 disabled:opacity-50"
      />
      <span className="w-10 text-right text-xs tabular-nums">{value}</span>
    </div>
  )
}
