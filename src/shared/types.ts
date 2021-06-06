/* I18n */
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

export type Review = {
  text: string;
  author?: string;
  source?: string;
  sourceUrl?: string;
}

export type Contributor = {
  name: string;
  role: 'Author' | 'Translator' | 'Cover artist';
};

export type Extra = {
  type: 'youtube',
  title: string;
  href: string;
}

export type Product = {
  ean: number;
  title: string;
  slug: string;
  author: string;
  contributors?: Contributor[];
  coverImage?: string;
  releaseDate?: Date;
  pageCount?: number;
  originalLanguage?: 'en' | 'fr' | 'de';
  backCoverText?: string;
  price?: number;
  buyLink?: string;
  extras?: Extra[];
  reviews?: Review[];
};

export type Catalog = {
  global?: {
    buyLink?: string;
  };
  products: Product[];
};
