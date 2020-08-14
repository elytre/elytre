import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

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
    const { container } = render(<SearchForm />);
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
      <MemoryRouter>
        <SearchForm />
      </MemoryRouter>,
    );
    const input = getByPlaceholderText('Search…');
    const button = getByText('Search');
    fireEvent.change(input, { target: { value: 'Sous-sol' } });
    fireEvent.click(button);
    expect(mockHistoryPush).toHaveBeenCalledWith('/search?q=Sous-sol');
  });
});
