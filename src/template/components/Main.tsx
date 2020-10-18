import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import ProductPage from './ProductPage';
import Error404Page from './Error404Page';
import SearchResultsPage from './SearchResultsPage';

export default function Main(): React.ReactElement {
  return (
    <main className="Main">
      <Switch>
        <Route path="/:locale/" exact component={HomePage} />
        <Route path="/:locale/search" exact component={SearchResultsPage} />
        <Route path="/:locale/p/:slug" exact component={ProductPage} />
        <Route component={Error404Page} />
      </Switch>
    </main>
  );
}
