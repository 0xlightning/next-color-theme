import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const LIBS = ["lucide", "tabler", "hugeicons", "phosphor", "remixicon"]
const names = Object.fromEntries(LIBS.map((l) => [l, new Set()]))
function walk(d) {
  for (const e of readdirSync(d)) {
    const p = join(d, e)
    if (statSync(p).isDirectory()) walk(p)
    else if (/\.tsx?$/.test(p) && !p.includes("icon-registry")) {
      const s = readFileSync(p, "utf8")
      for (const l of LIBS)
        // Matches both the JSX attribute form (tabler="IconHome") and the
        // object-literal form the showcase grid uses (tabler: "IconHome").
        for (const m of s.matchAll(new RegExp(l + '\\s*[:=]\\s*"([A-Za-z0-9]+)"', "g"))) names[l].add(m[1])
    }
  }
}
walk("src")

const SRC = {
  lucide: "lucide-react",
  tabler: "@tabler/icons-react",
  hugeicons: "@hugeicons/core-free-icons",
  phosphor: "@phosphor-icons/react",
  remixicon: "@remixicon/react",
}
const sorted = Object.fromEntries(LIBS.map((l) => [l, [...names[l]].sort()]))
// Vendors reuse identifier names (PackageIcon, CheckIcon, XIcon, AlignLeftIcon
// all appear in more than one package), so every import is aliased by library.
const alias = (l, n) => `${l}_${n}`
const imp = (l) =>
  `import {\n${sorted[l]
    .map((n) => `  ${n} as ${alias(l, n)},`)
    .join("\n")}\n} from "${SRC[l]}"`
const map = (l, type) =>
  `// Cast once at the boundary: the vendors type their own props slightly
// differently (remixicon forbids children, for one) while all of them accept
// the SVG attributes this app passes.
const ${l.toUpperCase()} = {\n${sorted[l]
    .map((n) => `  ${n}: ${alias(l, n)},`)
    .join("\n")}\n} as unknown as Record<string, ${type} | undefined>`

const out = `/**
 * Static icon registry — GENERATED, see genicons.mjs in git history.
 *
 * Deliberately explicit named imports rather than \`import * as\`: five icon
 * barrels is roughly 15k modules, and /create already takes ~9s to compile.
 * Only the ${LIBS.reduce((a, l) => a + sorted[l].length, 0)} icons this app actually renders are pulled in.
 *
 * Every value here is a module-level binding, which is also what lets
 * \`renderIcon\` below satisfy react-hooks/static-components: the element type
 * is never the return value of a call made during render.
 */
import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
${LIBS.map(imp).join("\n")}

type SvgProps = React.SVGProps<SVGSVGElement>
type IconComponent = React.ComponentType<SvgProps>
/** Hugeicons ships icon *data*, not components; HugeiconsIcon renders it. */
type HugeiconsData = React.ComponentProps<typeof HugeiconsIcon>["icon"]

${map("lucide", "IconComponent")}

${map("tabler", "IconComponent")}

${map("phosphor", "IconComponent")}

${map("remixicon", "IconComponent")}

const HUGEICONS: Record<string, HugeiconsData | undefined> = {
${sorted.hugeicons.map((n) => `  ${n}: ${alias("hugeicons", n)},`).join("\n")}
}

/** Extra flourish so the simulated libraries aren't the only thing that
 *  changed — real vendors have genuinely different stroke conventions. */
const LIBRARY_CLASS: Record<string, string | undefined> = {
  hugeicons: "[stroke-linecap:round]",
  phosphor: "[stroke-linejoin:round]",
}

/**
 * Resolve one icon to an element.
 *
 * A plain module-level function, not a component and not a hook, so the
 * element type is a stable binding rather than something produced during a
 * render pass.
 */
export function renderIcon(
  library: string,
  names: {
    lucide?: string
    tabler?: string
    hugeicons?: string
    phosphor?: string
    remixicon?: string
  },
  props: SvgProps
): React.ReactElement | null {
  if (library === "hugeicons" && names.hugeicons) {
    const data = HUGEICONS[names.hugeicons]
    if (data) {
      return <HugeiconsIcon icon={data} {...(props as object)} />
    }
  }

  const direct =
    (library === "phosphor" && names.phosphor && PHOSPHOR[names.phosphor]) ||
    (library === "remixicon" && names.remixicon && REMIXICON[names.remixicon]) ||
    (library === "lucide" && names.lucide && LUCIDE[names.lucide]) ||
    (library === "tabler" && names.tabler && TABLER[names.tabler]) ||
    undefined
  if (direct) {
    return React.createElement(direct, props)
  }

  // Fall back across the installed libraries rather than rendering nothing.
  const fallback =
    (names.tabler && TABLER[names.tabler]) ||
    (names.lucide && LUCIDE[names.lucide]) ||
    undefined
  return fallback ? React.createElement(fallback, props) : null
}

export { LIBRARY_CLASS }
`
writeFileSync("src/components/ui/icon-registry.tsx", out)
console.log(
  "generated:",
  LIBS.map((l) => `${l}=${sorted[l].length}`).join(" ")
)
