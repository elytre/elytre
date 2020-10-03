import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

import Header from './Header';

jest.mock('../lib/user-files');

describe('Header', () => {
  it('renders a Header', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/en/']}>
        <Route path="/:locale/">
          <Header />
        </Route>
      </MemoryRouter>,
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <header
          class="Header"
        >
          <h1
            class="Header-site-title"
          >
            <a
              href="/"
            >
              Les Éditions Paronymie
            </a>
          </h1>
          <form
            action="/search"
            class="SearchForm"
          >
            <input
              class="SearchForm-input"
              name="query"
              placeholder="Search…"
              type="search"
              value=""
            />
            <button
              type="submit"
            >
              Search
            </button>
          </form>
          <nav
            class="Menu"
          >
            <ul
              class="Menu-entries"
            >
              <li
                class="Menu-entry"
              >
                <a
                  aria-current="page"
                  class="active"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li
                class="Menu-entry"
              >
                <a
                  href="/pages/about"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    `);
  });
});
