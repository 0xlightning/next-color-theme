"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"
import { mockData, type ReleaseCatalogData } from "./mockData"

export default function ReleaseCatalog({
  data = mockData,
}: {
  data?: ReleaseCatalogData
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <InputGroup className="max-w-sm">
            <InputGroupAddon>
              <IconPlaceholder tabler="IconSearch" />
            </InputGroupAddon>
            <InputGroupInput placeholder="Search holdings or tickers..." />
          </InputGroup>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {data.holdings.map((h) => (
            <div
              key={h.ticker}
              className="bg-muted/40 flex items-center justify-between gap-3 rounded-md border p-3"
            >
              <div className="border-input bg-background flex size-12 items-center justify-center rounded-lg border text-sm font-semibold">
                {h.ticker}
              </div>
              <div className="flex flex-1 flex-col">
                <span className="font-medium">{h.name}</span>
                <span className="text-muted-foreground text-xs tracking-wider uppercase">
                  {h.shares} Shares · {h.added}
                </span>
              </div>
              <div className="flex shrink-0 items-center gap-6">
                <Badge variant="outline">{h.type}</Badge>
                <div className="flex flex-col items-end gap-0.5">
                  <span className="text-muted-foreground text-xs tracking-wider uppercase">
                    Value
                  </span>
                  <span className="font-medium tabular-nums">{h.value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
