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
    <div className="py-20 bg-stone-50 min-h-screen bg-texture">
      <Container>
        {category.isRegulated && (
          <div className="mb-16 p-8 bg-[var(--color-forest-950)] border-l-4 border-[var(--color-copper-500)] rounded-2xl flex items-start gap-8 relative overflow-hidden group shadow-2xl shadow-forest-950/20">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
              <ShieldAlert className="w-48 h-48 text-white" />
            </div>
            <div className="w-14 h-14 rounded-2xl bg-[var(--color-copper-500)]/10 flex items-center justify-center border border-[var(--color-copper-500)]/20 shrink-0">
              <ShieldAlert className="w-6 h-6 text-[var(--color-copper-500)]" />
            </div>
            <div className="relative z-10 flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-copper-500)]">Pravna Napomena</span>
                <div className="h-px w-8 bg-white/10" />
              </div>
              <h3 className="text-xl font-black uppercase italic tracking-tight text-white">Regulirani lovački asortiman</h3>
              <p className="text-sm text-white/40 font-medium leading-relaxed max-w-3xl">
                Kupnja artikala iz kategorije <span className="text-white italic">{category.name}</span> zahtijeva važeću zakonsku dokumentaciju (nabavna dozvola ili oružni list). 
                Reguliranu opremu je moguće rezervirati putem sustava, no preuzimanje se obavlja isključivo osobno u našoj poslovnici u Drnišu uz predočenje originalnih isprava.
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

