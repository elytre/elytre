import React from 'react';

import Header from './Header';
import Catalog from './Catalog';

export default function WaldenSite(): React.ReactElement {
  return (
    <div className="WaldenSite">
      <Header />
      <Catalog />
    </div>
  );
}
