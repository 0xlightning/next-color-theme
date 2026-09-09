"use client"

import * as React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { AreaChart, BarChart } from "@/components/charts/BarChart"
import { DonutChart } from "@/components/charts/DonutChart"
import { MiniBarChart } from "@/components/charts/MiniBarChart"
import { ProgressRing } from "@/components/charts/ProgressRing"
import { getFont } from "@/registry"
import { useDesignSystem } from "./use-design-system"

/** Deterministic fixtures — a static preview must render the same every time. */
const REVENUE = [
  { month: "Jan", revenue: 4200, cost: 2400 },
  { month: "Feb", revenue: 3800, cost: 2100 },
  { month: "Mar", revenue: 5100, cost: 2800 },
  { month: "Apr", revenue: 4700, cost: 2600 },
  { month: "May", revenue: 6200, cost: 3100 },
  { month: "Jun", revenue: 5800, cost: 2900 },
]

const SLEEP = [
  { day: "Mon", hours: 7.2, deep: 2.1 },
  { day: "Tue", hours: 6.5, deep: 1.6 },
  { day: "Wed", hours: 8.1, deep: 2.4 },
  { day: "Thu", hours: 7.4, deep: 2.0 },
  { day: "Fri", hours: 6.8, deep: 1.8 },
  { day: "Sat", hours: 8.9, deep: 2.7 },
  { day: "Sun", hours: 8.2, deep: 2.5 },
]

const SEGMENTS = [
  { segment: "Direct", value: 42 },
  { segment: "Referral", value: 27 },
  { segment: "Organic", value: 18 },
  { segment: "Social", value: 9 },
  { segment: "Email", value: 4 },
]

const SPARK = [12, 18, 9, 24, 16, 28, 21, 33, 26, 38]

const ROWS = [
  { id: "INV-014", client: "Northwind", status: "Paid", amount: "$2,400" },
  { id: "INV-015", client: "Acme Corp", status: "Pending", amount: "$1,180" },
  { id: "INV-016", client: "Globex", status: "Overdue", amount: "$3,920" },
]

const SECTION = "flex flex-col gap-3"
const SECTION_TITLE =
  "text-[11px] font-medium uppercase tracking-wide text-muted-foreground"

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className={SECTION}>
      <p className={SECTION_TITLE}>{title}</p>
      {children}
    </div>
  )
}

/**
 * The whole design system on one card: typography, buttons, inputs,
 * dropdowns, a calendar, tabs, charts and status primitives.
 *
 * `/create` renders this twice — once inside a light `ThemeScope` and once
 * inside a dark one — so a theme can be judged in both modes at a glance.
 * Every colour comes from a CSS variable, so both copies restyle themselves
 * the moment the customizer changes.
 */
export function ShowcaseBlock({ mode }: { mode: "light" | "dark" }) {
  const { state } = useDesignSystem()

  const bodyFont = getFont(state.font)
  const headingFont =
    state.fontHeading === "inherit" ? bodyFont : getFont(state.fontHeading)

  // A fixed date keeps the calendar's rendered month stable between the two
  // copies and across reloads.
  const [month] = React.useState(() => new Date(2026, 7, 1))
  const [date, setDate] = React.useState<Date | undefined>(
    () => new Date(2026, 7, 12)
  )

  return (
    <Card data-mode={mode}>
      <CardHeader>
        <Badge variant="secondary" className="mb-2">
          {mode === "dark" ? "Dark" : "Light"}
        </Badge>
        <CardTitle
          className="text-2xl"
          style={{ fontFamily: headingFont?.family ?? "inherit" }}
        >
          The quick brown fox jumps
        </CardTitle>
        <CardDescription
          className="text-sm"
          style={{ fontFamily: bodyFont?.family ?? "inherit" }}
        >
          Typefaces set the tone before a single word is read. This paragraph
          renders in the body face while the heading above uses the display
          face, so you can judge the pairing at real sizes rather than from a
          swatch.
        </CardDescription>
        <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-muted-foreground">
          <span>
            Heading: <strong>{headingFont?.label ?? "—"}</strong>
          </span>
          <span aria-hidden>·</span>
          <span>
            Body: <strong>{bodyFont?.label ?? "—"}</strong>
          </span>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-6">
        <Section title="Color Palette">
          <div className="flex flex-col gap-3">
            {/* Semantic swatches */}
            <div>
              <p className="mb-2 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                Theme Colors
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { label: "Primary", variable: "--primary", color: "var(--primary)" },
                  { label: "Background", variable: "--background", color: "var(--background)" },
                  { label: "Card", variable: "--card", color: "var(--card)" },
                  { label: "Muted", variable: "--muted", color: "var(--muted)" },
                  { label: "Border", variable: "--border", color: "var(--border)" },
                  { label: "Destructive", variable: "--destructive", color: "var(--destructive)" },
                ].map(({ label, variable, color }) => (
                  <div key={variable} className="flex flex-col items-center gap-1" title={variable}>
                    <div
                      className="h-8 w-8 rounded-lg border border-border shadow-xs ring-1 ring-inset ring-black/5 transition-transform hover:scale-105"
                      style={{ background: color }}
                    />
                    <span className="text-[9px] font-medium text-muted-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chart color swatches */}
            <div>
              <p className="mb-2 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                Chart Palette
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[1, 2, 3, 4, 5].map((n) => (
                  <div key={n} className="flex flex-col items-center gap-1" title={`--chart-${n}`}>
                    <div
                      className="h-8 w-8 rounded-lg border border-border shadow-xs ring-1 ring-inset ring-black/5 transition-transform hover:scale-105"
                      style={{ background: `var(--chart-${n})` }}
                    />
                    <span className="text-[9px] font-medium text-muted-foreground">Chart {n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Separator />

        <Section title="Icons">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                Live Icon Library
              </p>
              <Badge variant="outline" className="text-[10px] capitalize">
                {state.iconLibrary ?? "tabler"}
              </Badge>
            </div>
            <div className="flex flex-wrap items-center gap-3 rounded-lg border border-border bg-muted/20 p-3">
              {[
                { name: "Home", tabler: "IconHome", lucide: "Home", hugeicons: "Home01Icon", phosphor: "HouseIcon", remixicon: "RiHomeLine" },
                { name: "User", tabler: "IconUser", lucide: "User", hugeicons: "UserIcon", phosphor: "UserIcon", remixicon: "RiUserLine" },
                { name: "Settings", tabler: "IconSettings", lucide: "Settings", hugeicons: "Settings01Icon", phosphor: "GearIcon", remixicon: "RiSettings3Line" },
                { name: "Bell", tabler: "IconBell", lucide: "Bell", hugeicons: "Notification01Icon", phosphor: "BellIcon", remixicon: "RiNotification3Line" },
                { name: "Search", tabler: "IconSearch", lucide: "Search", hugeicons: "Search01Icon", phosphor: "MagnifyingGlassIcon", remixicon: "RiSearchLine" },
                { name: "Heart", tabler: "IconHeart", lucide: "Heart", hugeicons: "FavouriteIcon", phosphor: "HeartIcon", remixicon: "RiHeartLine" },
                { name: "Star", tabler: "IconStar", lucide: "Star", hugeicons: "StarIcon", phosphor: "StarIcon", remixicon: "RiStarLine" },
                { name: "Check", tabler: "IconCheck", lucide: "Check", hugeicons: "Tick01Icon", phosphor: "CheckIcon", remixicon: "RiCheckLine" },
                { name: "Plus", tabler: "IconPlus", lucide: "Plus", hugeicons: "Add01Icon", phosphor: "PlusIcon", remixicon: "RiAddLine" },
                { name: "Trash", tabler: "IconTrash", lucide: "Trash", hugeicons: "Delete01Icon", phosphor: "TrashIcon", remixicon: "RiDeleteBinLine" },
                { name: "Mail", tabler: "IconMail", lucide: "Mail", hugeicons: "Mail01Icon", phosphor: "EnvelopeIcon", remixicon: "RiMailLine" },
                { name: "Calendar", tabler: "IconCalendar", lucide: "Calendar", hugeicons: "Calendar01Icon", phosphor: "CalendarIcon", remixicon: "RiCalendarLine" },
                { name: "Shield", tabler: "IconShield", lucide: "Shield", hugeicons: "Shield01Icon", phosphor: "ShieldIcon", remixicon: "RiShieldLine" },
                { name: "Lock", tabler: "IconLock", lucide: "Lock", hugeicons: "Lock01Icon", phosphor: "LockIcon", remixicon: "RiLockLine" },
              ].map(({ name, tabler, lucide, hugeicons, phosphor, remixicon }) => (
                <div
                  key={name}
                  className="flex flex-col items-center gap-1 rounded-md p-1.5 transition-colors hover:bg-muted"
                  title={name}
                >
                  <IconPlaceholder
                    tabler={tabler}
                    lucide={lucide}
                    hugeicons={hugeicons}
                    phosphor={phosphor}
                    remixicon={remixicon}
                    className="size-5 text-foreground"
                  />
                  <span className="text-[9px] text-muted-foreground">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Separator />

        <Section title="Buttons">
          <div className="flex flex-wrap items-center gap-2">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Delete</Button>
            <Button disabled>Disabled</Button>
            <Button size="icon" variant="outline" aria-label="Add">
              <IconPlaceholder tabler="IconPlus" lucide="Plus" />
            </Button>
          </div>
        </Section>


        <Separator />

        <Section title="Inputs">
          <div className="grid gap-3 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor={`email-${mode}`}>Email</FieldLabel>
              <Input
                id={`email-${mode}`}
                type="email"
                placeholder="you@example.com"
              />
              <FieldDescription>We never share this.</FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor={`plan-${mode}`}>Plan</FieldLabel>
              <Select defaultValue="pro">
                <SelectTrigger id={`plan-${mode}`} className="w-full">
                  <SelectValue placeholder="Choose a plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="free">Free</SelectItem>
                  <SelectItem value="pro">Pro</SelectItem>
                  <SelectItem value="team">Team</SelectItem>
                </SelectContent>
              </Select>
              <FieldDescription>Billed monthly.</FieldDescription>
            </Field>
          </div>
          <Textarea placeholder="Tell us what you're building…" rows={2} />
        </Section>

        <Separator />

        <Section title="Menus & dates">
          <div className="flex flex-wrap items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button variant="outline">Actions</Button>}
              />
              <DropdownMenuContent align="start">
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuItem>Share link</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Archive</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Popover>
              <PopoverTrigger
                render={
                  <Button variant="outline">
                    <IconPlaceholder
                      tabler="IconCalendar"
                      lucide="Calendar"
                      className="mr-2 size-4"
                    />
                    {date
                      ? date.toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })
                      : "Pick a date"}
                  </Button>
                }
              />
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  defaultMonth={month}
                />
              </PopoverContent>
            </Popover>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger
                  render={<Button variant="ghost">Hover me</Button>}
                />
                <TooltipContent>Tooltips use the popover token</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </Section>

        <Separator />

        <Section title="Tabs & charts">
          <Tabs defaultValue="revenue">
            <TabsList>
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
              <TabsTrigger value="sleep">Sleep Report</TabsTrigger>
              <TabsTrigger value="split">Split</TabsTrigger>
              <TabsTrigger value="goals">Goals</TabsTrigger>
            </TabsList>
            <TabsContent value="revenue" className="pt-3">
              <BarChart data={REVENUE} className="h-32 [aspect-ratio:unset]" />
            </TabsContent>
            <TabsContent value="sleep" className="flex flex-col gap-2 pt-3 max-w-xs">
              <div className="flex items-center justify-between px-1 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">7.6 hrs avg</span>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                    92% Optimal
                  </span>
                </div>
                <span className="text-[10px] text-muted-foreground">Mon – Sun</span>
              </div>
              <AreaChart data={SLEEP} className="h-32 [aspect-ratio:unset]" />
            </TabsContent>
            <TabsContent value="split" className="pt-3">
              <DonutChart data={SEGMENTS} className="h-32 [aspect-ratio:unset]" />
            </TabsContent>
            <TabsContent
              value="goals"
              className="flex flex-wrap items-center gap-6 pt-3"
            >
              <div className="flex flex-col items-center gap-1">
                <ProgressRing value={72} />
                <span className="text-xs text-muted-foreground">Quota</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ProgressRing value={38} />
                <span className="text-xs text-muted-foreground">Churn</span>
              </div>
              <div className="flex flex-col gap-1">
                <MiniBarChart data={SPARK} width={140} height={44} />
                <span className="text-xs text-muted-foreground">
                  Last 10 days
                </span>
              </div>
            </TabsContent>
          </Tabs>
        </Section>

        <Separator />

        <Section title="Controls">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-3">
                <Label htmlFor={`notify-${mode}`}>Email alerts</Label>
                <Switch id={`notify-${mode}`} defaultChecked />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id={`terms-${mode}`} defaultChecked />
                <Label htmlFor={`terms-${mode}`}>Accept terms</Label>
              </div>
              <RadioGroup defaultValue="monthly" className="flex gap-4">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="monthly" id={`m-${mode}`} />
                  <Label htmlFor={`m-${mode}`}>Monthly</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="yearly" id={`y-${mode}`} />
                  <Label htmlFor={`y-${mode}`}>Yearly</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label>Budget</Label>
                <Slider defaultValue={[40]} max={100} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Storage used</Label>
                <Progress value={64} />
              </div>
            </div>
          </div>
        </Section>

        <Separator />

        <Section title="Data & status">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ROWS.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="font-medium">{row.id}</TableCell>
                  <TableCell>{row.client}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        row.status === "Paid"
                          ? "default"
                          : row.status === "Overdue"
                            ? "destructive"
                            : "secondary"
                      }
                    >
                      {row.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">{row.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>NC</AvatarFallback>
            </Avatar>
            <div className="flex flex-1 flex-col gap-1.5">
              <Skeleton className="h-3 w-2/3" />
              <Skeleton className="h-3 w-1/3" />
            </div>
          </div>

          <Accordion defaultValue={["faq-1"]}>
            <AccordionItem value="faq-1">
              <AccordionTrigger>Where do these colors come from?</AccordionTrigger>
              <AccordionContent>
                Every surface reads a CSS custom property, so changing the base
                color in the sidebar restyles both copies of this card at once.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2">
              <AccordionTrigger>Can I export it?</AccordionTrigger>
              <AccordionContent>
                Get Code hands you a paste-ready globals.css plus the shadcn
                install command for the components you pick.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Section>
      </CardContent>
    </Card>
  )
}
