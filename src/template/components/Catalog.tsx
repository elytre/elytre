import React from 'react';

import catalog from '../catalog.json';
import Product from './Product';

export default function Catalog(): React.ReactElement {
  return (
    <div className="Catalog">
      {catalog.products.map(({ title }) => (
        <Product key={title} title={title} />
      ))}
    </div>
  );
}
