import path from "node:path"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // The dashboard is the landing page. There is deliberately no app/page.tsx —
  // it would shadow this redirect.
  async redirects() {
    return [{ source: "/", destination: "/dashboard", permanent: false }]
  },
  webpack(config) {
    const stubEmpty = path.resolve("./src/lib/stub-empty.ts")
    const lucideStub = path.resolve("./src/lib/lucide-react.ts")
    const existing = config.resolve?.alias as Record<string, string | unknown> | undefined
    const aliases: Record<string, string> = {
      ...(existing ?? {}),
      "lucide-react": lucideStub,
      "@tabler/icons-react": stubEmpty,
      "@hugeicons/core-free-icons": stubEmpty,
      "@hugeicons/react": stubEmpty,
      "@streamdown/code": stubEmpty,
      "@tanstack/react-table": stubEmpty,
      "@vercel/analytics/react": stubEmpty,
      "fumadocs-core/breadcrumb": stubEmpty,
      "fumadocs-core/page-tree": stubEmpty,
      "fumadocs-core/search/client": stubEmpty,
      "motion/react": stubEmpty,
      "radix-ui": stubEmpty,
      "react-aria-components": stubEmpty,
      streamdown: stubEmpty,
    }
    config.resolve = config.resolve ?? {}
    config.resolve.alias = aliases
    return config
  },
}

export default nextConfig
