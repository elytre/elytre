import React from 'react';
import { useParams } from 'react-router-dom';

import Product from './Product';

import catalog from '../catalog.json';

export default function ProductPage(): React.ReactElement | null {
  const { ean: requestEan } = useParams();
  const product = catalog.products.find(({ ean }) => ean === +requestEan);

  return (
    <div className="ProductPage">
      {product ? <Product {...product} /> : 404}
    </div>
  );
}
