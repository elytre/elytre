import React from 'react';

export type ProductProps = {
  readonly title: string;
  readonly author: string;
};

export default function Product({
  title,
  author,
}: ProductProps): React.ReactElement {
  return (
    <div className="Product">
      <h1 className="Product-title">{title}</h1>
      <p className="Product-author">
        by <span className="Product-author-name">{author}</span>
      </p>
    </div>
  );
}
