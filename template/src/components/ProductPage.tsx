import React from 'react';
import { useParams } from 'react-router-dom';

import Product, { ProductProps } from './Product';
import Error404Page from './Error404Page';

import { getCatalog } from '../lib/user-files';

const catalog = getCatalog();

export default function ProductPage(): React.ReactElement | null {
  const { slug: requestSlug } = useParams();
  const product = catalog.products.find(
    ({ slug }: ProductProps) => slug === requestSlug,
  );

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
