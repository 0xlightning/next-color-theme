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
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import mockData from "./mockData";

export default function PaymentThreshold() {
  const [currency, setCurrency] = useState(mockData.currency);
  const [amount, setAmount] = useState(mockData.minAmount);
  const [note, setNote] = useState(mockData.note ?? "");
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsSaving(false);
    // TODO: integrate API call
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Payout Threshold</CardTitle>
        <CardDescription>Set the minimum balance required before a payout is triggered.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="currency">Currency</Label>
          <Select value={currency} onValueChange={(v) => setCurrency(v ?? "USD")}>
            <SelectTrigger id="currency">
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="USD">USD — United States Dollar</SelectItem>
              <SelectItem value="EUR">EUR — Euro</SelectItem>
              <SelectItem value="GBP">GBP — British Pound</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1">
          <Label htmlFor="amount">Minimum Payout Amount</Label>
          <div className="flex items-center space-x-2">
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-32"
            />
            <Slider
              min={mockData.minAmount}
              max={mockData.maxAmount}
              step={10}
              value={[amount]}
              onValueChange={(val) => setAmount(Array.isArray(val) ? val[0] : (typeof val === 'number' ? val : amount))}
              className="flex-1"
            />
          </div>
          <div className="flex justify-between text-sm text-muted-foreground mt-1">
            <span>${mockData.minAmount.toLocaleString()}</span>
            <span>${mockData.maxAmount.toLocaleString()} (MAX)</span>
          </div>
        </div>
        <div className="space-y-1">
          <Label htmlFor="note">Note (optional)</Label>
          <Textarea
            id="note"
            placeholder="Add a memo…"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSave} disabled={isSaving} className="w-full">
          {isSaving ? "Saving…" : "Save Threshold"}
        </Button>
      </CardFooter>
    </Card>
  );
}
