import { Index } from 'lunr';

import { Catalog, SiteConfig } from '../../../shared/types';

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
