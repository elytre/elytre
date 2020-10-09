/* Site config */

type MenuEntry = {
  label: string;
  href: string;
};

export type SiteConfig = {
  title: string;
  menus?: {
    header?: MenuEntry[];
    nav?: MenuEntry[];
    footer?: MenuEntry[];
  };
};

/* Catalog */

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
