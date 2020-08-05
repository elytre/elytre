import React from 'react';

import catalog from '../catalog.json';
import ProductList from './ProductList';

/**
 * Catalog renders a ProductList containing all products in catalog
 */
export default function Catalog(): React.ReactElement {
  return (
    <div className="Catalog">
      <ProductList products={catalog.products} />
    </div>
  );
}
