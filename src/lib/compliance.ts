import type { Product, ProductComplianceType } from "@/types/product";

export type ComplianceCta = {
  label: string;
  action: "add-to-cart" | "inquiry" | "contact" | "verify" | "details";
};

export function getComplianceCta(complianceType: ProductComplianceType): ComplianceCta {
  switch (complianceType) {
    case "standard":
      return { label: "Dodaj u košaricu", action: "add-to-cart" };
    case "age-restricted":
      return { label: "Potvrdi uvjete", action: "verify" };
    case "pickup-only":
      return { label: "Rezerviraj / kontaktiraj trgovinu", action: "contact" };
    case "regulated-inquiry":
      return { label: "Provjeri uvjete kupnje", action: "inquiry" };
  }
}

export function getProductCta(complianceType: ProductComplianceType): ComplianceCta {
  return getComplianceCta(complianceType);
}

export function canAddToCart(product: Product) {
  return product.complianceType === "standard";
}

export function requiresManualReview(product: Product) {
  return product.complianceType === "regulated-inquiry" || product.complianceType === "pickup-only";
}

export function getComplianceMessage(product: Product) {
  if (product.complianceNote) return product.complianceNote;

  switch (product.complianceType) {
    case "standard":
      return "Standardni proizvod dostupan je za online narudžbu.";
    case "age-restricted":
      return "Kupnja zahtijeva potvrdu punoljetnosti i prihvaćanje uvjeta kupnje.";
    case "pickup-only":
      return "Proizvod se može rezervirati online, a preuzimanje se dogovara u trgovini uz provjeru uvjeta.";
    case "regulated-inquiry":
      return "Za ovaj proizvod potrebna je provjera dokumentacije i ručna obrada upita prije kupnje.";
  }
}
