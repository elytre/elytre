import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Product from './Product';

describe('Product', () => {
  it('renders a single Product', () => {
    const { container } = render(
      <Product
        ean={9781234567811}
        title="La Tarte et le terroir"
        slug="la-tarte-et-le-terroir"
        author="Michelou Elbecq"
      />,
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="Product"
        >
          <h1
            class="Product-title"
          >
            La Tarte et le terroir
          </h1>
          <p
            class="Product-author"
          >
            by 
            <span
              class="Product-author-name"
            >
              Michelou Elbecq
            </span>
          </p>
          <p
            class="Product-isbn"
          >
            ISBN: 
            9781234567811
          </p>
        </div>
      </div>
    `);
  });

  it('renders a single Product with a link', () => {
    const { container } = render(
      <BrowserRouter>
        <Product
          ean={9781234567811}
          title="La Tarte et le terroir"
          slug="la-tarte-et-le-terroir"
          author="Michelou Elbecq"
          withLink={true}
        />
      </BrowserRouter>,
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="Product"
        >
          <h1
            class="Product-title"
          >
            <a
              href="/p/la-tarte-et-le-terroir"
            >
              La Tarte et le terroir
            </a>
          </h1>
          <p
            class="Product-author"
          >
            by 
            <span
              class="Product-author-name"
            >
              Michelou Elbecq
            </span>
          </p>
          <p
            class="Product-isbn"
          >
            ISBN: 
            9781234567811
          </p>
        </div>
      </div>
    `);
  });

  it('renders a single Product with a cover', () => {
    const { container } = render(
      <BrowserRouter>
        <Product
          ean={9781234567811}
          title="La Tarte et le terroir"
          slug="la-tarte-et-le-terroir"
          author="Michelou Elbecq"
          coverImage="la-tarte-et-le-terroir.jpg"
        />
      </BrowserRouter>,
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="Product"
        >
          <img
            alt="La Tarte et le terroir"
            class="Product-cover-image"
            src="/la-tarte-et-le-terroir.jpg"
          />
          <h1
            class="Product-title"
          >
            La Tarte et le terroir
          </h1>
          <p
            class="Product-author"
          >
            by 
            <span
              class="Product-author-name"
            >
              Michelou Elbecq
            </span>
          </p>
          <p
            class="Product-isbn"
          >
            ISBN: 
            9781234567811
          </p>
        </div>
      </div>
    `);
  });
});
