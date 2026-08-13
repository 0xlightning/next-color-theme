export const mockData = {
  balance: "US$12.94",
  available: "US$11,337.06 Available",
  due: "1 Apr",
  dailyCash: "+US$0.25 Daily Cash",
  byMonth: [
    { month: "Jan", amount: 40 },
    { month: "Feb", amount: 55 },
    { month: "Mar", amount: 35 },
    { month: "Apr", amount: 60 },
    { month: "May", amount: 45 },
    { month: "Jun", amount: 50 },
    { month: "Jul", amount: 65 },
    { month: "Aug", amount: 40 },
    { month: "Sep", amount: 55 },
    { month: "Oct", amount: 70 },
    { month: "Nov", amount: 45 },
    { month: "Dec", amount: 80 },
  ],
}
export type CardOverviewData = typeof mockData
