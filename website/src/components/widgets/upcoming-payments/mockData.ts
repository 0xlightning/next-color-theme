export type UpcomingPayment = {
  id: string
  title: string
  date: string
  amount: string
}

export const mockData: UpcomingPayment[] = [
  {
    id: "p1",
    title: "Netflix Subscription",
    date: "Apr 15, 2024",
    amount: "$19.99",
  },
  {
    id: "p2",
    title: "Rent Payment",
    date: "Apr 1, 2024",
    amount: "$2,400.00",
  },
  {
    id: "p3",
    title: "Auto Insurance",
    date: "Apr 22, 2024",
    amount: "$186.00",
  },
]
