import React from 'react';

import ProductList from './ProductList';

import catalog from '../catalog.json';

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
