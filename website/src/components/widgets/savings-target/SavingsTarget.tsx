"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ProgressRing } from "@/components/charts/ProgressRing";
import { Button } from "@/components/ui/button";
import mockData from "./mockData";

export default function SavingsTarget() {
  const {
    goalName,
    currentAmount,
    targetAmount,
    projectedFinishDate,
    monthlyAverage,
    topContributor,
  } = mockData;

  const percent = Math.min(100, Math.round((currentAmount / targetAmount) * 100));

  return (
    <Card className="w-full p-4">
      <CardHeader>
        <CardTitle>Savings Target</CardTitle>
        <CardDescription>{goalName}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">${currentAmount.toLocaleString()}</div>
          <ProgressRing value={percent} size={80} strokeWidth={8} />
        </div>
        <div className="text-sm text-muted-foreground">
          Goal: ${targetAmount.toLocaleString()} • {percent}% reached
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>Projected finish: {projectedFinishDate}</div>
          <div>Monthly avg: ${monthlyAverage.toLocaleString()}</div>
          <div className="col-span-2">Top contributor: {topContributor}</div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Update Goal</Button>
      </CardFooter>
    </Card>
  );
}
