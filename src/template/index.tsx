import React from 'react';
import ReactDOM from 'react-dom';

// @ts-ignore
import site from './site.yaml';
// @ts-ignore
import catalog from './catalog.yaml';

import Title from './components/Title';
import Catalog from './components/Catalog';

ReactDOM.render(
  <React.StrictMode>
    <Title title={site.title} />
    <Catalog products={catalog.products} />
  </React.StrictMode>,
  document.getElementById('root'),
);
