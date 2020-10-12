import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

import Footer from './Footer';

jest.mock('../lib/user-files');

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
        <nav
          class="Menu"
        >
          <ul
            class="Menu-entries"
          >
            <li
              class="MenuEntry"
            >
              <a
                href="/pages/legal-notice"
              >
                Legal notice
              </a>
            </li>
            <li
              class="MenuEntry"
            >
              <a
                href="/contact/"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
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
