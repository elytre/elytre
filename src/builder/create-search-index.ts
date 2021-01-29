import lunr from 'lunr';

import { writeFileSync } from 'fs';
import { join } from 'path';

import { Catalog } from '../shared/types';

export default function createSearchIndex(
  catalog: Catalog,
  tempDirPath: string,
): void {
  const index = lunr(function searchIndexBuilder() {
    this.ref('ean');
    this.field('title');
    this.field('author');

    catalog.products.forEach(({ ean, title, author }) => {
      this.add({ ean, title, author });
    });
  });

  const indexFileContent = JSON.stringify(index);
  writeFileSync(join(tempDirPath, 'search-index.json'), indexFileContent);
}
