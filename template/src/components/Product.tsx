import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Trans from './Trans';

// Import all files with name matching ../*.cover.jpg pattern
require.context('../', false, /.*\.cover\.jpg$/);

export type ProductProps = {
  readonly title: string;
  readonly author: string;
  readonly ean: number;
  readonly slug: string;
  readonly coverImage?: string;
  readonly withLink?: boolean;
};

export default function Product({
  title,
  author,
  ean,
  slug,
  coverImage,
  withLink = false,
}: ProductProps): React.ReactElement {
  const { locale } = useParams<{ locale: string }>();

  return (
    <div className="Product">
      {coverImage ? (
        <div className="Product-cover">
          <img
            src={`/${coverImage}`}
            alt={title}
            className="Product-cover-image"
          />
        </div>
      ) : null}
      <div className="Product-infos">
        <h1 className="Product-title">
          {withLink ? <Link to={`/${locale}/p/${slug}`}>{title}</Link> : title}
        </h1>
        <p className="Product-author">
          <Trans>by</Trans>{' '}
          <span className="Product-author-name">{author}</span>
        </p>
        <p className="Product-isbn">ISBN: {ean}</p>
      </div>
    </div>
  );
}
