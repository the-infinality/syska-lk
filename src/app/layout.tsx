import type { Metadata } from "next";
import { DM_Sans, Italiana } from "next/font/google";
import "./globals.css";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { Preloader } from "@/components/preloader";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

const italiana = Italiana({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
  fallback: ["Didot", "Georgia", "serif"],
});

export const metadata: Metadata = {
  title: {
    default: "Syska | Electronic & Lighting Products",
    template: "%s | Syska",
  },
  description:
    "Buy Syska electronic and LED lighting products online. Energy-efficient, long-lasting lighting solutions for every room.",
  manifest: "/site.webmanifest",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#9d9e73",
      },
    ],
  },
  other: {
    "msapplication-TileColor": "#fefcf5",
    "msapplication-config": "/browserconfig.xml",
  },
};

export const viewport = {
  themeColor: "#fefcf5",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${italiana.variable} h-full antialiased`}
    >
      <body id="top" className="flex min-h-full flex-col">
        <Preloader />
        <SmoothScrollProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
