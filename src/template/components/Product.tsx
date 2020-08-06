import React from 'react';

export type ProductProps = {
  readonly title: string;
};

export default function Product({ title }: ProductProps): React.ReactElement {
  return (
    <div className="Product">
      <h1 className="Product-title">{title}</h1>
    </div>
  );
}
