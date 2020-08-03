import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line import/no-unresolved
import site from './site.yaml';
// eslint-disable-next-line import/no-unresolved
import catalog from './catalog.yaml';

import Title from './components/Title.jsx';
import Catalog from './components/Catalog.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Title title={site.title} />
    <Catalog products={catalog.products} />
  </React.StrictMode>,
  document.getElementById('root'),
);
