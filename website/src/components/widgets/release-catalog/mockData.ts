export type Holding = {
  ticker: string
  name: string
  type: string
  added: string
  shares: string
  value: string
}

export const mockData: { holdings: Holding[] } = {
  holdings: [
    { ticker: "VOO", name: "Vanguard S&P 500 ETF", type: "ETF", added: "Jan 2021", shares: "112", value: "$48,230.40" },
    { ticker: "VIG", name: "Vanguard Dividend Appreciation", type: "ETF", added: "Mar 2022", shares: "450", value: "$26,033.79" },
    { ticker: "AAPL", name: "Apple Inc.", type: "Stock", added: "Nov 2020", shares: "85", value: "$18,488.90" },
    { ticker: "O", name: "Realty Income Corp", type: "REIT", added: "Jun 2023", shares: "320", value: "$15,136.59" },
  ],
}
export type ReleaseCatalogData = typeof mockData
