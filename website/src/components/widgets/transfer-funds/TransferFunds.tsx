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
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { mockData, fromAccounts, toAccounts, type TransferFundsData } from "./mockData"

export default function TransferFunds({ data = mockData }: { data?: TransferFundsData }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transfer Funds</CardTitle>
        <CardDescription>
          Move money between your connected accounts.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="transfer-amount">Amount to Transfer</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <InputGroupText>$</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput id="transfer-amount" defaultValue={data.amount} />
            </InputGroup>
          </Field>
          <Field>
            <FieldLabel htmlFor="from-account">From Account</FieldLabel>
            <Select defaultValue={data.from}>
              <SelectTrigger id="from-account" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {fromAccounts.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <FieldLabel htmlFor="to-account">To Account</FieldLabel>
            <Select defaultValue={data.to}>
              <SelectTrigger id="to-account" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {toAccounts.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
          <div className="bg-muted/40 flex flex-col gap-3 rounded-lg border p-3">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-sm">Estimated arrival</span>
              <span className="text-sm font-medium">{data.arrival}</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-sm">Transaction fee</span>
              <span className="text-sm font-medium tabular-nums">{data.fee}</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Total amount</span>
              <span className="text-sm font-semibold tabular-nums">{data.total}</span>
            </div>
          </div>
        </FieldGroup>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Confirm Transfer</Button>
      </CardFooter>
    </Card>
  )
}
