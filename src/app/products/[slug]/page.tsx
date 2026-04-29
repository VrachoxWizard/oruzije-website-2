import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductClient } from "@/components/product/product-client";
import { products } from "@/data/products";
import { getProductBySlug } from "@/lib/product-utils";
import { breadcrumbJsonLd, productJsonLd } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Proizvod nije pronađen" };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | PointerShop`,
      description: product.shortDescription,
      images: product.images.slice(0, 1).map((image) => ({ url: image, alt: product.name })),
    },
  };
}

export default async function ProductPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: productJsonLd(product) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd([
            { name: "Početna", url: "/" },
            { name: "Trgovina", url: "/shop" },
            { name: product.name, url: `/products/${product.slug}` },
          ]),
        }}
      />
      <ProductClient product={product} />
    </>
  );
}
