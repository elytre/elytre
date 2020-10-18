import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

import useTrans from './use-trans';

const UseTransExample = (): React.ReactElement => (
  <div aria-label={useTrans('Powered by')} />
);

describe('useTrans', () => {
  it('returns a translated string', () => {
    render(
      <MemoryRouter initialEntries={['/fr/']}>
        <Route path="/:locale/">
          <UseTransExample />
        </Route>
      </MemoryRouter>,
    );
    expect(screen.getByLabelText('Propulsé par')).toBeInTheDocument();
  });
});
