import { readFileSync, writeFileSync } from 'fs';
import { parse } from 'yaml';
import slugify from 'slugify';

import CatalogModel from './models/Catalog';
import { Catalog, Product } from './types';
import processCovers from './process-covers';

/**
 * Build catalog
 */
export default function buildCatalog(
  sourceFile: string,
  destFile: string,
  tempDirPath: string,
): Catalog {
  try {
    const catalogFileContent = readFileSync(sourceFile, 'utf-8');
    const catalogFileContentParsed = parse(catalogFileContent);
    const catalog = CatalogModel(catalogFileContentParsed);

    // Process each product
    const products = catalog.products.map((product: Product) => ({
      ...product,
      // Create product slug from title
      slug: slugify(product.title, { lower: true, remove: /[*+~.()'"!:@]/g }),
    }));

    // Process cover files
    const productsWithCovers = processCovers(products, tempDirPath);

    // Write catalog file as JSON
    const catalogContent: Catalog = {
      ...catalog,
      products: productsWithCovers,
    };
    const catalogContentAsJson = JSON.stringify(catalogContent);
    writeFileSync(destFile, catalogContentAsJson);

    return catalogContent;
  } catch (error) {
    const newError = new Error(
      `Error whild building catalog: ${error.message}`,
    );
    newError.stack = error.stack;
    throw newError;
  }
}
