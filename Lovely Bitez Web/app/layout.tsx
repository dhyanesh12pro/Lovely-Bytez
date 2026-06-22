import type { Metadata, Viewport } from "next";

import "./globals.css";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MobileActionBar } from "@/components/MobileActionBar";
import { site } from "@/data/site";
import { restaurantJsonLd, websiteJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  applicationName: site.name,
  title: site.pages.home.title,
  description: site.pages.home.description,
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  },
  manifest: "/manifest.webmanifest",
  category: "restaurant"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#161616",
  colorScheme: "light"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body>
        <JsonLd data={[restaurantJsonLd(), websiteJsonLd()]} />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
