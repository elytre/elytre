import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Product from './Product';
import Error404Page from './Error404Page';

import {
  Product as ProductType,
  getCatalog,
  getSiteConfig,
} from '../lib/user-files';

const site = getSiteConfig();
const catalog = getCatalog();

type RouteProps = {
  slug: string;
};

export default function ProductPage(): React.ReactElement {
  const { slug: requestSlug } = useParams<RouteProps>();
  const product = catalog.products.find(
    ({ slug }: ProductType) => slug === requestSlug,
  );

  return (
    <div className="ProductPage">
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
        <Error404Page reason={`No product found for slug ${requestSlug}`} />
      )}
    </div>
  );
}
