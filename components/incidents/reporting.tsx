"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface IncidentReport {
  id: string;
  description: string;
  date: string;
}

interface ReportingProps {
  reports: IncidentReport[];
}

const dummyReports = [
  { id: "1", description: "Power outage in downtown", date: "2023-10-01" },
  { id: "2", description: "Flooding in northern region", date: "2023-10-02" },
];

export function Reporting({ reports = dummyReports }: ReportingProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Incident Reports</CardTitle>
      </CardHeader>
      <CardContent>
        {reports.map((report) => (
          <div key={report.id} className="flex justify-between">
            <span>{report.date}</span>
            <span>{report.description}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default Reporting;
