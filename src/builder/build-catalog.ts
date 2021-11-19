import { readFileSync, writeFileSync } from 'fs';
import { parse } from 'yaml';
import slugify from 'slugify';

import CatalogModel from './models/Catalog';
import { Catalog, Product } from '../shared/types';
import processCovers from './process-covers';
import CustomError from './CustomError';

/**
 * Creates a product buy link from generic link
 */
function createBuyLink(buyLink: string, product: Product): string | undefined {
  if (!buyLink) {
    return undefined;
  }

  return buyLink.replace(':ean', product.ean.toString());
}

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

    // Validate catalog content againt against model
    const catalog = CatalogModel(catalogFileContentParsed);

    // Process each product
    const products = catalog.products.map((product: Product) => ({
      ...product,

      // Create product slug from title
      slug: slugify(product.title, { lower: true, remove: /[*+~.()'"!:@]/g }),

      // Create buy link from EAN
      buyLink: createBuyLink(catalog.global?.buyLink, product),
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
    throw new CustomError('Error while building catalog: %message%', error);
  }
}
