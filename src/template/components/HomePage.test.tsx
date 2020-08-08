import React from 'react';
import { render } from '@testing-library/react';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders a HomePage', () => {
    const { container } = render(<HomePage />);
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
                  Le Serpent sur la butte aux pommes
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
