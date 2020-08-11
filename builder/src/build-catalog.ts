import { readFileSync, writeFileSync } from 'fs';
import { parse } from 'yaml';
import slugify from 'slugify';

import Catalog from './models/Catalog';

/**
 * Build catalog
 * @param sourceFile the catalog.yaml path
 *
 */
export default function buildCatalog(sourceFile, destFile) {
  try {
    const catalogFileContent = readFileSync(sourceFile, 'utf-8');
    const catalogFileContentParsed = parse(catalogFileContent);
    const catalog = Catalog(catalogFileContentParsed);

    // Process each product
    const products = catalog.products.map((product) => ({
      ...product,
      // Create product slug from title
      slug: slugify(product.title, { lower: true, remove: /[*+~.()'"!:@]/g }),
    }));

    const catalogContent = { ...catalog, products };
    const catalogContentAsJson = JSON.stringify(catalogContent);
    writeFileSync(destFile, catalogContentAsJson);
  } catch (error) {
    throw new Error(`Error whild building catalog: ${error.message}`);
  }
}
