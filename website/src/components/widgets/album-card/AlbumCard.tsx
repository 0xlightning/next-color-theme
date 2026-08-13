import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { mockData, type AlbumCardData } from "./mockData"

export default function AlbumCard({ data = mockData }: { data?: AlbumCardData }) {
  return (
    <Card>
      <CardContent className="flex flex-col gap-4">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={data.cover}
            alt={data.title}
            className="aspect-square w-full object-cover"
          />
          <Badge className="absolute top-3 right-3">{data.price}</Badge>
        </div>
        <div className="flex flex-col gap-1">
          <CardTitle>{data.title}</CardTitle>
          <CardDescription className="text-xs tracking-wider uppercase">
            {data.released}
          </CardDescription>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-4">
        <Separator />
        <div className="grid w-full grid-cols-2 gap-4">
          <div className="flex flex-col gap-0.5">
            <span className="text-muted-foreground text-xs tracking-wider uppercase">
              Tracks
            </span>
            <span className="text-lg font-medium tabular-nums">{data.tracks} Tracks</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-muted-foreground text-xs tracking-wider uppercase">
              Cumulative Streams
            </span>
            <span className="text-lg font-medium tabular-nums">{data.streams}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
