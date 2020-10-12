import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Menu from './Menu';

const entries = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/pages/about' },
];

describe('Menu', () => {
  it('renders a Menu', () => {
    const { container } = render(
      <MemoryRouter>
        <Menu entries={entries} />
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <nav
        class="Menu"
      >
        <ul
          class="Menu-entries"
        >
          <li
            class="MenuEntry"
          >
            <a
              aria-current="page"
              class="active"
              href="/"
            >
              Home
            </a>
          </li>
          <li
            class="MenuEntry"
          >
            <a
              href="/pages/about"
            >
              About
            </a>
          </li>
        </ul>
      </nav>
    `);
  });
});
