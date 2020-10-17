import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

import HomePage from './HomePage';

jest.mock('../lib/user-files');

describe('HomePage', () => {
  it('renders a HomePage', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/en/']}>
        <Route path="/:locale/">
          <HomePage />
        </Route>
      </MemoryRouter>,
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="HomePage"
        >
          <div
            class="Catalog"
          >
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
      </div>
    `);
  });
});
