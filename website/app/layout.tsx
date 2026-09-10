import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Noto_Sans,
  EB_Garamond,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

// Every family the font picker offers must be loaded here, and the CSS
// variable name must match `family` in src/registry/options.ts — a picked
// font whose variable is undefined makes `--font-sans` invalid at
// computed-value time, which silently resolves to nothing at all.
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const notoSans = Noto_Sans({ variable: "--font-noto-sans", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin"] });
const ebGaramond = EB_Garamond({ variable: "--font-eb-garamond", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Color Theme",
  description: "Live theme customizer for the shadcn dashboard preview.",
};

/**
 * Replays the preview's token CSS before first paint.
 *
 * The customizer's config lives in localStorage, so a statically prerendered
 * page cannot know it — without this, a returning user paints the default
 * theme first and their own theme one frame later. `persist()` in
 * use-design-system.tsx caches the already-built CSS beside the config, and
 * this script only copies that string into a <style>. It carries no token
 * knowledge of its own, so buildThemeVars() stays the single config->CSS
 * mapping.
 *
 * Runs on every route. On /dashboard and /creates the rules match nothing,
 * which is cheaper than gating on a pathname.
 */
const PAINT_CACHE_SCRIPT = `
try {
  var raw = localStorage.getItem("next-color-theme:create-state");
  var css = raw && JSON.parse(raw).css;
  if (css) {
    var el = document.createElement("style");
    el.id = "create-theme-vars";
    el.textContent = css;
    document.head.appendChild(el);
  }
} catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        geistSans.variable,
        geistMono.variable,
        notoSans.variable,
        inter.variable,
        jetbrainsMono.variable,
        ebGaramond.variable
      )}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: PAINT_CACHE_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
