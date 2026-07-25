export interface DividendItem {
  name: string;
  shares: number;
  history: number[];
  latestAmount: number;
}

const mockData: DividendItem[] = [
  { name: "Apple Inc. (AAPL)", shares: 120, history: [45, 50, 52, 58], latestAmount: 58 },
  { name: "Microsoft Corp. (MSFT)", shares: 85, history: [60, 65, 70, 78], latestAmount: 78 },
  { name: "Vanguard Total Stock (VTI)", shares: 200, history: [110, 115, 120, 132], latestAmount: 132 },
];

export default mockData;
