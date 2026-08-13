import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// Lightweight QR placeholder — react-qr-code is not installed locally.
// The bordered square mirrors the upstream visual contract.
export default function QrConnect() {
  return (
    <Card>
      <CardContent className="flex justify-center pt-6">
        <div className="rounded-xl border bg-white p-4">
          <div
            className="grid h-40 w-40 grid-cols-12 gap-px"
            aria-label="QR placeholder"
          >
            {Array.from({ length: 144 }).map((_, i) => (
              <div
                key={i}
                className={i % 7 === 0 || i % 5 === 0 ? "bg-black" : "bg-white"}
              />
            ))}
          </div>
        </div>
      </CardContent>
      <CardHeader className="text-center">
        <CardTitle>Scan to connect your mobile device</CardTitle>
        <CardDescription>
          Open the Ledger mobile app and scan this code to link your device.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="secondary" className="w-full">
          Got it
        </Button>
      </CardFooter>
    </Card>
  )
}
