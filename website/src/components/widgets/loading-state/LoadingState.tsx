import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const defaultData = { message: "Loading your data..." };

export default function LoadingState({ data = defaultData }: { data?: any }) {
  return (
    <Card className="w-full max-w-md mx-auto my-4">
      <CardHeader>
        <CardTitle>Loading State</CardTitle>
      </CardHeader>
      <CardContent>
        <pre className="bg-muted p-2 rounded">{JSON.stringify(data, null, 2)}</pre>
      </CardContent>
    </Card>
  );
}
