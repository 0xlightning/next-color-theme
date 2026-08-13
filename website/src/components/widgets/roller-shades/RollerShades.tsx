"use client"

import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { mockData, type RollerShadesData } from "./mockData"

export default function RollerShades({
  data = mockData,
}: {
  data?: RollerShadesData
}) {
  const [position, setPosition] = React.useState(data.position)
  return (
    <Card>
      <CardHeader>
        <CardTitle>Living Room</CardTitle>
        <CardDescription>Roller Shades</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="bg-muted flex h-32 flex-col-reverse overflow-hidden rounded-lg border">
          <div
            className="bg-foreground/80 transition-all duration-300"
            style={{ height: `${position}%` }}
          />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
            Open
          </span>
          <input
            type="range"
            min={0}
            max={100}
            value={position}
            onChange={(e) => setPosition(Number(e.target.value))}
            className="flex-1"
          />
          <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
            Close
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full gap-2">
          {(["Open", "Half", "Closed"] as const).map((label) => (
            <button
              key={label}
              type="button"
              onClick={() =>
                setPosition(label === "Open" ? 0 : label === "Half" ? 50 : 100)
              }
              className="border-input bg-muted/40 hover:bg-muted flex-1 rounded-md border px-2 py-1 text-xs font-medium"
            >
              {label}
            </button>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}
