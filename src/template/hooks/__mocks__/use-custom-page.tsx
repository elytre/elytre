import React from 'react';

const AboutPage = () => <h1>About</h1>;

/**
 * Mocks useCustomPage hooks, returns a page if slug === about, otherwise null
 */
export default function useCustomPage(
  slug: string,
): (() => React.ReactElement) | null {
  if (slug === 'about') {
    return AboutPage;
  }

  return null;
}
