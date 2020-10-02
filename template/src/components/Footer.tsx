import React from 'react';
import Trans from './Trans';

export default function Footer(): React.ReactElement {
  return (
    <footer className="Footer">
      <p className="Footer-powered-by">
        <Trans>Powered by</Trans>{' '}
        <a href="https://elytre.app" target="_blank" rel="noopener noreferrer">
          Elytre
        </a>
      </p>
    </footer>
  );
}
