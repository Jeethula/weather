"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Security() {
    const handlePasswordChange = () => {
        // Logic for changing password
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Security Settings</CardTitle>
            </CardHeader>
            <CardContent>
                <Button onClick={handlePasswordChange}>Change Password</Button>
            </CardContent>
        </Card>
    );
}

export default Security;
