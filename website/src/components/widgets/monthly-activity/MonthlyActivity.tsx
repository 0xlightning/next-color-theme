import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const defaultData = { label: "Monthly Activity", transactions: 142, volume: "$28,450" };

export default function MonthlyActivity({ data = defaultData }: { data?: any }) {
  return (
    <Card className="w-full max-w-2xl mx-auto my-4">
      <CardHeader>
        <CardTitle>Monthly Activity</CardTitle>
        <CardDescription>{data.label ?? "Monthly Activity"}</CardDescription>
      </CardHeader>
      <CardContent>
        <pre className="bg-muted p-2 rounded">{JSON.stringify(data, null, 2)}</pre>
      </CardContent>
    </Card>
  );
}
