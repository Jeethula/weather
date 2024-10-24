"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Notification {
    id: string;
    message: string;
    date: string;
}

interface NotificationsProps {
    notifications: Notification[];
}

const dummyNotifications = [
    { id: "1", message: "System update available", date: "2023-10-01" },
    { id: "2", message: "New incident reported", date: "2023-10-02" },
];

export function Notifications({ notifications = dummyNotifications }: NotificationsProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent>
                {notifications.map((notification) => (
                    <div key={notification.id} className="flex justify-between">
                        <span>{notification.date}</span>
                        <span>{notification.message}</span>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}

export default Notifications;
