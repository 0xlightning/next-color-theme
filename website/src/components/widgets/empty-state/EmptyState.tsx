import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const defaultData = { message: "No data available yet." };

export default function EmptyState({ data = defaultData }: { data?: any }) {
  return (
    <Card className="w-full max-w-md mx-auto my-4">
      <CardHeader>
        <CardTitle>Empty State</CardTitle>
      </CardHeader>
      <CardContent>
        <pre className="bg-muted p-2 rounded">{JSON.stringify(data, null, 2)}</pre>
      </CardContent>
    </Card>
  );
}
