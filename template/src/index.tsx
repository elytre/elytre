import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import ElytreSite from './components/ElytreSite';

import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ElytreSite />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
