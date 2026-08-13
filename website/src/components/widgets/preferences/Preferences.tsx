import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { mockData, type PreferencesData } from "./mockData"

export default function Preferences({ data = mockData }: { data?: PreferencesData }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Preferences</CardTitle>
        <CardDescription>
          Manage your account settings and notifications.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="default-currency">Default Currency</FieldLabel>
            <Select defaultValue={data.currency}>
              <SelectTrigger id="default-currency" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {data.currencies.map((c) => (
                    <SelectItem key={c.value} value={c.value}>
                      {c.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
          <div className="border-t" />
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-medium">Public Statistics</span>
              <span className="text-muted-foreground text-xs">
                Allow others to see your total stream count and listening activity
              </span>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="border-t" />
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-medium">Email Notifications</span>
              <span className="text-muted-foreground text-xs">
                Monthly royalty reports and distribution updates
              </span>
            </div>
            <Switch defaultChecked />
          </div>
        </FieldGroup>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Reset</Button>
        <Button className="ml-auto">Save Preferences</Button>
      </CardFooter>
    </Card>
  )
}
