import React from 'react';
import { render } from '@testing-library/react';

import Header from './Header';

describe('Product', () => {
  it('renders a Header', () => {
    const { container } = render(<Header />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <header
          class="Header"
        >
          <h1
            class="Header-site-title"
          >
            Les Éditions Paronymie
          </h1>
        </header>
      </div>
    `);
  });
});
