import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Trans from './Trans';

import Header from './Header';
import HomePage from './HomePage';
import ProductPage from './ProductPage';
import Error404Page from './Error404Page';
import SearchResultsPage from './SearchResultsPage';

export default function WaldenSite(): React.ReactElement {
  return (
    <div className="WaldenSite">
      <Router>
        {/* Redirect root url to default locale */}
        <Route path="/" exact render={() => <Redirect to={'/en/'} />} />
        {/* Render Header for every route including a locale */}
        <Route path="/:locale/" component={Header} />
        <Switch>
          <Route path="/:locale/" exact component={HomePage} />
          <Route path="/:locale/search" exact component={SearchResultsPage} />
          <Route path="/:locale/p/:slug" exact component={ProductPage} />
          <Route component={Error404Page} />
        </Switch>
        {/* Render Header for every route including a locale */}
        <Route path="/:locale/">
          <footer className="WaldenSite-powered-by">
            <Trans>Powered by</Trans>{' '}
            <a
              href="https://walden.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Walden
            </a>
          </footer>
        </Route>
      </Router>
    </div>
  );
}
