"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ResourceRequest {
  id: string;
  resource: string;
  status: string;
}

interface ResourceRequestsProps {
  requests: ResourceRequest[];
  onApprove: (id: string) => void;
}

const dummyRequests = [
  { id: "1", resource: "Water", status: "Pending" },
  { id: "2", resource: "Food", status: "Approved" },
];

export function ResourceRequests({ requests = dummyRequests, onApprove }: ResourceRequestsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resource Requests</CardTitle>
      </CardHeader>
      <CardContent>
        {requests.map((request) => (
          <div key={request.id} className="flex justify-between items-center">
            <span>{request.resource} - {request.status}</span>
            <Button onClick={() => onApprove(request.id)}>Approve</Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default ResourceRequests;
