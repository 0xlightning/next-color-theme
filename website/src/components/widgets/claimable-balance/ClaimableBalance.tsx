"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import mockData from "./mockData";

export default function ClaimableBalance() {
  const { netRoyalties, processingFee, totalReadyToClaim, currency, payoutRuleText } = mockData;

  return (
    <Card className="w-full p-4">
      <CardHeader>
        <CardTitle>Claimable Balance</CardTitle>
        <CardDescription>Pending Royalty</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="text-4xl font-bold">{currency} {totalReadyToClaim.toLocaleString()}</div>
        <Separator />
        <div className="flex justify-between text-sm">
          <span>Net Royalties</span>
          <span>{currency} {netRoyalties.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Processing Fee</span>
          <span className="text-red-500">{currency} {processingFee.toLocaleString()}</span>
        </div>
        <Separator />
        <Tooltip>
          <TooltipTrigger>
            <div className="text-xs text-muted-foreground underline cursor-help">
              {payoutRuleText}
            </div>
          </TooltipTrigger>
          <TooltipContent side="bottom">Click for more info</TooltipContent>
        </Tooltip>
      </CardContent>
    </Card>
  );
}
