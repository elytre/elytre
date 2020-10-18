import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import MenuEntry from './MenuEntry';

describe('MenuEntry', () => {
  it('renders a MenuEntry with a local link', () => {
    const { container } = render(
      <MemoryRouter>
        <MenuEntry entry={{ label: 'About', href: '/pages/about' }} />
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <li
        class="MenuEntry"
      >
        <a
          href="/pages/about"
        >
          About
        </a>
      </li>
    `);
  });

  it('renders a MenuEntry with an external link', () => {
    const { container } = render(
      <MemoryRouter>
        <MenuEntry
          entry={{ label: 'Twitter', href: 'https://www.twitter.com/' }}
        />
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <li
        class="MenuEntry"
      >
        <a
          href="https://www.twitter.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Twitter
        </a>
      </li>
    `);
  });
});
