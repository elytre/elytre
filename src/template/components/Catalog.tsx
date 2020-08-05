import React from 'react';

type Product = {
  title: string;
};

type CatalogProps = {
  products: Product[];
};

export default function Catalog({ products }: CatalogProps) {
  return (
    <ul>
      {products.map(({ title }) => (
        <li key={title}>{title}</li>
      ))}
    </ul>
  );
}
