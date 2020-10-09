import { Index } from 'lunr';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import catalog from '../catalog.json';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import site from '../site.json';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import searchIndex from '../search-index.json';

// TODO: share types between template and builder
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

/**
 * This imports the user's JSON config files (converted from YAML)
 * These files are added at build and thus not present in the source code
 */
export function getSiteConfig(): SiteConfig {
  return site;
}

export function getCatalog(): Catalog {
  return catalog;
}

export function getSearchIndex(): Index {
  return searchIndex;
}
