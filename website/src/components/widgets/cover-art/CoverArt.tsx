import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"
import { Label } from "@/components/ui/label"

export default function CoverArt() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-3">
        <Label className="text-muted-foreground text-center text-xs font-normal tracking-wider uppercase">
          Cover Art
        </Label>
        <div className="border-input flex aspect-square items-center justify-center rounded-lg border">
          <label
            htmlFor="cover-art"
            className="flex size-full cursor-pointer items-center justify-center"
          >
            <IconPlaceholder
              tabler="IconPhoto"
              className="text-muted-foreground/50 size-10"
            />
          </label>
        </div>
        <input
          id="cover-art"
          type="file"
          accept="image/jpeg,image/png"
          className="sr-only"
        />
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <label
          htmlFor="cover-art"
          className="border-input bg-secondary text-secondary-foreground hover:bg-secondary/80 flex w-full cursor-pointer items-center justify-center rounded-md border px-4 py-2 text-sm font-medium"
        >
          Upload Artwork
        </label>
        <CardDescription className="text-center text-xs">
          Minimum 3000 × 3000px
          <br />
          JPEG or PNG only
        </CardDescription>
      </CardFooter>
    </Card>
  )
}
