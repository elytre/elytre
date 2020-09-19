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

import selectBrowserLanguage from '../lib/select-browser-language';

const defaultLocale = selectBrowserLanguage(window.navigator.languages);

export default function ElytreSite(): React.ReactElement {
  return (
    <div className="ElytreSite">
      <Router>
        {/* Redirect root url to default locale */}
        <Route path="/" exact>
          <Redirect to={`/${defaultLocale}/`} />
        </Route>
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
          <footer className="ElytreSite-powered-by">
            <Trans>Powered by</Trans>{' '}
            <a
              href="https://elytre.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Elytre
            </a>
          </footer>
        </Route>
      </Router>
    </div>
  );
}
