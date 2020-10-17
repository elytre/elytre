import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

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
      <MemoryRouter initialEntries={['/en']}>
        <Route path="/:locale/">
          <SearchResultsPage />
        </Route>
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
              <div
                class="Product-infos"
              >
                <h1
                  class="Product-title"
                >
                  <a
                    href="/en/p/le-serpent-sur-la-butte-aux-pommes"
                  >
                    Le Serpent sur la butte aux pommes
                  </a>
                </h1>
                <p
                  class="Product-author"
                >
                  <span
                    class="Product-author-by"
                  >
                    by
                  </span>
                   
                  <span
                    class="Product-author-name"
                  >
                    Gérard Ferrori
                  </span>
                </p>
              </div>
              <div
                class="Product-details"
              >
                <p
                  class="Product-detail detail-contributor role-cover-artist"
                >
                  <span
                    class="detail-label"
                  >
                    Cover artist
                  </span>
                  <span
                    class="detail-value"
                  >
                    Claude Monnet
                  </span>
                </p>
                <p
                  class="Product-detail detail-isbn"
                >
                  <span
                    class="detail-label"
                  >
                    ISBN
                  </span>
                   
                  <span
                    class="detail-value"
                  >
                    9781234567833
                  </span>
                </p>
              </div>
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
