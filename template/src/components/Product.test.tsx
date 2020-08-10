import React from 'react';
import { render } from '@testing-library/react';

import Product from './Product';

describe('Product', () => {
  it('renders a single Product', () => {
    const { container } = render(<Product title="La Tarte et le terroir" />);
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
            />
          </p>
          <p
            class="Product-isbn"
          >
            ISBN: 
          </p>
        </div>
      </div>
    `);
  });
});
