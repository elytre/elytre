const fs = require('fs');
const YAML = require('yaml');
const slugify = require('slugify');

const Catalog = require('../models/Catalog');

/**
 * Build catalog
 * @param sourceFile the catalog.yaml path
 *
 */
module.exports = function buildCatalog(sourceFile, destFile) {
  try {
    const catalogFileContent = fs.readFileSync(sourceFile, 'utf-8');
    const catalogFileContentParsed = YAML.parse(catalogFileContent);
    const catalog = Catalog(catalogFileContentParsed);

    // Process each product
    const products = catalog.products.map((product) => ({
      ...product,
      // Create product slug from title
      slug: slugify(product.title, { lower: true, remove: /[*+~.()'"!:@]/g }),
    }));

    const catalogContent = { ...catalog, products };
    const catalogContentAsJson = JSON.stringify(catalogContent);
    fs.writeFileSync(destFile, catalogContentAsJson);
  } catch (error) {
    throw new Error(`Error whild building catalog: ${error.message}`);
  }
};
