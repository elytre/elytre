import React from 'react';

export type ProductProps = {
  readonly title: string;
  readonly author: string;
  readonly ean: number;
};

export default function Product({
  title,
  author,
  ean,
}: ProductProps): React.ReactElement {
  return (
    <div className="Product">
      <h1 className="Product-title">{title}</h1>
      <p className="Product-author">
        by <span className="Product-author-name">{author}</span>
      </p>
      <p className="Product-isbn">ISBN: {ean}</p>
    </div>
  );
}
