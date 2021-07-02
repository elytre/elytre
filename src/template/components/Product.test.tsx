import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

import Product from './Product';

const product = {
  ean: 9781234567811,
  title: 'La Tarte et le terroir',
  slug: 'la-tarte-et-le-terroir',
  author: 'Michelou Elbecq',
  extras: [],
  reviews: [],
};

describe('Product', () => {
  it('renders a single Product', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/en/p/la-tarte-et-le-terroir']}>
        <Route path="/:locale/">
          <Product product={product} />
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
            product={{
              ...product,
              contributors: [{ name: 'Claude Monnet', role: 'Cover artist' }],
            }}
          />
        </Route>
      </MemoryRouter>,
    );
    expect(screen.getByText('Claude Monnet'),).toBeInTheDocument();
  });

  it('renders a single Product with a link', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/en/']}>
        <Route path="/:locale/">
          <Product product={product} withLink={true} />
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
            product={{ ...product, coverImage: 'la-tarte-et-le-terroir.jpg' }}
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

  it('renders a Product with an embed youtube video', () => {
    render(
      <MemoryRouter initialEntries={['/en/p/la-tarte-et-le-terroir']}>
        <Route path="/:locale/">
          <Product
            product={{
              ...product,
              extras: [
                {
                  title: 'A great video you should watch',
                  type: 'youtube',
                  href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                },
              ],
            }}
          />
        </Route>
      </MemoryRouter>,
    );

    expect(
      screen.getByLabelText('A great video you should watch'),
    ).toBeInTheDocument();
  });

  it('renders a Product with a buy button', () => {
    render(
      <MemoryRouter initialEntries={['/en/p/la-tarte-et-le-terroir']}>
        <Route path="/:locale/">
          <Product
            product={{
              ...product,
              buyLink: "https://mylocalbookshop.com/la-tarte"
            }}
          />
        </Route>
      </MemoryRouter>,
    );

    expect(screen.getByText('Buy'),).toBeInTheDocument();
  });

  it('renders a Product with a review', () => {
    render(
      <MemoryRouter initialEntries={['/en/p/la-tarte-et-le-terroir']}>
        <Route path="/:locale/">
          <Product
            product={{
              ...product,
              reviews: [
                {
                  text: 'Le crime était sur scène, le châtiment était dans la salle.',
                  author: 'Famous Reviewer',
                  source: 'Famous Reviewer\'s blog',
                  sourceUrl: 'https://example.net/post/51',
                },
              ],
            }}
          />
        </Route>
      </MemoryRouter>,
    );

    expect(
      screen.getByText('Le crime était sur scène, le châtiment était dans la salle.'),
    ).toBeInTheDocument();
  });
});
