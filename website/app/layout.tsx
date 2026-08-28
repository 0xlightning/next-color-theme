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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
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
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
