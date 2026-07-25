import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const defaultData = {
  title: "Your notifications",
  notifications: [
    { type: "info", message: "Portfolio rebalanced successfully" },
    { type: "warning", message: "Payment due in 3 days" },
    { type: "error", message: "Failed to sync account" },
  ],
};

export default function Notifications({ data = defaultData }: { data?: any }) {
  return (
    <Card className="w-full max-w-md mx-auto my-4">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>{data.title ?? "Your notifications"}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {data.notifications?.map((n: any, i: number) => (
            <li key={i} className="flex items-center space-x-2">
              <Badge variant={n.type === "error" ? "destructive" : "secondary"}>{n.type}</Badge>
              <span>{n.message}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
