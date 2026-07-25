"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MiniBarChart } from "@/components/charts/MiniBarChart";
import mockData from "./mockData";

export default function DividendIncome() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Dividend Income</CardTitle>
        <CardDescription>Quarterly dividend payment from your portfolio holdings.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockData.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <div className="flex-1">
              <div className="font-medium">{item.name}</div>
              <div className="text-sm text-muted-foreground">{item.shares} Shares</div>
            </div>
            <div className="w-24 h-12"><MiniBarChart data={item.history} /></div>
            <div className="font-semibold text-lg">${item.latestAmount.toLocaleString()}</div>
          </div>
        ))}
        <Separator />
      </CardContent>
    </Card>
  );
}
