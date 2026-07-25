export interface CalendarEvent {
  id: string;
  title: string;
  date: string; // ISO date string
  type: "payment" | "meeting" | "deadline" | "reminder";
  color?: string;
}

export interface CalendarData {
  year: number;
  month: number; // 0-indexed (0 = January)
  daysInMonth: number;
  firstDayOffset: number; // index of first day of month (0 = Sunday)
  events: CalendarEvent[];
}

export const mockData: CalendarData = {
  year: 2024,
  month: 6, // July
  daysInMonth: 31,
  firstDayOffset: 1, // assuming July 1, 2024 is Monday (index 1)
  events: [
    { id: "evt_1", title: "Mortgage Payment", date: "2024-07-01", type: "payment", color: "#dc2626" },
    { id: "evt_2", title: "Team Standup", date: "2024-07-03", type: "meeting", color: "#2563eb" },
    { id: "evt_3", title: "Project Deadline", date: "2024-07-15", type: "deadline", color: "#f59e0b" },
    { id: "evt_4", title: "Car Insurance", date: "2024-07-20", type: "payment", color: "#dc2626" },
    { id: "evt_5", title: "Quarterly Review", date: "2024-07-25", type: "meeting", color: "#2563eb" },
    { id: "evt_6", title: "Subscription Renewal", date: "2024-07-28", type: "reminder", color: "#16a34a" },
  ],
};
