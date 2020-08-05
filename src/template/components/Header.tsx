import React from 'react';

import site from '../site.json';

export default function Header(): React.ReactElement {
  return (
    <header className="Header">
      <h1 className="Header-site-title">{site.title}</h1>
    </header>
  );
}
