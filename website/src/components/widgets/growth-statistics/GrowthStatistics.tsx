import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const defaultData = {
  revenue: { value: "$48,200", change: "+12.5%" },
  users: { value: "3,420", change: "+8.1%" },
  orders: { value: "1,210", change: "+5.3%" },
};

export default function GrowthStatistics({ data = defaultData }: { data?: any }) {
  return (
    <Card className="w-full max-w-md mx-auto my-4">
      <CardHeader>
        <CardTitle>Growth Statistics</CardTitle>
        <CardDescription>Overview of growth metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <pre className="bg-muted p-2 rounded">{JSON.stringify(data, null, 2)}</pre>
      </CardContent>
    </Card>
  );
}

