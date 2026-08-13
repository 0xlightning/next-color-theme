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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { mockData, type ReceivingMethodData } from "./mockData"

export default function ReceivingMethod({
  data = mockData,
}: {
  data?: ReceivingMethodData
}) {
  return (
    <Card>
      <CardHeader>
        <CardDescription>Payout Preferences</CardDescription>
        <CardTitle>Receiving Method</CardTitle>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="account-holder">Account Holder Name</FieldLabel>
            <Input id="account-holder" defaultValue={data.holder} />
          </Field>
          <Field>
            <FieldLabel>Receiving Method</FieldLabel>
            <RadioGroup defaultValue={data.method} className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <FieldLabel htmlFor="method-bank" className="border-input hover:bg-muted/40 flex cursor-pointer items-start gap-3 rounded-lg border p-3">
                <RadioGroupItem value="bank" id="method-bank" />
                <div className="flex flex-col">
                  <span className="font-medium">Bank Transfer</span>
                  <span className="text-muted-foreground text-sm">SWIFT / IBAN</span>
                </div>
              </FieldLabel>
              <FieldLabel htmlFor="method-paypal" className="border-input hover:bg-muted/40 flex cursor-pointer items-start gap-3 rounded-lg border p-3">
                <RadioGroupItem value="paypal" id="method-paypal" />
                <div className="flex flex-col">
                  <span className="font-medium">PayPal</span>
                  <span className="text-muted-foreground text-sm">Instant Payout</span>
                </div>
              </FieldLabel>
            </RadioGroup>
          </Field>
          <Field>
            <FieldLabel htmlFor="iban">IBAN / Account Number</FieldLabel>
            <Input id="iban" placeholder="DE89 3704 0044 ...." />
          </Field>
        </FieldGroup>
      </CardContent>
      <CardFooter>
        <Button className="w-full" disabled>
          Save Payout Settings
        </Button>
      </CardFooter>
    </Card>
  )
}
