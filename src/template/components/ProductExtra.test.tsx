import React from 'react';
import { render } from '@testing-library/react';

import ProductExtra from './ProductExtra';

describe('ProductExtra', () => {
  it('renders with an embed youtube video', () => {
    const { container } = render(
      <ProductExtra
        title={'A great video you should watch'}
        type={'youtube'}
        href={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
      />,
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          aria-label="A great video you should watch"
          class="ProductExtra ProductExtra-youtube"
        >
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
            class="ProductExtra-youtube-iframe"
            frameborder="0"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            width="560"
          />
        </div>
      </div>
    `);
  });
});
