import React from 'react';
import { Link } from 'react-router-dom';

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
  return (
    <div className="Product">
      {coverImage ? (
        <img
          src={`/${coverImage}`}
          alt={title}
          className="Product-cover-image"
        />
      ) : null}
      <h1 className="Product-title">
        {withLink ? <Link to={`/p/${slug}`}>{title}</Link> : title}
      </h1>
      <p className="Product-author">
        by <span className="Product-author-name">{author}</span>
      </p>
      <p className="Product-isbn">ISBN: {ean}</p>
    </div>
  );
}
