import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const defaultData = { title: "Recent payment activities", entries: [] };

export default function PaymentLog({ data = defaultData }: { data?: any }) {
  return (
    <Card className="w-full max-w-2xl mx-auto my-4">
      <CardHeader>
        <CardTitle>Payment Log</CardTitle>
        <CardDescription>{data.title ?? "Recent payment activities"}</CardDescription>
      </CardHeader>
      <CardContent>
        <pre className="bg-muted p-2 rounded">{JSON.stringify(data, null, 2)}</pre>
      </CardContent>
    </Card>
  );
}
