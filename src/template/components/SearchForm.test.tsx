import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

import SearchForm from './SearchForm';

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('SearchForm', () => {
  it('renders a SearchForm', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/en/']}>
        <Route path="/:locale/">
          <SearchForm />
        </Route>
      </MemoryRouter>,
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <form
          action="/search"
          class="SearchForm"
        >
          <input
            class="SearchForm-input"
            name="query"
            placeholder="Search…"
            type="search"
            value=""
          />
          <button
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    `);
  });

  it('redirects to search result page on form submit', () => {
    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter initialEntries={['/en/']}>
        <Route path="/:locale/">
          <SearchForm />
        </Route>
      </MemoryRouter>,
    );
    const input = getByPlaceholderText('Search…');
    const button = getByText('Search');
    fireEvent.change(input, { target: { value: 'Sous-sol' } });
    fireEvent.click(button);
    expect(mockHistoryPush).toHaveBeenCalledWith('/en/search?q=Sous-sol');
  });
});
