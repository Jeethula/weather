"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface PerformanceProps {
  metrics: { name: string; value: number }[];
}

const dummyMetrics = [
  { name: "Efficiency", value: 85 },
  { name: "Productivity", value: 78 },
  { name: "Quality", value: 92 },
];

export function Performance({ metrics = dummyMetrics }: PerformanceProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Performance Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={metrics}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export default Performance;
