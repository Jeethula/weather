"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface HistoryProps {
  history: { date: string; action: string }[];
}

const dummyHistory = [
  { date: "2023-09-30", action: "Incident reported" },
  { date: "2023-10-01", action: "Resources allocated" },
];

export function History({ history = dummyHistory }: HistoryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Incident History</CardTitle>
      </CardHeader>
      <CardContent>
        {history.map((entry, index) => (
          <div key={index} className="flex justify-between">
            <span>{entry.date}</span>
            <span>{entry.action}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default History;
