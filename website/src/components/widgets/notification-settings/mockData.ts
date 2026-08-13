export const mockData = {
  items: [
    {
      id: "transactions",
      label: "Transaction alerts",
      description: "Deposits, withdrawals, and transfers.",
      defaultChecked: true,
    },
    {
      id: "security",
      label: "Security alerts",
      description: "Login attempts and account changes.",
      defaultChecked: true,
    },
    {
      id: "goals",
      label: "Goal milestones",
      description: "Updates at 25%, 50%, 75%, and 100%.",
      defaultChecked: false,
    },
    {
      id: "market",
      label: "Market updates",
      description: "Daily portfolio summary and price alerts.",
      defaultChecked: false,
    },
  ],
}
export type NotificationSettingsData = typeof mockData
