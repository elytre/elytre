import React from 'react';

import Header from './Header';
import Catalog from './Catalog';

export default function WaldenSite(): React.ReactElement {
  return (
    <div className="WaldenSite">
      <Header />
      <Catalog />
      <footer className="WaldenSite-powered-by">
        Powered by{' '}
        <a href="https://walden.app" target="_blank" rel="noopener noreferrer">
          Walden
        </a>
      </footer>
    </div>
  );
}
