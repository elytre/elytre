import React from 'react';
import { useParams } from 'react-router-dom';

import Product from './Product';
import Error404Page from './Error404Page';

import catalog from '../catalog.json';

export default function ProductPage(): React.ReactElement | null {
  const { slug: requestSlug } = useParams();
  const product = catalog.products.find(({ slug }) => slug === requestSlug);

  return (
    <div className="ProductPage">
      {product ? (
        <Product {...product} />
      ) : (
        <Error404Page reason={`No product found for slug ${requestSlug}`} />
      )}
    </div>
  );
}
