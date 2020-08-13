import { Model, ArrayModel } from 'objectmodel';
import './errorCollector';

import ProductModel from './Product';
import { Product } from '../types';

const Catalog = new Model({
  products: ArrayModel([ProductModel]),
}).assert(({ products }) => {
  // Check for duplicate EANs
  const EANs = new Set();
  const duplicate = products.find((product: Product) => {
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

export default Catalog;
