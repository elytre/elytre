import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

import usePriceFormatter from './use-price-formatter';

const UsePriceExample = (): React.ReactElement => (
  <div aria-label={usePriceFormatter(19.9)} />
);

describe('useNumberFormatter', () => {
  it('formats a price in euro', () => {
    render(
      <MemoryRouter initialEntries={['/fr/']}>
        <Route path="/:locale/">
          <UsePriceExample />
        </Route>
      </MemoryRouter>,
    );
    expect(screen.getByLabelText('€19.90')).toBeInTheDocument();
  });
});
