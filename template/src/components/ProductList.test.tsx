import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import ProductList from './ProductList';
import { getCatalog } from '../lib/user-files';

jest.mock('../lib/user-files');

const { products } = getCatalog();

describe('Product', () => {
  it('renders a ProductList', () => {
    const { container } = render(
      <BrowserRouter>
        <ProductList products={products} />
      </BrowserRouter>,
    );
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
              <a
                href="/p/le-serpent-sur-la-butte-aux-pommes"
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
    `);
  });
});
