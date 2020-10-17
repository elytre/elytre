import React from 'react';

import { Product as ProductType } from '../../../shared/types';
import Product from './Product';

type ProductListProps = {
  readonly products: ProductType[];
};

export default function ProductList({
  products,
}: ProductListProps): React.ReactElement {
  return (
    <div className="ProductList">
      {products.map((product) => (
        <Product key={product.ean} product={product} withLink={true} />
      ))}
    </div>
  );
}
