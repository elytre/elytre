import React from 'react';
import { render } from '@testing-library/react';

import WaldenSite from './WaldenSite';

jest.mock('../lib/user-files');

describe('Product', () => {
  it('renders a WaldenSite component', () => {
    const { container } = render(<WaldenSite />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="WaldenSite"
        >
          <header
            class="Header"
          >
            <h1
              class="Header-site-title"
            >
              <a
                href="/"
              >
                Les Éditions Paronymie
              </a>
            </h1>
          </header>
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
          </div>
          <footer
            class="WaldenSite-powered-by"
          >
            Powered by
             
            <a
              href="https://walden.app"
              rel="noopener noreferrer"
              target="_blank"
            >
              Walden
            </a>
          </footer>
        </div>
      </div>
    `);
  });
});
