import React from 'react';
import { render } from '@testing-library/react';

import Error404View from './Error404View';

describe('Error404View', () => {
  it('renders a Error404View', () => {
    const { container } = render(<Error404View />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="Error404View"
        >
          <h1
            class="Error404View-title"
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
          class="Error404View"
        >
          <h1
            class="Error404View-title"
          >
            Page not found
          </h1>
          <p
            class="Error404View-reason"
          >
            Because reasons.
          </p>
        </div>
      </div>
    `);
  });
});
