export const mockData = {
  byHour: [
    { hour: "6a", usage: 1.2 },
    { hour: "8a", usage: 2.8 },
    { hour: "10a", usage: 3.1 },
    { hour: "12p", usage: 2.4 },
    { hour: "2p", usage: 3.4 },
    { hour: "4p", usage: 2.9 },
    { hour: "6p", usage: 3.8 },
    { hour: "8p", usage: 3.2 },
  ],
  current: 3.4,
  solar: 1.2,
  battery: 85,
}
export type PowerUsageData = typeof mockData
