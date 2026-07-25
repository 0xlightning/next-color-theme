import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { mockData } from "./mockData";
import { IconCalendar, IconClock } from "@tabler/icons-react";

export default function Calendar() {
  const { year, month, events } = mockData;
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold flex items-center gap-2">
          <IconCalendar className="h-4 w-4 text-zinc-500" />
          Schedule ({monthNames[month]} {year})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {events.map((evt) => (
            <div key={evt.id} className="flex items-center justify-between p-2 rounded-lg bg-zinc-50 dark:bg-zinc-900 border text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: evt.color || '#3b82f6' }} />
                <span className="font-medium">{evt.title}</span>
              </div>
              <div className="flex items-center gap-1 text-zinc-500">
                <IconClock className="h-3 w-3" />
                <span>{evt.date}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
