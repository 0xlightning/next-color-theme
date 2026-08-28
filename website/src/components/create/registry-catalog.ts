import { ui } from "@/components/ui/_registry"

export type CatalogEntry = {
  name: string
  /** Other registry items shadcn pulls in automatically with this one. */
  registryDependencies: string[]
  /** Already vendored into `src/components/ui/` in this project. */
  present: boolean
}

/**
 * The 28 primitives this project actually vendors, plus `popover`. Used as
 * the default selection in the Get Code component picker so the export
 * matches what the preview renders before the user touches anything.
 */
export const PRESENT_COMPONENTS: readonly string[] = [
  "accordion",
  "avatar",
  "badge",
  "button",
  "calendar",
  "card",
  "chart",
  "checkbox",
  "dialog",
  "dropdown-menu",
  "empty",
  "field",
  "input",
  "input-group",
  "label",
  "popover",
  "progress",
  "radio-group",
  "select",
  "separator",
  "skeleton",
  "slider",
  "spinner",
  "switch",
  "table",
  "tabs",
  "textarea",
  "tooltip",
]

/**
 * Flattened view of the generated `ui/_registry.ts` manifest — every shadcn
 * component the registry offers, not just the ones vendored here. That file
 * is generated and must not be hand-edited; this only reads it.
 */
export const CATALOG: readonly CatalogEntry[] = ui
  .map((item) => ({
    name: item.name,
    registryDependencies: (item.registryDependencies ?? []).filter(
      (dep): dep is string => typeof dep === "string" && !dep.includes("/")
    ),
    present: PRESENT_COMPONENTS.includes(item.name),
  }))
  .sort((a, b) => a.name.localeCompare(b.name))

const BY_NAME = new Map(CATALOG.map((entry) => [entry.name, entry]))

/**
 * Expand a selection to include everything shadcn would install alongside it.
 * `alert-dialog` pulls `button`, and so on, transitively.
 */
export function resolveDependencies(
  selected: readonly string[]
): { all: string[]; implied: string[] } {
  const direct = new Set(selected)
  const all = new Set(selected)
  const queue = [...selected]

  while (queue.length > 0) {
    const name = queue.shift()
    if (!name) {
      continue
    }
    for (const dep of BY_NAME.get(name)?.registryDependencies ?? []) {
      if (!all.has(dep)) {
        all.add(dep)
        queue.push(dep)
      }
    }
  }

  const sorted = [...all].sort((a, b) => a.localeCompare(b))
  return {
    all: sorted,
    implied: sorted.filter((name) => !direct.has(name)),
  }
}
