import React from 'react';
import { render } from '@testing-library/react';

import ProductReview from './ProductReview';

describe('ProductReview', () => {
  it('renders with a text-only review', () => {
    const { container } = render(
      <ProductReview
        text={'Le crime était sur scène, le chatiment était dans la salle.'}
      />,
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <figure
          class="ProductReview"
        >
          <blockquote
            class="ProductReview-content"
          >
            <p>
              Le crime était sur scène, le chatiment était dans la salle.
            </p>
          </blockquote>
        </figure>
      </div>
    `);
  });

  it('renders with a review with a source url', () => {
    const { container } = render(
      <ProductReview
        text={'Le crime était sur scène, le chatiment était dans la salle.'}
        sourceUrl={'https://example.net/post/37'}
      />,
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <figure
          class="ProductReview"
        >
          <blockquote
            cite="https://example.net/post/37"
            class="ProductReview-content"
          >
            <p>
              Le crime était sur scène, le chatiment était dans la salle.
            </p>
          </blockquote>
        </figure>
      </div>
    `);
  });

  it('renders with a review with an author and a source', () => {
    const { container } = render(
      <ProductReview
        text={'Le crime était sur scène, le chatiment était dans la salle.'}
        author={'Famous Reviewer'}
        source={"Famous Reviewer's blog"}
      />,
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <figure
          class="ProductReview"
        >
          <blockquote
            class="ProductReview-content"
          >
            <p>
              Le crime était sur scène, le chatiment était dans la salle.
            </p>
          </blockquote>
          <figcaption
            class="ProductReview-author-and-source"
          >
            <span
              class="ProductReview-author"
            >
              Famous Reviewer
            </span>
            ,
             
            <span
              class="ProductReview-source"
            >
              Famous Reviewer's blog
            </span>
          </figcaption>
        </figure>
      </div>
    `);
  });

  it('renders with a review with an author', () => {
    const { container } = render(
      <ProductReview
        text={'Le crime était sur scène, le chatiment était dans la salle.'}
        author={'Famous Reviewer'}
      />,
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <figure
          class="ProductReview"
        >
          <blockquote
            class="ProductReview-content"
          >
            <p>
              Le crime était sur scène, le chatiment était dans la salle.
            </p>
          </blockquote>
          <figcaption
            class="ProductReview-author-and-source"
          >
            <span
              class="ProductReview-author"
            >
              Famous Reviewer
            </span>
          </figcaption>
        </figure>
      </div>
    `);
  });

  it('renders with a review with a source', () => {
    const { container } = render(
      <ProductReview
        text={'Le crime était sur scène, le chatiment était dans la salle.'}
        source={"Famous Reviewer's blog"}
      />,
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <figure
          class="ProductReview"
        >
          <blockquote
            class="ProductReview-content"
          >
            <p>
              Le crime était sur scène, le chatiment était dans la salle.
            </p>
          </blockquote>
          <figcaption
            class="ProductReview-author-and-source"
          >
            <span
              class="ProductReview-source"
            >
              Famous Reviewer's blog
            </span>
          </figcaption>
        </figure>
      </div>
    `);
  });

  it('renders with a review with all props', () => {
    const { container } = render(
      <ProductReview
        text={'Le crime était sur scène, le chatiment était dans la salle.'}
        author={'Famous Reviewer'}
        source={"Famous Reviewer's blog"}
        sourceUrl={'https://example.net/post/37'}
      />,
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <figure
          class="ProductReview"
        >
          <blockquote
            cite="https://example.net/post/37"
            class="ProductReview-content"
          >
            <p>
              Le crime était sur scène, le chatiment était dans la salle.
            </p>
          </blockquote>
          <figcaption
            class="ProductReview-author-and-source"
          >
            <span
              class="ProductReview-author"
            >
              Famous Reviewer
            </span>
            ,
             
            <span
              class="ProductReview-source"
            >
              <a
                href="https://example.net/post/37"
              >
                Famous Reviewer's blog
              </a>
            </span>
          </figcaption>
        </figure>
      </div>
    `);
  });
});
