import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeView from './HomeView';
import ProductView from './ProductView';
import SearchResultsView from './SearchResultsView';
import PageView from './PageView';
import Error404View from './Error404View';

export default function Main(): React.ReactElement {
  return (
    <main className="Main">
      <Switch>
        <Route path="/:locale/" exact component={HomeView} />
        <Route path="/:locale/search" exact component={SearchResultsView} />
        <Route path="/:locale/p/:slug" exact component={ProductView} />
        <Route path="/:locale/page/:slug" exact component={PageView} />
        <Route component={Error404View} />
      </Switch>
    </main>
  );
}
