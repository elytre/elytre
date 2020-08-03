import React from 'react';

export default function Catalog({ products }) {
  return (
    <ul>
      {products.map(({ title }) => (
        <li key={title}>{title}</li>
      ))}
    </ul>
  );
}
