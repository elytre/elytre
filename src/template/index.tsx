import React from 'react';
import ReactDOM from 'react-dom';

import site from './site.json';
import catalog from './catalog.json';

import Title from './components/Title';
import Catalog from './components/Catalog';

ReactDOM.render(
  <React.StrictMode>
    <Title title={site.title} />
    <Catalog products={catalog.products} />
  </React.StrictMode>,
  document.getElementById('root'),
);
