"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Layers, MapPin } from "lucide-react";

const zones = [
  {
    id: 1,
    name: "Coastal Region A",
    type: "Hurricane Zone",
    risk: "High",
    affected: "15,000",
  },
  {
    id: 2,
    name: "Valley District B",
    type: "Flood Risk",
    risk: "Medium",
    affected: "8,000",
  },
  {
    id: 3,
    name: "Mountain Area C",
    type: "Landslide Risk",
    risk: "High",
    affected: "3,000",
  },
];

export default function DisasterMap() {
  return (
    <div className="gap-6 grid md:grid-cols-3">
      <div className="md:col-span-2">
        <Card className="h-full">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                Disaster Risk Zones
              </CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Layers className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <MapPin className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center items-center bg-gray-100 dark:bg-gray-800 rounded-lg aspect-[16/9]">
              <p className="text-muted-foreground">Interactive Disaster Map</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        {zones.map((zone) => (
          <Card key={zone.id}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-base">{zone.name}</CardTitle>
                <Badge
                >
                  {zone.risk} Risk
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-sm">Type</span>
                  <span className="font-medium text-sm">{zone.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-sm">
                    Affected Population
                  </span>
                  <span className="font-medium text-sm">{zone.affected}</span>
                </div>
                <Button className="mt-2 w-full" variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}