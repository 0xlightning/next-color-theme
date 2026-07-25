import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const defaultData = { title: "Portfolio overview", stocks: "60%", bonds: "25%", cash: "15%" };

export default function PortfolioBreakdown({ data = defaultData }: { data?: any }) {
  return (
    <Card className="w-full max-w-2xl mx-auto my-4">
      <CardHeader>
        <CardTitle>Portfolio Breakdown</CardTitle>
        <CardDescription>{data.title ?? "Portfolio overview"}</CardDescription>
      </CardHeader>
      <CardContent>
        <pre className="bg-muted p-2 rounded">{JSON.stringify(data, null, 2)}</pre>
      </CardContent>
    </Card>
  );
}
