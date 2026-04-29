import { Product, ProductComplianceType } from '@/types/product';

export type ComplianceCta = {
  label: string;
  action: 'add-to-cart' | 'inquiry' | 'contact' | 'verify' | 'details';
};

export function getProductCta(complianceType: ProductComplianceType): ComplianceCta {
  switch (complianceType) {
    case 'standard':
      return { label: 'Dodaj u košaricu', action: 'add-to-cart' };
    case 'regulated-inquiry':
      return { label: 'Provjeri uvjete kupnje', action: 'inquiry' };
    case 'pickup-only':
      return { label: 'Rezerviraj / kontaktiraj trgovinu', action: 'contact' };
    case 'age-restricted':
      return { label: 'Potvrdi uvjete', action: 'verify' };
    default:
      return { label: 'Saznaj više', action: 'details' };
  }
}
