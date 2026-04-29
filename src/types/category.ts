export type Category = {
  id: string;
  slug: string;
  name: string;
  description?: string;
  image?: string;
  isRegulated?: boolean;
  subcategories?: Subcategory[];
};

export type Subcategory = {
  id: string;
  slug: string;
  name: string;
};
