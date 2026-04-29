import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { Product, ProductComplianceType, ProductStockStatus } from "@/types/product";

export type ProductSort =
  | "featured"
  | "newest"
  | "best-sellers"
  | "price-asc"
  | "price-desc"
  | "name";

export type ProductFilters = {
  query?: string;
  category?: string;
  subcategory?: string;
  brand?: string;
  availability?: ProductStockStatus;
  complianceType?: ProductComplianceType;
  useCase?: string;
  tag?: string;
  minPrice?: number;
  maxPrice?: number;
};

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter((product) => product.categorySlug === categorySlug);
}

export function getFeaturedProducts() {
  return products.filter((product) => product.isFeatured);
}

export function getBestSellers() {
  return products.filter((product) => product.isBestSeller);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter(
      (candidate) =>
        candidate.id !== product.id &&
        (candidate.categorySlug === product.categorySlug ||
          candidate.subcategorySlug === product.subcategorySlug ||
          candidate.useCases?.some((useCase) => product.useCases?.includes(useCase))),
    )
    .slice(0, limit);
}

export function filterProducts(input: Product[], filters: ProductFilters = {}) {
  const query = filters.query?.trim().toLowerCase();

  return input.filter((product) => {
    if (query) {
      const haystack = [
        product.name,
        product.brand,
        product.shortDescription,
        product.categorySlug,
        product.subcategorySlug,
        ...(product.tags ?? []),
        ...(product.useCases ?? []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      if (!haystack.includes(query)) return false;
    }

    if (filters.category && product.categorySlug !== filters.category) return false;
    if (filters.subcategory && product.subcategorySlug !== filters.subcategory) return false;
    if (filters.brand && product.brand !== filters.brand) return false;
    if (filters.availability && product.stockStatus !== filters.availability) return false;
    if (filters.complianceType && product.complianceType !== filters.complianceType) return false;
    if (filters.useCase && !product.useCases?.includes(filters.useCase)) return false;
    if (filters.tag && !product.tags?.includes(filters.tag)) return false;
    if (typeof filters.minPrice === "number" && product.price < filters.minPrice) return false;
    if (typeof filters.maxPrice === "number" && product.price > filters.maxPrice) return false;

    return true;
  });
}

export function sortProducts(input: Product[], sort: ProductSort = "featured") {
  const sorted = [...input];

  switch (sort) {
    case "newest":
      return sorted.sort((a, b) => Date.parse(b.createdAt ?? "") - Date.parse(a.createdAt ?? ""));
    case "best-sellers":
      return sorted.sort((a, b) => Number(b.isBestSeller) - Number(a.isBestSeller));
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "name":
      return sorted.sort((a, b) => a.name.localeCompare(b.name, "hr"));
    case "featured":
    default:
      return sorted.sort((a, b) => Number(b.isFeatured) - Number(a.isFeatured));
  }
}

export function getUniqueBrands(input: Product[] = products) {
  return Array.from(
    new Set(input.map((product) => product.brand).filter((brand): brand is string => Boolean(brand))),
  ).sort((a, b) => a.localeCompare(b, "hr"));
}

export function getUniqueUseCases(input: Product[] = products) {
  return Array.from(new Set(input.flatMap((product) => product.useCases ?? []))).sort((a, b) =>
    a.localeCompare(b, "hr"),
  );
}
