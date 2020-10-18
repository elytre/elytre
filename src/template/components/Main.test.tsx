import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Main from './Main';

jest.mock('../lib/user-files');

describe('Main', () => {
  it('renders a HomePage component for url /', () => {
    render(
      <MemoryRouter initialEntries={['/en/']}>
        <Main />
      </MemoryRouter>,
    );

    // HomePage renders a ProductList which contains first product title
    expect(
      screen.getByText('Le Serpent sur la butte aux pommes'),
    ).toBeInTheDocument();
  });

  it('renders a SearchResultsPage component for url /search', () => {
    render(
      <MemoryRouter initialEntries={['/en/search']}>
        <Main />
      </MemoryRouter>,
    );

    // SearchResultsPage renders an error message by default
    expect(screen.getByText('Missing search query')).toBeInTheDocument();
  });

  it('renders a ProductPage component for url /p/:slug', () => {
    render(
      <MemoryRouter
        initialEntries={['/en/p/le-serpent-sur-la-butte-aux-pommes']}
      >
        <Main />
      </MemoryRouter>,
    );

    // ProductPage renders product title
    expect(
      screen.getByText('Le Serpent sur la butte aux pommes'),
    ).toBeInTheDocument();
  });

  it('renders an Error404Page component for an invalid url', () => {
    render(
      <MemoryRouter initialEntries={['/en/yama-loka-terminus']}>
        <Main />
      </MemoryRouter>,
    );

    // Error404Page renders an error message
    expect(screen.getByText('Page not found')).toBeInTheDocument();
  });
});
