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
                    by
                     
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
                    class="Product-contributor role-cover-artist"
                  >
                    Cover artist
                     : 
                    Claude Monnet
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
        </div>
      </div>
    `);
  });
});
