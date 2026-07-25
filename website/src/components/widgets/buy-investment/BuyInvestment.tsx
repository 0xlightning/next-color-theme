"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import mockData from "./mockData";

export default function BuyInvestment() {
  const [amount, setAmount] = useState(mockData.amountToInvest);
  const [orderType, setOrderType] = useState(mockData.orderType);

  const handleReview = () => {
    console.log("Review order", { amount, orderType });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Buy Investment</CardTitle>
        <CardDescription>Amount to Invest</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1">
          <label className="block text-sm font-medium" htmlFor="amount">
            Amount
          </label>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <div className="space-y-1">
          <label className="block text-sm font-medium" htmlFor="order-type">
            Order Type
          </label>
          <Select value={orderType} onValueChange={(v) => setOrderType(v ?? "market")}>
            <SelectTrigger id="order-type">
              <SelectValue placeholder="Select order type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="market">Market Order</SelectItem>
              <SelectItem value="limit">Limit Order</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="text-sm text-muted-foreground">
          Estimated shares: {mockData.estimatedShares}<br />
          Buying power: ${mockData.buyingPower.toLocaleString()}
        </div>
        <div className="text-xs text-muted-foreground">
          Market orders are executed at the current price.
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleReview} className="w-full">Review Order</Button>
      </CardFooter>
    </Card>
  );
}
