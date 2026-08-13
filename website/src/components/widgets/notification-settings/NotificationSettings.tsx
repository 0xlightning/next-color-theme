"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { mockData, type NotificationSettingsData } from "./mockData"

export default function NotificationSettings({
  data = mockData,
}: {
  data?: NotificationSettingsData
}) {
  const [checked, setChecked] = React.useState<Record<string, boolean>>(
    Object.fromEntries(data.items.map((n) => [n.id, n.defaultChecked]))
  )
  const allChecked = data.items.every((n) => checked[n.id])
  const someChecked = data.items.some((n) => checked[n.id]) && !allChecked

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Choose what you want to be notified about.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Checkbox
              id="notify-all"
              checked={allChecked}
              indeterminate={someChecked}
              onCheckedChange={(v) =>
                setChecked(
                  Object.fromEntries(data.items.map((n) => [n.id, !!v]))
                )
              }
            />
            <label htmlFor="notify-all" className="text-sm font-medium">
              Select all
            </label>
          </div>
          {data.items.map((n) => (
            <div key={n.id} className="flex items-start gap-3">
              <Checkbox
                id={`notify-${n.id}`}
                checked={checked[n.id]}
                onCheckedChange={(v) =>
                  setChecked((prev) => ({ ...prev, [n.id]: !!v }))
                }
                className="mt-0.5"
              />
              <label
                htmlFor={`notify-${n.id}`}
                className="flex flex-1 flex-col gap-0.5"
              >
                <span className="text-sm font-medium">{n.label}</span>
                <span className="text-muted-foreground text-xs">
                  {n.description}
                </span>
              </label>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Save Preferences</Button>
      </CardFooter>
    </Card>
  )
}
