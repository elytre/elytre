import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import SearchResultsPage from './SearchResultsPage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest
    .fn()
    .mockReturnValueOnce({ search: 'q=serpent' })
    .mockReturnValueOnce({ search: undefined }),
}));

jest.mock('../lib/user-files');

describe('SearchResultsPage', () => {
  it('renders a SearchResultsPage', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchResultsPage />
      </MemoryRouter>,
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="SearchResultsPage"
        >
          <h1
            class="SearchResultsPage-title"
          >
            Search Results for 
            <em>
              serpent
            </em>
          </h1>
          <div
            class="ProductList"
          >
            <div
              class="Product"
            >
              <h1
                class="Product-title"
              >
                <a
                  href="/p/le-serpent-sur-la-butte-aux-pommes"
                >
                  Le Serpent sur la butte aux pommes
                </a>
              </h1>
              <p
                class="Product-author"
              >
                by 
                <span
                  class="Product-author-name"
                >
                  Gérard Ferrori
                </span>
              </p>
              <p
                class="Product-isbn"
              >
                ISBN: 
                9781234567833
              </p>
            </div>
          </div>
        </div>
      </div>
    `);
  });

  it('renders an error when query is missing', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchResultsPage />
      </MemoryRouter>,
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="SearchResultsPage"
        >
          Missing search query
        </div>
      </div>
    `);
  });
});
