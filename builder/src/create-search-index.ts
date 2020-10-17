import lunr from 'lunr';

import { writeFileSync } from 'fs';
import { join } from 'path';

import { Catalog } from '../../shared/types';

export default function createSearchIndex(
  catalog: Catalog,
  tempDirPath: string,
): void {
  const index = lunr(function searchIndexBuilder() {
    this.ref('ean');
    this.field('title');

    catalog.products.forEach(({ ean, title }) => {
      this.add({ ean, title });
    });
  });

  const indexFileContent = JSON.stringify(index);
  writeFileSync(join(tempDirPath, 'search-index.json'), indexFileContent);
}
