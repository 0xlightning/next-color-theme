"use client";
import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ProgressRing } from "@/components/charts/ProgressRing";
import { Badge } from "@/components/ui/badge";
import mockData from "./mockData";

export default function InvestmentPortfolio() {
  const {
    currentValue,
    goalValue,
    percentToGoal,
    projectedFinishDate,
    monthlyAverage,
    topContributor,
  } = mockData;

  return (
    <Card className="w-full p-4">
      <CardHeader className="flex flex-col items-center">
        <ProgressRing value={percentToGoal} size={120} strokeWidth={12} />
        <div className="text-3xl font-bold mt-2">${currentValue.toLocaleString()}</div>
        <Badge variant="secondary" className="mt-1">{percentToGoal}% of goal</Badge>
      </CardHeader>
      <CardContent className="space-y-2 text-center">
        <div>Goal: ${goalValue.toLocaleString()}</div>
        <div>Projected finish: {projectedFinishDate}</div>
        <div>Monthly average: ${monthlyAverage.toLocaleString()}</div>
        <div>Top contributor: {topContributor}</div>
      </CardContent>
    </Card>
  );
}
