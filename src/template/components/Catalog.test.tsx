import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

import Catalog from './Catalog';

jest.mock('../lib/user-files');

describe('Product', () => {
  it('renders a Catalog', () => {
    render(
      <MemoryRouter initialEntries={['/en/']}>
        <Route path="/:locale/">
          <Catalog />
        </Route>
      </MemoryRouter>,
    );

    expect(screen.getByText('Le Serpent sur la butte aux pommes'));
  });
});
