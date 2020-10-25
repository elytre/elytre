import React from 'react';
import { render } from '@testing-library/react';

import Error404View from './Error404View';

describe('Error404View', () => {
  it('renders a Error404View', () => {
    const { container } = render(<Error404View />);
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

  it('renders a Error404View with a reason', () => {
    const { container } = render(<Error404View reason="Because reasons." />);
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
