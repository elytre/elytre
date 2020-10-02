import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

import Footer from './Footer';

describe('Footer', () => {
  it('renders a Footer', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/en/']}>
        <Route path="/:locale/">
          <Footer />
        </Route>
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <footer
        class="Footer"
      >
        <p
          class="Footer-powered-by"
        >
          Powered by
           
          <a
            href="https://elytre.app"
            rel="noopener noreferrer"
            target="_blank"
          >
            Elytre
          </a>
        </p>
      </footer>
    `);
  });
});
