"use client"

import { Bar, BarChart, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { mockData, type PowerUsageData } from "./mockData"

const chartConfig = {
  usage: { label: "Usage (kW)", color: "var(--chart-2)" },
} satisfies ChartConfig

export default function PowerUsage({ data = mockData }: { data?: PowerUsageData }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Power Usage</CardTitle>
        <CardDescription>Whole Home</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <ChartContainer config={chartConfig} className="h-[140px] w-full">
          <BarChart
            data={data.byHour}
            margin={{ left: 0, right: 0, top: 4, bottom: 0 }}
          >
            <XAxis dataKey="hour" tickLine={false} tickMargin={6} axisLine={false} className="text-xs" />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey="usage" fill="var(--color-usage)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
        <Separator />
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-0.5">
            <span className="text-muted-foreground text-sm">Currently Using</span>
            <span className="text-lg font-semibold tabular-nums">{data.current} kW</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-muted-foreground text-sm">Solar Gen</span>
            <span className="text-chart-1 text-lg font-semibold tabular-nums">+{data.solar} kW</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-1">
        <span className="text-muted-foreground text-sm">Battery Level</span>
        <div className="flex w-full items-center gap-2">
          <Progress value={data.battery} className="flex-1" />
          <span className="text-sm font-medium tabular-nums">{data.battery}%</span>
        </div>
      </CardFooter>
    </Card>
  )
}
