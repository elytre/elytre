import React from 'react';

import Title from './Title';
import Catalog from './Catalog';

export default function WaldenSite(): React.ReactElement {
  return (
    <div className="WaldenSite">
      <Title />
      <Catalog />
    </div>
  );
}
