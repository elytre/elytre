import React from 'react';

import site from '../site.json';
import catalog from '../catalog.json';

import Title from './Title';
import Catalog from './Catalog';

export default function WaldenSite(): React.ReactElement {
  return (
    <div className="WaldenSite">
      <Title title={site.title} />
      <Catalog products={catalog.products} />
    </div>
  );
}
