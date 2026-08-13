"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"
import { mockData, type Transaction } from "./mockData"

export default function RecentTransactions({
  data = mockData,
}: {
  data?: Transaction[]
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Your latest account activity.</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Table>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="w-10">
                  <div className="bg-muted flex size-10 items-center justify-center rounded-lg">
                    <IconPlaceholder
                      tabler={row.tabler}
                      className="size-4 shrink-0"
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-medium">{row.merchant}</span>
                    <span className="text-muted-foreground text-sm">
                      {row.category}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {row.date}
                </TableCell>
                <TableCell className="text-right">
                  <span
                    className={
                      row.positive
                        ? "text-sm font-semibold text-emerald-500 tabular-nums"
                        : "text-sm font-semibold tabular-nums"
                    }
                  >
                    {row.amount}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
