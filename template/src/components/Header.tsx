import React from 'react';
import { Link } from 'react-router-dom';

import { getSiteConfig } from '../lib/user-files';

const site = getSiteConfig();

export default function Header(): React.ReactElement {
  return (
    <header className="Header">
      <h1 className="Header-site-title">
        <Link to="/">{site.title}</Link>
      </h1>
    </header>
  );
}
