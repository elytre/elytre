import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';

jest.mock('../lib/user-files');

describe('Header', () => {
  it('renders a Header', () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
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
        </header>
      </div>
    `);
  });
});
