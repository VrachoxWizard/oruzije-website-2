export type ProductComplianceType =
  | "standard"
  | "regulated-inquiry"
  | "pickup-only"
  | "age-restricted";

export type ProductStockStatus = "in-stock" | "out-of-stock" | "backorder" | "limited";

export type ProductSpecificationGroup = {
  title: string;
  items: Record<string, string>;
};

export type ProductDeliveryInfo = {
  method: string;
  estimate: string;
  note?: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand?: string;
  categorySlug: string;
  subcategorySlug?: string;
  price: number;
  compareAtPrice?: number;
  currency: "EUR";
  images: string[];
  gallery?: string[];
  description: string;
  shortDescription: string;
  specs: Record<string, string>;
  groupedSpecifications?: ProductSpecificationGroup[];
  badges?: string[];
  stockStatus: ProductStockStatus;
  complianceType: ProductComplianceType;
  complianceNote?: string;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  isNew?: boolean;
  rating?: number;
  reviewCount?: number;
  tags?: string[];
  useCases?: string[];
  deliveryInfo?: ProductDeliveryInfo;
  createdAt?: string;
};
