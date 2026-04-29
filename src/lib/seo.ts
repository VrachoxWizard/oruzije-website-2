import type { Category } from "@/types/category";
import type { Product } from "@/types/product";

export const siteConfig = {
  name: "PointerShop",
  url: "https://example.com",
  description: "Hrvatska specijalistička trgovina za lov, streljaštvo i outdoor opremu.",
  phone: "+385 00 000 0000",
  email: "info@example.com",
  address: "Drniš, Hrvatska",
};

export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function organizationJsonLd() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "SportingGoodsStore",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Drniš",
      addressCountry: "HR",
    },
  });
}

export function productJsonLd(product: Product) {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    brand: product.brand ? { "@type": "Brand", name: product.brand } : undefined,
    image: product.images.map((image) => `${siteConfig.url}${image}`),
    description: product.shortDescription,
    sku: product.id,
    offers: {
      "@type": "Offer",
      priceCurrency: product.currency,
      price: product.price,
      availability:
        product.stockStatus === "out-of-stock"
          ? "https://schema.org/OutOfStock"
          : "https://schema.org/InStock",
      url: `${siteConfig.url}/products/${product.slug}`,
    },
  });
}

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  });
}

export function faqJsonLd(faq: NonNullable<Category["faq"]>) {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  });
}
