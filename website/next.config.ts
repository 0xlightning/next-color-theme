import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The dashboard is the landing page. There is deliberately no app/page.tsx —
  // it would shadow this redirect.
  async redirects() {
    return [{ source: "/", destination: "/dashboard", permanent: false }];
  },
};

export default nextConfig;
