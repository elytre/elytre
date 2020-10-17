export type Locale = 'en' | 'fr';

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

export type Contributor = {
  name: string;
  role: 'Author' | 'Translator' | 'Cover artist';
};

export type Product = {
  ean: number;
  title: string;
  slug: string;
  author: string;
  contributors?: [Contributor];
  coverImage?: string;
};

export type Catalog = {
  products: Product[];
};
