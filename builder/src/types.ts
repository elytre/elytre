export type SiteConfig = {
  title: string;
};

export type Product = {
  ean: number;
  title: string;
  slug: string;
  author: string;
  coverImage?: string;
};

export type Catalog = {
  products: Product[];
};
