"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { mockData, type UpcomingPayment } from "./mockData"

export default function UpcomingPayments({
  data = mockData,
}: {
  data?: UpcomingPayment[]
}) {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Payments</CardTitle>
        <CardDescription>
          Select a date to view scheduled payments.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="border-border flex items-center justify-center rounded-lg border p-3">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="w-full"
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          {data.map((p) => (
            <div
              key={p.id}
              className="bg-muted/40 flex items-center justify-between rounded-md border p-3"
            >
              <div className="flex flex-col">
                <span className="font-medium">{p.title}</span>
                <span className="text-muted-foreground text-sm">{p.date}</span>
              </div>
              <Badge variant="secondary">{p.amount}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
