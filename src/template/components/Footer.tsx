import React from 'react';

import { getSiteConfig } from '../lib/user-files';
import Menu from './Menu';
import Trans from './Trans';

const site = getSiteConfig();

export default function Footer(): React.ReactElement {
  return (
    <footer className="Footer">
      {site.menus?.footer && <Menu entries={site.menus.footer} />}
      <p className="Footer-powered-by">
        <Trans>Powered by</Trans>{' '}
        <a href="https://elytre.app" target="_blank" rel="noopener noreferrer">
          Elytre
        </a>
      </p>
    </footer>
  );
}
