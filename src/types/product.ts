export type ProductComplianceType =
  | 'standard'
  | 'regulated-inquiry'
  | 'pickup-only'
  | 'age-restricted';

export type ProductStockStatus = 'in-stock' | 'out-of-stock' | 'backorder' | 'limited';

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand?: string;
  categorySlug: string;
  subcategorySlug?: string;
  price: number;
  compareAtPrice?: number;
  currency: 'EUR';
  images: string[];
  description: string;
  shortDescription: string;
  specs: Record<string, string>;
  badges?: string[];
  stockStatus: ProductStockStatus;
  complianceType: ProductComplianceType;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  rating?: number;
  reviewCount?: number;
};
