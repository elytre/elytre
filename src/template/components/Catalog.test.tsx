import React from 'react';
import { render } from '@testing-library/react';

import Catalog from './Catalog';

describe('Product', () => {
  it('renders a Catalog', () => {
    const { container } = render(<Catalog />);
    expect(container).toMatchInlineSnapshot(`
      <div>
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
            </div>
          </div>
        </div>
      </div>
    `);
  });
});
