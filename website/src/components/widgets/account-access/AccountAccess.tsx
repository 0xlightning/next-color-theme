import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { type AccountAccessData, mockData } from "./mockData";

export default function AccountAccess({ data = mockData }: { data?: AccountAccessData }) {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Account Access</CardTitle>
        <CardDescription>Manage your login credentials and security settings</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2">
          <span className="font-medium">Email:</span>
          <Input defaultValue={data.email} className="flex-1" />
          <Button variant="outline">Update</Button>
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-medium">Two‑Factor Authentication</span>
          <Switch checked={data.twoFactorEnabled} />
        </div>
        <Separator />
        <div>
          <h3 className="mb-2 font-semibold">Connected Accounts</h3>
          {data.connectedAccounts.map((acc) => (
            <div key={acc.provider} className="flex items-center justify-between py-1">
              <div className="flex items-center space-x-2">
                <Avatar>
                  <span>{acc.provider.charAt(0).toUpperCase()}</span>
                </Avatar>
                <span>{acc.email}</span>
              </div>
              <Button variant="destructive" size="sm">Disconnect</Button>
            </div>
          ))}
        </div>
        <Separator />
        <div>
          <h3 className="mb-2 font-semibold">Active Sessions</h3>
          {data.activeSessions.map((sess) => (
            <div key={sess.id} className="flex items-center justify-between py-1">
              <div>
                <span className="font-medium">{sess.device}</span> – {sess.location}
                {sess.isCurrent && <Badge className="ml-2">Current</Badge>}
              </div>
              <Button variant="outline" size="sm">Sign Out</Button>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="justify-end">
        <Button variant="destructive">Delete Account</Button>
      </CardFooter>
    </Card>
  );
}
