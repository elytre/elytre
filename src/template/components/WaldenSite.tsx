import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from './Header';
import HomePage from './HomePage';

export default function WaldenSite(): React.ReactElement {
  return (
    <div className="WaldenSite">
      <Router>
        <Link to="/">
          <Header />
        </Link>
        <Route path="/" exact component={HomePage} />
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
