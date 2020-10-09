import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Menu from './Menu';
import Main from './Main';
import Footer from './Footer';

import selectBrowserLanguage from '../lib/select-browser-language';
import { getSiteConfig } from '../lib/user-files';

const defaultLocale = selectBrowserLanguage(window.navigator.languages);

const site = getSiteConfig();

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
          {site.menus?.nav && <Menu entries={site.menus.nav} />}
          <Main />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}
