export type Transaction = {
  id: string
  merchant: string
  category: string
  tabler: string
  date: string
  amount: string
  positive?: boolean
}

export const mockData: Transaction[] = [
  {
    id: "t1",
    merchant: "Blue Bottle Coffee",
    category: "Food & Drink",
    tabler: "IconCoffee",
    date: "Today, 10:24 AM",
    amount: "-$6.50",
  },
  {
    id: "t2",
    merchant: "Whole Foods Market",
    category: "Groceries",
    tabler: "IconShoppingCart",
    date: "Yesterday",
    amount: "-$142.30",
  },
  {
    id: "t3",
    merchant: "Stripe Payout",
    category: "Income",
    tabler: "IconWallet",
    date: "Oct 12",
    amount: "+$4,200.00",
    positive: true,
  },
  {
    id: "t4",
    merchant: "Uber Technologies",
    category: "Transport",
    tabler: "IconCar",
    date: "Oct 11",
    amount: "-$24.10",
  },
  {
    id: "t5",
    merchant: "Netflix Subscription",
    category: "Entertainment",
    tabler: "IconDeviceTv",
    date: "Oct 10",
    amount: "-$19.99",
  },
]
