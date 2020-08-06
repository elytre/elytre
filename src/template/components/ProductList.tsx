import React from 'react';

import Product, { ProductProps } from './Product';

type ProductListProps = {
  readonly products: ProductProps[];
};

export default function ProductList({
  products,
}: ProductListProps): React.ReactElement {
  return (
    <div className="ProductList">
      {products.map((product) => (
        <Product key={product.title} {...product} />
      ))}
    </div>
  );
}
