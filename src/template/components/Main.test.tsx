import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Main from './Main';

jest.mock('../lib/user-files');

describe('Main', () => {
  it('renders a HomeView component for url /', () => {
    render(
      <MemoryRouter initialEntries={['/en/']}>
        <Main />
      </MemoryRouter>,
    );

    // HomeView renders a ProductList which contains first product title
    expect(
      screen.getByText('Le Serpent sur la butte aux pommes'),
    ).toBeInTheDocument();
  });

  it('renders a SearchResultsView component for url /search', () => {
    render(
      <MemoryRouter initialEntries={['/en/search']}>
        <Main />
      </MemoryRouter>,
    );

    // SearchResultsView renders an error message by default
    expect(screen.getByText('Missing search query')).toBeInTheDocument();
  });

  it('renders a ProductView component for url /p/:slug', () => {
    render(
      <MemoryRouter
        initialEntries={['/en/p/le-serpent-sur-la-butte-aux-pommes']}
      >
        <Main />
      </MemoryRouter>,
    );

    // ProductView renders product title
    expect(
      screen.getByText('Le Serpent sur la butte aux pommes'),
    ).toBeInTheDocument();
  });

  it('renders an Error404View component for an invalid url', () => {
    render(
      <MemoryRouter initialEntries={['/en/yama-loka-terminus']}>
        <Main />
      </MemoryRouter>,
    );

    // Error404View renders an error message
    expect(screen.getByText('Page not found')).toBeInTheDocument();
  });
});
