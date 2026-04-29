import { Metadata } from "next";
import { BestSellersSection } from "@/components/sections/best-sellers-section";
import { BrandStorySection } from "@/components/sections/brand-story-section";
import { CategoryShowcase } from "@/components/sections/category-showcase";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { FaqPreviewSection } from "@/components/sections/faq-preview-section";
import { FeaturedProductsSection } from "@/components/sections/featured-products-section";
import { GuidedCollectionsSection } from "@/components/sections/guided-collections-section";
import { HeroSection } from "@/components/sections/hero-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TrustBenefitsSection } from "@/components/sections/trust-benefits-section";

export const metadata: Metadata = {
  title: "PointerShop | Oprema za lov, streljaštvo i teren",
  description:
    "Premium hrvatski ecommerce katalog za outdoor opremu, optiku, odjeću, obuću i odgovorno prikazan regulirani asortiman.",
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <CategoryShowcase />
      <FeaturedProductsSection />
      <GuidedCollectionsSection />
      <TrustBenefitsSection />
      <BrandStorySection />
      <TestimonialsSection />
      <FaqPreviewSection />
      <BestSellersSection />
      <ContactCtaSection />
    </div>
  );
}
