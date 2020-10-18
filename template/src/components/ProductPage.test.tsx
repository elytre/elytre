import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

import ProductPage from './ProductPage';

jest.mock('../lib/user-files');

describe('ProductPage', () => {
  it('renders a ProductPage', () => {
    const { container } = render(
      <MemoryRouter
        initialEntries={['/en/p/le-serpent-sur-la-butte-aux-pommes']}
      >
        <Route path="/:locale/p/:slug">
          <ProductPage />
        </Route>
      </MemoryRouter>,
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="ProductPage"
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
                Le Serpent sur la butte aux pommes
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
    `);
  });

  it('renders a 404 page for a non-existing product', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/en/p/le-sermon-sur-le-brut-de-pomme']}>
        <Route path="/:locale/p/:slug">
          <ProductPage />
        </Route>
      </MemoryRouter>,
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="ProductPage"
        >
          <div
            class="Error404Page"
          >
            <h1
              class="Error404Page-title"
            >
              Page not found
            </h1>
            <p
              class="Error404Page-reason"
            >
              No product found for slug le-sermon-sur-le-brut-de-pomme
            </p>
          </div>
        </div>
      </div>
    `);
  });
});
