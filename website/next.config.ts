import path from "node:path"
import type { NextConfig } from "next"

// Packages that are imported by vendored shadcn/registry source but are not
// installed. Both bundlers resolve them to a no-op stub module.
// "lucide-react" and "@tabler/icons-react" are real installed packages —
// deliberately absent from this list.
const STUBBED_MODULES = [
  "@hugeicons/core-free-icons",
  "@hugeicons/react",
  "@streamdown/code",
  "@tanstack/react-table",
  "@vercel/analytics/react",
  "fumadocs-core/breadcrumb",
  "fumadocs-core/page-tree",
  "fumadocs-core/search/client",
  "motion/react",
  "radix-ui",
  "react-aria-components",
  "streamdown",
]

const STUB_EMPTY = "./src/lib/stub-empty.ts"

const nextConfig: NextConfig = {
  // The dashboard is the landing page. There is deliberately no app/page.tsx —
  // it would shadow this redirect.
  async redirects() {
    return [{ source: "/", destination: "/dashboard", permanent: false }]
  },
  // Turbopack is the default bundler in Next 16.
  turbopack: {
    // Pin the workspace root. Turbopack's inference walks up from the config
    // and misses `website/node_modules/next` (the repo root has no
    // package.json and the path contains spaces), which fails compilation of
    // `./app` and breaks the relative resolveAlias paths below.
    root: __dirname,
    // Relative to `root`.
    resolveAlias: Object.fromEntries(STUBBED_MODULES.map((id) => [id, STUB_EMPTY])),
  },
  // Kept in sync with the Turbopack aliases above for `next dev --webpack` /
  // `next build --webpack`.
  webpack(config) {
    const stubEmpty = path.resolve(STUB_EMPTY)
    const existing = config.resolve?.alias as Record<string, string | unknown> | undefined
    config.resolve = config.resolve ?? {}
    config.resolve.alias = {
      ...(existing ?? {}),
      ...Object.fromEntries(STUBBED_MODULES.map((id) => [id, stubEmpty])),
    }
    return config
  },
}

export default nextConfig
