"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResourceInventory from "@/components/resources/inventory";
import  ResourceAllocation  from "@/components/resources/resource-allocation";
import ResourceRequests from "@/components/resources/resource-requests";

export default function ResourcesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl">Resource Management</h1>
        <Button>Request Resources</Button>
      </div>

      <Tabs defaultValue="inventory" className="space-y-6">
        <TabsList>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="allocation">Allocation</TabsTrigger>
          <TabsTrigger value="requests">Requests</TabsTrigger>
        </TabsList>

        <TabsContent value="inventory" className="space-y-6">
          <ResourceInventory />
        </TabsContent>

        <TabsContent value="allocation" className="space-y-6">
          <ResourceAllocation allocations={[]} />
        </TabsContent>

        <TabsContent value="requests" className="space-y-6">
          <ResourceRequests requests={[]} onApprove={() => {}} />
        </TabsContent>
      </Tabs>
    </div>
  );
}