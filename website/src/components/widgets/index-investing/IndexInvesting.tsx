import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function IndexInvesting() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dollar-Cost Averaging</CardTitle>
        <CardDescription>A strategy for building wealth over time.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
          <a href="#" className="hover:text-primary underline underline-offset-4">
            Over time
          </a>
          , this smooths out the average cost of your investments. When prices
          drop, your fixed amount buys more shares. When prices rise, you buy
          fewer. The result is a lower average cost per share compared to
          lump-sum investing during volatile periods.
        </p>
      </CardContent>
    </Card>
  )
}
