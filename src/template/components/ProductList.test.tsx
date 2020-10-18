import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

import ProductList from './ProductList';
import { getCatalog } from '../lib/user-files';

jest.mock('../lib/user-files');

const { products } = getCatalog();

describe('Product', () => {
  it('renders a ProductList', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/en/']}>
        <Route path="/:locale/">
          <ProductList products={products} />
        </Route>
      </MemoryRouter>,
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
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
              class="Product-back-cover-text"
            >
              
      « Lorem ipsum dolor sit amet, consectetur adipiscing elit. »

      Vivamus pharetra at tortor nec cursus. Proin accumsan sagittis molestie. Suspendisse euismod dolor quis elit egestas vulputate. Maecenas et nisl nec dui ullamcorper aliquam nec at erat. Praesent in nunc elit. Nam metus ante, ultrices sit amet lacinia non, feugiat vitae ligula. Mauris sollicitudin rutrum justo egestas dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi euismod justo nec ipsum dapibus varius. 
      Praesent ac auctor velit. Phasellus metus eros, dignissim eu ex consectetur, aliquam rutrum massa. Ut pharetra tellus tortor, eu dictum felis euismod ac. Nullam ut accumsan risus, sit amet consectetur leo. Nunc tristique posuere eros, sit amet condimentum neque consequat eu. 
      Proin sollicitudin, lacus eleifend ullamcorper laoreet, turpis ante aliquet arcu, sit amet consectetur libero libero in dolor.

      Quisque sodales ipsum eget lectus cursus pharetra. Nam eu eleifend ipsum.
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
                  fr
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
});
