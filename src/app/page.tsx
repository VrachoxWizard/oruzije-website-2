import { HeroSection } from "@/components/sections/hero-section";
import { CategoryShowcase } from "@/components/sections/category-showcase";
import { BestSellersSection } from "@/components/sections/best-sellers-section";
import { TrustBenefitsSection } from "@/components/sections/trust-benefits-section";
import { FeaturedProductsSection } from "@/components/sections/featured-products-section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      
      <ScrollReveal direction="up" delay={0.1}>
        <CategoryShowcase />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.2}>
        <FeaturedProductsSection />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.2}>
        <TrustBenefitsSection />
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.2}>
        <BestSellersSection />
      </ScrollReveal>
    </div>
  );
}
