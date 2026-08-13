export type Account = {
  label: string
  value: string
}

export const fromAccounts: Account[] = [
  { label: "Main Checking (··8402) — $12,450.00", value: "checking" },
  { label: "Business (··7731) — $8,920.00", value: "business" },
]

export const toAccounts: Account[] = [
  { label: "High Yield Savings (··1192) — $42,100.00", value: "savings" },
  { label: "Investment (··3349) — $18,200.00", value: "investment" },
]

export const mockData = {
  amount: "1,200.00",
  from: "checking",
  to: "savings",
  arrival: "Today, Apr 14",
  fee: "$0.00",
  total: "$1,200.00",
}

export type TransferFundsData = typeof mockData
