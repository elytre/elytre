import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ElytreSite from './ElytreSite';

jest.mock('../lib/user-files');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Redirect: jest.fn(({ to }) => `Redirected to ${to}`),
}));

describe('ElytreSite', () => {
  it('redirects to /en/ if url contains no locale', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ElytreSite />
      </MemoryRouter>,
    );

    expect(screen.getByText('Redirected to /en/')).toBeInTheDocument();
  });

  it('renders Header, Main, and Footer components', () => {
    render(
      <MemoryRouter initialEntries={['/en/']}>
        <ElytreSite />
      </MemoryRouter>,
    );

    // Expect component to render Header (containing site title)
    expect(screen.getByText('Les Éditions Paronymie')).toBeInTheDocument();

    // Expect component to render nav Menu (containing first entry)
    expect(screen.getByText('Books')).toBeInTheDocument();

    // Expect component to render Main (which, by default, renders home page,
    // containing a product list with first product)
    expect(
      screen.getByText('Le Serpent sur la butte aux pommes'),
    ).toBeInTheDocument();

    // Expect component to render Footer (which contains powered by message)
    expect(screen.getByText('Powered by')).toBeInTheDocument();
  });
});
