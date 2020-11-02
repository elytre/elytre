import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

import ProductView from './ProductView';

jest.mock('../lib/user-files');

describe('ProductView', () => {
  it('renders a ProductView', () => {
    const { container } = render(
      <MemoryRouter
        initialEntries={['/en/p/le-serpent-sur-la-butte-aux-pommes']}
      >
        <Route path="/:locale/p/:slug">
          <ProductView />
        </Route>
      </MemoryRouter>,
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="ProductView"
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
              class="Product-back-cover-text"
            >
              <p>
                « 
                <em>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </em>
                 »
              </p>
              <p>
                Vivamus pharetra at tortor nec cursus. Proin accumsan sagittis molestie. Suspendisse euismod dolor quis elit egestas vulputate. Maecenas et nisl nec dui ullamcorper aliquam nec at erat. Praesent in nunc elit. Nam metus ante, ultrices sit amet lacinia non, feugiat vitae ligula. Mauris sollicitudin rutrum justo egestas dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi euismod justo nec ipsum dapibus varius.
      Praesent ac auctor velit. Phasellus metus eros, dignissim eu ex consectetur, aliquam rutrum massa. Ut pharetra tellus tortor, eu dictum felis euismod ac. Nullam ut accumsan risus, sit amet consectetur leo. Nunc tristique posuere eros, sit amet condimentum neque consequat eu.
      Proin sollicitudin, lacus eleifend ullamcorper laoreet, turpis ante aliquet arcu, sit amet consectetur libero libero in dolor.
              </p>
              <p>
                Quisque sodales ipsum eget lectus cursus pharetra. Nam eu eleifend ipsum.
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
                class="Product-detail detail-page-count"
              >
                <span
                  class="detail-label"
                >
                  Release date
                </span>
                 
                <span
                  class="detail-value"
                >
                  4/28/2019
                </span>
              </p>
              <p
                class="Product-detail detail-page-count"
              >
                <span
                  class="detail-label"
                >
                  Page count
                </span>
                 
                <span
                  class="detail-value"
                >
                  248
                </span>
              </p>
              <p
                class="Product-detail detail-price"
              >
                <span
                  class="detail-label"
                >
                  Price
                </span>
                 
                <span
                  class="detail-value"
                >
                  18.85
                </span>
              </p>
              <p
                class="Product-detail detail-original-language"
              >
                <span
                  class="detail-label"
                >
                  Original language
                </span>
                 
                <span
                  class="detail-value"
                >
                  French
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
          <ProductView />
        </Route>
      </MemoryRouter>,
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="ProductView"
        >
          <div
            class="Error404View"
          >
            <h1
              class="Error404View-title"
            >
              Page not found
            </h1>
            <p
              class="Error404View-reason"
            >
              No product found for slug le-sermon-sur-le-brut-de-pomme
            </p>
          </div>
        </div>
      </div>
    `);
  });
});
