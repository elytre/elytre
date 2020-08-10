const { Model, ArrayModel } = require('objectmodel');
require('./errorCollector');

const Product = require('./Product');

const Catalog = new Model({
  products: ArrayModel([Product]),
}).assert(({ products }) => {
  // Check for duplicate EANs
  const EANs = new Set();
  const duplicate = products.find((product) => {
    if (EANs.has(product.ean)) {
      return true;
    }
    EANs.add(product.ean);
    return false;
  });
  if (duplicate) {
    throw new Error(`Duplicate EAN ${duplicate.ean}`);
  }
  return true;
}, 'EAN must be unique for each product in all catalog');

module.exports = Catalog;
