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

const REGISTRY_RAW = [
  {
    "name": "accordion",
    "deps": []
  },
  {
    "name": "alert",
    "deps": []
  },
  {
    "name": "alert-dialog",
    "deps": [
      "button"
    ]
  },
  {
    "name": "aspect-ratio",
    "deps": []
  },
  {
    "name": "avatar",
    "deps": []
  },
  {
    "name": "badge",
    "deps": []
  },
  {
    "name": "breadcrumb",
    "deps": []
  },
  {
    "name": "button",
    "deps": []
  },
  {
    "name": "button-group",
    "deps": [
      "separator"
    ]
  },
  {
    "name": "calendar",
    "deps": [
      "button"
    ]
  },
  {
    "name": "card",
    "deps": []
  },
  {
    "name": "carousel",
    "deps": [
      "button"
    ]
  },
  {
    "name": "chart",
    "deps": [
      "card"
    ]
  },
  {
    "name": "checkbox",
    "deps": []
  },
  {
    "name": "collapsible",
    "deps": []
  },
  {
    "name": "combobox",
    "deps": [
      "button",
      "input-group"
    ]
  },
  {
    "name": "command",
    "deps": [
      "dialog",
      "input-group"
    ]
  },
  {
    "name": "context-menu",
    "deps": []
  },
  {
    "name": "dialog",
    "deps": [
      "button"
    ]
  },
  {
    "name": "drawer",
    "deps": []
  },
  {
    "name": "dropdown-menu",
    "deps": []
  },
  {
    "name": "empty",
    "deps": []
  },
  {
    "name": "field",
    "deps": [
      "label",
      "separator"
    ]
  },
  {
    "name": "form",
    "deps": []
  },
  {
    "name": "hover-card",
    "deps": []
  },
  {
    "name": "input",
    "deps": []
  },
  {
    "name": "input-group",
    "deps": [
      "button",
      "input",
      "textarea"
    ]
  },
  {
    "name": "input-otp",
    "deps": []
  },
  {
    "name": "item",
    "deps": [
      "separator"
    ]
  },
  {
    "name": "label",
    "deps": []
  },
  {
    "name": "menubar",
    "deps": [
      "dropdown-menu"
    ]
  },
  {
    "name": "navigation-menu",
    "deps": []
  },
  {
    "name": "pagination",
    "deps": [
      "button"
    ]
  },
  {
    "name": "popover",
    "deps": []
  },
  {
    "name": "progress",
    "deps": []
  },
  {
    "name": "radio-group",
    "deps": []
  },
  {
    "name": "resizable",
    "deps": []
  },
  {
    "name": "scroll-area",
    "deps": []
  },
  {
    "name": "select",
    "deps": []
  },
  {
    "name": "separator",
    "deps": []
  },
  {
    "name": "sheet",
    "deps": [
      "button"
    ]
  },
  {
    "name": "sidebar",
    "deps": [
      "button",
      "input",
      "separator",
      "sheet",
      "skeleton",
      "tooltip",
      "use-mobile"
    ]
  },
  {
    "name": "skeleton",
    "deps": []
  },
  {
    "name": "slider",
    "deps": []
  },
  {
    "name": "sonner",
    "deps": []
  },
  {
    "name": "spinner",
    "deps": []
  },
  {
    "name": "switch",
    "deps": []
  },
  {
    "name": "table",
    "deps": []
  },
  {
    "name": "tabs",
    "deps": []
  },
  {
    "name": "textarea",
    "deps": []
  },
  {
    "name": "toggle",
    "deps": []
  },
  {
    "name": "toggle-group",
    "deps": [
      "toggle"
    ]
  },
  {
    "name": "tooltip",
    "deps": []
  },
  {
    "name": "kbd",
    "deps": []
  },
  {
    "name": "native-select",
    "deps": []
  },
  {
    "name": "direction",
    "deps": []
  },
  {
    "name": "attachment",
    "deps": [
      "button"
    ]
  },
  {
    "name": "bubble",
    "deps": []
  },
  {
    "name": "marker",
    "deps": []
  },
  {
    "name": "message",
    "deps": []
  }
] as const;

/**
 * Flattened view of the component catalog — every shadcn component offered.
 */
export const CATALOG: readonly CatalogEntry[] = REGISTRY_RAW
  .map((item) => ({
    name: item.name,
    registryDependencies: [...item.deps],
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
