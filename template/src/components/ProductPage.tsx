import React from 'react';
import { useParams } from 'react-router-dom';

import Product from './Product';

import catalog from '../catalog.json';

export default function ProductPage(): React.ReactElement | null {
  const { slug: requestSlug } = useParams();
  const product = catalog.products.find(({ slug }) => slug === requestSlug);

  return (
    <div className="ProductPage">
      {product ? <Product {...product} /> : 404}
    </div>
  );
}
