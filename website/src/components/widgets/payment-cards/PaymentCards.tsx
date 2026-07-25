import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import mockData from "./mockData";

export default function PaymentCards() {
  const { balance, currency, dueDate, availableCredit, isOverdue } = mockData;
  const formattedBalance = `${currency} ${balance.toLocaleString()}`;
  const formattedDue = new Date(dueDate).toLocaleDateString(undefined, { month: "short", day: "numeric" });
  const balanceClass = isOverdue ? "text-destructive" : "text-foreground";

  return (
    <Card className="w-full p-4">
      <CardHeader>
        <CardTitle>Card Balance</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className={`text-2xl font-bold ${balanceClass}`}>{formattedBalance}</div>
        <div className="text-sm text-muted-foreground">Due: {formattedDue}</div>
        {availableCredit !== undefined && (
          <div className="text-sm text-muted-foreground">Available Credit: {currency} {availableCredit.toLocaleString()}</div>
        )}
        <Button className="w-full mt-2">Pay Card</Button>
      </CardContent>
      <CardFooter />
    </Card>
  );
}
