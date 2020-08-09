import React from 'react';
import { Link } from 'react-router-dom';

export type ProductProps = {
  readonly title: string;
  readonly author: string;
  readonly ean: number;
  readonly slug: string;
  readonly withLink?: boolean;
};

export default function Product({
  title,
  author,
  ean,
  slug,
  withLink = false,
}: ProductProps): React.ReactElement {
  return (
    <div className="Product">
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
