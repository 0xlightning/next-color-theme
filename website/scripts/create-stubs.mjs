// One-shot script: create stub re-export files for registry/lib/hooks/components
// Run with: node scripts/create-stubs.mjs
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();

const newYorkV4 = [
  "alert", "avatar", "badge", "breadcrumb", "button", "calendar", "card",
  "chart", "checkbox", "collapsible", "command", "dialog", "drawer",
  "dropdown-menu", "field", "input", "input-group", "item", "label",
  "navigation-menu", "popover", "radio-group", "resizable", "scroll-area",
  "select", "separator", "sheet", "sidebar", "skeleton", "spinner",
  "switch", "table", "tabs", "textarea", "toggle-group", "tooltip",
];

const baseNova = [
  "button", "dialog", "drawer", "field", "input-group", "item",
  "pagination", "popover", "select", "skeleton", "tabs", "tooltip",
];

const radixNova = ["button"];
const radixRhea = ["bubble", "message", "message-scroller"];

function makeReexport(name, from = "@/components/ui") {
  return `// Auto-generated stub: re-export from dest primitives.\nexport * from "${from}/${name}";\nexport { default } from "${from}/${name}";\n`;
}

for (const name of newYorkV4) {
  const p = join(ROOT, "src/registry/new-york-v4/ui", `${name}.tsx`);
  writeFileSync(p, makeReexport(name));
}

// lib/utils
writeFileSync(
  join(ROOT, "src/registry/new-york-v4/lib/utils.ts"),
  `// Auto-generated stub.\nexport * from "@/lib/utils";\nexport { cn } from "@/lib/utils";\n`,
);

// direction
writeFileSync(
  join(ROOT, "src/registry/bases/base/ui/direction.tsx"),
  makeReexport("direction"),
);
writeFileSync(
  join(ROOT, "src/registry/bases/radix/ui/direction.tsx"),
  makeReexport("direction"),
);

for (const name of baseNova) {
  writeFileSync(
    join(ROOT, "src/styles/base-nova/ui", `${name}.tsx`),
    makeReexport(name),
  );
}
for (const name of radixNova) {
  writeFileSync(
    join(ROOT, "src/styles/radix-nova/ui", `${name}.tsx`),
    makeReexport(name),
  );
}
for (const name of radixRhea) {
  writeFileSync(
    join(ROOT, "src/styles/radix-rhea/ui", `${name}.tsx`),
    makeReexport(name),
  );
}

// bases barrel
writeFileSync(
  join(ROOT, "src/registry/bases/index.ts"),
  `// Auto-generated stub.\nexport * from "./base/ui/direction";\nexport * from "./radix/ui/direction";\n`,
);

// _legacy-styles
writeFileSync(
  join(ROOT, "src/registry/_legacy-styles.ts"),
  `// Auto-generated stub.\nexport const legacyStyles: { name: string }[] = [];\n`,
);

console.log("Created registry/style stubs.");
