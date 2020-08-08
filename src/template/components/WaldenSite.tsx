import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Header from './Header';
import HomePage from './HomePage';
import ProductPage from './ProductPage';

export default function WaldenSite(): React.ReactElement {
  return (
    <div className="WaldenSite">
      <Router>
        <Link to="/">
          <Header />
        </Link>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/p/:ean" component={ProductPage} />
        </Switch>
        <footer className="WaldenSite-powered-by">
          Powered by{' '}
          <a
            href="https://walden.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Walden
          </a>
        </footer>
      </Router>
    </div>
  );
}
