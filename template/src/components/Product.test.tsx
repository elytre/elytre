import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

import Product from './Product';

describe('Product', () => {
  it('renders a single Product', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/en/p/la-tarte-et-le-terroir']}>
        <Route path="/:locale/">
          <Product
            ean={9781234567811}
            title="La Tarte et le terroir"
            slug="la-tarte-et-le-terroir"
            author="Michelou Elbecq"
          />
        </Route>
      </MemoryRouter>,
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="Product"
        >
          <div
            class="Product-infos"
          >
            <h1
              class="Product-title"
            >
              La Tarte et le terroir
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
                Michelou Elbecq
              </span>
            </p>
          </div>
          <div
            class="Product-details"
          >
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
                9781234567811
              </span>
            </p>
          </div>
        </div>
      </div>
    `);
  });

  it('renders a Product with contributors', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/en/p/la-tarte-et-le-terroir']}>
        <Route path="/:locale/">
          <Product
            ean={9781234567811}
            title="La Tarte et le terroir"
            slug="la-tarte-et-le-terroir"
            contributors={[{ name: 'Claude Monnet', role: 'Cover artist' }]}
            author="Michelou Elbecq"
          />
        </Route>
      </MemoryRouter>,
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="Product"
        >
          <div
            class="Product-infos"
          >
            <h1
              class="Product-title"
            >
              La Tarte et le terroir
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
                Michelou Elbecq
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
                9781234567811
              </span>
            </p>
          </div>
        </div>
      </div>
    `);
  });

  it('renders a single Product with a link', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/en/']}>
        <Route path="/:locale/">
          <Product
            ean={9781234567811}
            title="La Tarte et le terroir"
            slug="la-tarte-et-le-terroir"
            author="Michelou Elbecq"
            contributors={[{ name: 'Claude Monnet', role: 'Cover artist' }]}
            withLink={true}
          />
        </Route>
      </MemoryRouter>,
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
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
                href="/en/p/la-tarte-et-le-terroir"
              >
                La Tarte et le terroir
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
                Michelou Elbecq
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
                9781234567811
              </span>
            </p>
          </div>
        </div>
      </div>
    `);
  });

  it('renders a single Product with a cover', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/en/p/la-tarte-et-le-terroir']}>
        <Route path="/:locale/">
          <Product
            ean={9781234567811}
            title="La Tarte et le terroir"
            slug="la-tarte-et-le-terroir"
            author="Michelou Elbecq"
            contributors={[{ name: 'Claude Monnet', role: 'Cover artist' }]}
            coverImage="la-tarte-et-le-terroir.jpg"
          />
        </Route>
      </MemoryRouter>,
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="Product"
        >
          <div
            class="Product-cover"
          >
            <img
              alt="La Tarte et le terroir"
              class="Product-cover-image"
              src="/la-tarte-et-le-terroir.jpg"
            />
          </div>
          <div
            class="Product-infos"
          >
            <h1
              class="Product-title"
            >
              La Tarte et le terroir
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
                Michelou Elbecq
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
                9781234567811
              </span>
            </p>
          </div>
        </div>
      </div>
    `);
  });
});
