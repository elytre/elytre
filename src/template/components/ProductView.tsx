import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Product from './Product';
import Error404View from './Error404View';

import { getCatalog, getSiteConfig } from '../lib/user-files';
import { Product as ProductType } from '../../shared/types';

const site = getSiteConfig();
const catalog = getCatalog();

type RouteProps = {
  slug: string;
};

export default function ProductView(): React.ReactElement {
  const { slug: requestSlug } = useParams<RouteProps>();
  const product = catalog.products.find(
    ({ slug }: ProductType) => slug === requestSlug,
  );

  return (
    <div className="ProductView">
      {product ? (
        <>
          <Helmet>
            <title>
              {product.title} - {site.title}
            </title>
          </Helmet>
          <Product product={product} />
        </>
      ) : (
        <Error404View reason={`No product found for slug ${requestSlug}`} />
      )}
    </div>
  );
}
