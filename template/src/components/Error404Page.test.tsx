import React from 'react';
import { render } from '@testing-library/react';

import Error404Page from './Error404Page';

describe('Error404Page', () => {
  it('renders a Error404Page', () => {
    const { container } = render(<Error404Page />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="Error404Page"
        >
          <h1
            class="Error404Page-title"
          >
            Page not found
          </h1>
        </div>
      </div>
    `);
  });

  it('renders a Error404Page with a reason', () => {
    const { container } = render(<Error404Page reason="Because reasons." />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="Error404Page"
        >
          <h1
            class="Error404Page-title"
          >
            Page not found
          </h1>
          <p
            class="Error404Page-reason"
          >
            Because reasons.
          </p>
        </div>
      </div>
    `);
  });
});
