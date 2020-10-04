import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import selectBrowserLanguage from '../lib/select-browser-language';

const defaultLocale = selectBrowserLanguage(window.navigator.languages);

export default function ElytreSite(): React.ReactElement {
  return (
    <div className="ElytreSite">
      <Switch>
        {/* Redirect root url to default locale */}
        <Route path="/" exact>
          <Redirect to={`/${defaultLocale}/`} /> {/* TO TEST */}
        </Route>
        {/* Render Header for every route including a locale */}
        <Route path="/:locale/">
          <Header />
          <Main />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}
