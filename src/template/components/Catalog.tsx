import React from 'react';

import catalog from '../catalog.json';

export default function Catalog(): React.ReactElement {
  return (
    <ul>
      {catalog.products.map(({ title }) => (
        <li key={title}>{title}</li>
      ))}
    </ul>
  );
}
