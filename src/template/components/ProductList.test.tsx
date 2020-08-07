import React from 'react';
import { render } from '@testing-library/react';

import ProductList from './ProductList';

const products = [{ title: 'Au-revoir Mao' }];

describe('Product', () => {
  it('renders a ProductList', () => {
    const { container } = render(<ProductList products={products} />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="ProductList"
        >
          <div
            class="Product"
          >
            <h1
              class="Product-title"
            >
              Au-revoir Mao
            </h1>
            <p
              class="Product-author"
            >
              by 
              <span
                class="Product-author-name"
              />
            </p>
          </div>
        </div>
      </div>
    `);
  });
});
