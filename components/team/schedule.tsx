"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ScheduleProps {
  events: { date: string; event: string }[];
}

const dummyEvents = [
  { date: "2023-10-01", event: "Team Meeting" },
  { date: "2023-10-05", event: "Project Deadline" },
  { date: "2023-10-10", event: "Performance Review" },
];

export function Schedule({ events = dummyEvents }: ScheduleProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Schedule</CardTitle>
      </CardHeader>
      <CardContent>
        {events.map((event, index) => (
          <div key={index} className="flex justify-between">
            <span>{event.date}</span>
            <span>{event.event}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default Schedule;
