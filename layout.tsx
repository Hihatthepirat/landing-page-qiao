import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Providers } from "@/components/Providers";
import { BackgroundOrbs } from "@/components/ui/BackgroundOrbs";

export const metadata: Metadata = {
  title: "Qiáo · 橋 — the safety bridge between Eastern and Western care",
  description:
    "Qiáo reconciles a patient's Traditional Chinese Medicine and Western Medicine records and flags dangerous herb–drug interactions the two siloed systems miss. Verified, sourced, transparent.",
  applicationName: "Qiáo",
  authors: [{ name: "Team Qiáo" }],
  keywords: [
    "TCM",
    "Western medicine",
    "drug interaction",
    "herb-drug interaction",
    "medication safety",
    "Hong Kong healthtech",
  ],
};

export const viewport: Viewport = {
  themeColor: "#faf6ef",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <BackgroundOrbs />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
