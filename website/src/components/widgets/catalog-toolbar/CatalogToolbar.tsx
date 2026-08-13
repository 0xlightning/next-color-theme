import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { IconPlaceholder } from "@/components/ui/icon-placeholder"

export default function CatalogToolbar() {
  return (
    <div className="flex items-center gap-3">
      <InputGroup className="flex-1">
        <InputGroupAddon>
          <IconPlaceholder tabler="IconSearch" />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search releases or catalog..." />
      </InputGroup>
      <Button>
        <IconPlaceholder tabler="IconPlus" />
        Upload New Release
      </Button>
    </div>
  )
}
