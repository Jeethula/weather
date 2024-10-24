"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export function NotificationSettings() {
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between items-center">
                    <span>Enable Notifications</span>
                    <Switch checked={isEnabled} onCheckedChange={setIsEnabled} />
                </div>
            </CardContent>
        </Card>
    );
}

export default NotificationSettings;
