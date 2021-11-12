import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

import ProductList from './ProductList';
import { getCatalog } from '../lib/user-files';

jest.mock('../lib/user-files');

const { products } = getCatalog();

describe('Product', () => {
  it('renders a ProductList', () => {
    render(
      <MemoryRouter initialEntries={['/en/']}>
        <Route path="/:locale/">
          <ProductList products={products} />
        </Route>
      </MemoryRouter>,
    );

    expect(screen.getByText('Le Serpent sur la butte aux pommes'));
  });
});
