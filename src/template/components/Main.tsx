import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeView from './HomeView';
import ProductView from './ProductView';
import Error404View from './Error404View';
import SearchResultsView from './SearchResultsView';

import PageContent from '../pages/Page.js';

export default function Main(): React.ReactElement {
  return (
    <main className="Main">
      <Switch>
        <Route path="/:locale/" exact component={HomeView} />
        <Route path="/:locale/search" exact component={SearchResultsView} />
        <Route path="/:locale/p/:slug" exact component={ProductView} />
        <Route component={Error404View} />
        <Route path="/:locale/page">{PageContent}</Route>
      </Switch>
    </main>
  );
}
