import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders a HomePage', () => {
    const { container } = render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>,
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
                <h1
                  class="Product-title"
                >
                  <a
                    href="/p/9781234567890"
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
                  9781234567890
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);
  });
});
