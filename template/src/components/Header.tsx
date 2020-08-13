import React from 'react';
import { getSiteConfig } from '../lib/user-files';

const site = getSiteConfig();

export default function Header(): React.ReactElement {
  return (
    <header className="Header">
      <h1 className="Header-site-title">{site.title}</h1>
    </header>
  );
}
