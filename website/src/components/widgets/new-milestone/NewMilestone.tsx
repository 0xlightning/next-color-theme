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
import { Input } from "@/components/ui/input"
import { mockData, type NewMilestoneData } from "./mockData"

export default function NewMilestone({
  data = mockData,
}: {
  data?: NewMilestoneData
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Set a new milestone</CardTitle>
        <CardDescription>
          Define your financial target and we&apos;ll help you pace your savings.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="goal-name">Goal Name</FieldLabel>
            <Input id="goal-name" placeholder={data.placeholder} />
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field>
              <FieldLabel htmlFor="target-amount">Target Amount</FieldLabel>
              <Input id="target-amount" defaultValue={data.amount} />
            </Field>
            <Field>
              <FieldLabel htmlFor="target-date">Target Date</FieldLabel>
              <Input id="target-date" defaultValue={data.date} />
            </Field>
          </div>
        </FieldGroup>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full">Create Goal</Button>
        <Button variant="outline" className="w-full">
          Cancel
        </Button>
      </CardFooter>
    </Card>
  )
}
