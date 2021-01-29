import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

import SearchResultsView from './SearchResultsView';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest
    .fn()
    .mockReturnValueOnce({ search: 'q=serpent' })
    .mockReturnValueOnce({ search: undefined }),
}));

jest.mock('../lib/user-files');

describe('SearchResultsView', () => {
  it('renders a SearchResultsView', () => {
    render(
      <MemoryRouter initialEntries={['/en']}>
        <Route path="/:locale/">
          <SearchResultsView />
        </Route>
      </MemoryRouter>,
    );

    expect(screen.getByText('Search results for')).toBeInTheDocument();
    expect(
      screen.getByText('Le Serpent sur la butte aux pommes'),
    ).toBeInTheDocument();
  });

  it('renders an error when query is missing', () => {
    render(
      <MemoryRouter initialEntries={['/en']}>
        <Route path="/:locale/">
          <SearchResultsView />
        </Route>
      </MemoryRouter>,
    );

    expect(screen.getByText('Missing search query')).toBeInTheDocument();
  });
});
