import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

import PageView from './PageView';

jest.mock('../hooks/use-custom-page');

describe('PageView', () => {
  it('renders a PageView', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/en/page/about']}>
        <Route path="/:locale/page/:slug">
          <PageView />
        </Route>
      </MemoryRouter>,
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="PageView"
        >
          <h1>
            About
          </h1>
        </div>
      </div>
    `);
  });

  it('renders a 404 page for a non-existing product', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/en/page/about-us']}>
        <Route path="/:locale/page/:slug">
          <PageView />
        </Route>
      </MemoryRouter>,
    );
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
            Cannot find a custom page with slug about-us
          </p>
        </div>
      </div>
    `);
  });
});
