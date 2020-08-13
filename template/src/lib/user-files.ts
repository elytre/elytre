// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import catalog from '../catalog.json';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import site from '../site.json';

// TODO: share types between template and builder
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
