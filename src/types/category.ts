export type Category = {
  id: string;
  slug: string;
  name: string;
  description?: string;
  longDescription?: string;
  image?: string;
  icon?: string;
  isRegulated?: boolean;
  complianceNote?: string;
  subcategories?: Subcategory[];
  faq?: CategoryFaq[];
  featuredCollectionSlugs?: string[];
};

export type Subcategory = {
  id: string;
  slug: string;
  name: string;
  description?: string;
};

export type CategoryFaq = {
  question: string;
  answer: string;
};
