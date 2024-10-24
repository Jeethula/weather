"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ResourceAllocationProps {
  allocations: { resource: string; allocatedTo: string }[];
}

const dummyAllocations = [
  { resource: "Water", allocatedTo: "Region A" },
  { resource: "Food", allocatedTo: "Region B" },
];

export function ResourceAllocation({ allocations = dummyAllocations }: ResourceAllocationProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resource Allocation</CardTitle>
      </CardHeader>
      <CardContent>
        {allocations.map((allocation, index) => (
          <div key={index} className="flex justify-between">
            <span>{allocation.resource}</span>
            <span>allocated to {allocation.allocatedTo}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default ResourceAllocation;
