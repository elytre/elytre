import React from 'react';
import { Link, useParams } from 'react-router-dom';
import slugify from 'slugify';

import { Contributor } from '../lib/user-files';
import Trans from './Trans';

// Import all files with name matching ../*.cover.jpg pattern
require.context('../', false, /.*\.cover\.jpg$/);

export type ProductProps = {
  readonly title: string;
  readonly author: string;
  readonly contributors?: [Contributor];
  readonly ean: number;
  readonly slug: string;
  readonly coverImage?: string;
  readonly withLink?: boolean;
};

export default function Product({
  title,
  author,
  contributors,
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
          <span className="Product-author-by">
            <Trans>by</Trans>
          </span>{' '}
          <span className="Product-author-name">{author}</span>
        </p>
      </div>
      <div className="Product-details">
        {contributors
          ? contributors.map((contributor) => {
              const roleSlug = slugify(contributor.role, { lower: true });
              return (
                <p
                  className={`Product-detail detail-contributor role-${roleSlug}`}
                  key={contributor.name}
                >
                  <span className="detail-label">
                    <Trans>{contributor.role}</Trans>
                  </span>
                  <span className="detail-value">{contributor.name}</span>
                </p>
              );
            })
          : null}

        <p className="Product-detail detail-isbn">
          <span className="detail-label">ISBN</span>{' '}
          <span className="detail-value">{ean}</span>
        </p>
      </div>
    </div>
  );
}
