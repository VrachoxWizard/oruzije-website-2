import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { ComparisonBar } from "@/components/product/comparison-bar";
import { organizationJsonLd, siteConfig } from "@/lib/seo";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "PointerShop | Profesionalna oprema za lov, streljaštvo i teren",
    template: "%s | PointerShop",
  },
  description:
    "Premium hrvatski katalog opreme za lov, streljaštvo i boravak na terenu, uz stručnu podršku i jasne uvjete kupnje reguliranog asortimana.",
  openGraph: {
    title: "PointerShop",
    description:
      "Oprema za lov, streljaštvo i teren uz stručnu podršku, fizičku trgovinu u Drnišu i odgovorne kupovne tokove.",
    locale: "hr_HR",
    siteName: "PointerShop",
    type: "website",
  },
};

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: organizationJsonLd() }}
        />
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
