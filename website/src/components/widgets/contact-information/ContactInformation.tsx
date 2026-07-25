import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const defaultData = { name: "Praveen Kumar", email: "praveen@example.com", phone: "+1 (555) 123-4567" };

export default function ContactInformation({ data = defaultData }: { data?: Record<string, unknown> }) {
  return (
    <Card className="w-full max-w-md mx-auto my-4">
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
        <CardDescription>Display user&apos;s contact details</CardDescription>
      </CardHeader>
      <CardContent>
        <pre className="bg-muted p-2 rounded">{JSON.stringify(data, null, 2)}</pre>
      </CardContent>
    </Card>
  );
}
