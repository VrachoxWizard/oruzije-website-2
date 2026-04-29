import { Container } from "@/components/layout/container";
import { ProductGrid } from "@/components/shop/product-grid";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { notFound } from "next/navigation";
import { ShieldAlert } from "lucide-react";

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) return { title: "Not Found" };
  
  return {
    title: `${category.name} | Pointershop`,
    description: category.description,
  };
}

export default async function CategoryPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const category = categories.find((c) => c.slug === params.slug);
  
  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter(p => p.categorySlug === category.slug);

  return (
    <div className="py-12 bg-[var(--color-stone-50)] min-h-screen">
      <Container>
        {category.isRegulated && (
          <div className="mb-8 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-900">Regulirani asortiman</h3>
              <p className="text-sm text-amber-800 mt-1">
                Za kupnju proizvoda iz ove kategorije potrebna je važeća nabavna dozvola ili oružni list. 
                Prikazane artikle možete rezervirati za osobno preuzimanje u našoj trgovini u Drnišu.
              </p>
            </div>
          </div>
        )}

        <ProductGrid 
          initialProducts={categoryProducts} 
          title={category.name}
          description={category.description}
        />
      </Container>
    </div>
  );
}
