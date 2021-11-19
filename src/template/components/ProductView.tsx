import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Product from './Product';
import Error404View from './Error404View';

import { getCatalog, getSiteConfig } from '../lib/user-files';
import { Product as ProductType, SiteConfig } from '../../shared/types';

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
            <meta property="og:title" content={product.title} />
            <meta name="twitter:title" content={product.title} />
            <meta property="og:type" content="book" />
            <meta name="twitter:card" content="summary" />
            {_getImageMetaTag(site.baseUrl, product.coverImage)}
            <meta property="book:author" content={product.author} />
            <meta property="book:isbn" content={product.ean.toString()} />
            {product.releaseDate && (
              <meta
                property="book:release_date"
                content={product.releaseDate.toISOString().slice(0, 10)}
              />
            )}
          </Helmet>
          <Product product={product} />
        </>
      ) : (
        <Error404View reason={`No product found for slug ${requestSlug}`} />
      )}
    </div>
  );
}

function _getImageMetaTag(
  baseUrl: SiteConfig['baseUrl'],
  coverImage?: ProductType['coverImage'],
): ReactElement[] | null {
  if (typeof coverImage === 'undefined') {
    return null;
  }

  return [
    <meta property="og:image" content={`${baseUrl}/${coverImage}`} key={1} />,
    <meta name="twitter:image" content={`${baseUrl}/${coverImage}`} key={2} />,
  ];
}
