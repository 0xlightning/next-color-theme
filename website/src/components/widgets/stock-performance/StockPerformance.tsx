import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { IconTrendingUp, IconTrendingDown } from "@tabler/icons-react";
import mockData from "./mockData";

export default function StockPerformance() {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">Stock Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {mockData.map((stock) => (
            <div key={stock.symbol} className="flex items-center justify-between p-2 rounded-lg bg-zinc-50 dark:bg-zinc-900 border text-xs">
              <div>
                <div className="font-bold">{stock.symbol}</div>
                <div className="text-zinc-500 text-[11px]">{stock.name}</div>
              </div>
              <div className="text-right">
                <div className="font-semibold">${stock.price.toFixed(2)}</div>
                <div className={`flex items-center justify-end gap-0.5 text-[11px] ${stock.isPositive ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                  {stock.isPositive ? <IconTrendingUp className="h-3 w-3" /> : <IconTrendingDown className="h-3 w-3" />}
                  <span>{stock.change}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
