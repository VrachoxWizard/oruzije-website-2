import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pointershop | Profesionalna oprema za lov i streljaštvo",
  description: "Vrhunska oprema za lov, streljaštvo i boravak u prirodi. Oružje, streljivo, optika, odjeća i obuća. Fizička trgovina u Drnišu.",
};

import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { ComparisonBar } from "@/components/product/comparison-bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative bg-[var(--background)]">
        <SiteHeader />
        <main className="flex-1 flex flex-col">{children}</main>
        <SiteFooter />
        <CartDrawer />
        <ScrollToTop />
        <ComparisonBar />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
