import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Trans from './Trans';
import useTrans from '../hooks/use-trans';

export default function SearchForm(): React.ReactElement {
  const history = useHistory();
  const [query, setQuery] = useState('');
  const { locale } = useParams<{ locale: string }>();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    history.push(`/${locale}/search?q=${query}`);
  }

  return (
    <form action="/search" className="SearchForm" onSubmit={handleSubmit}>
      <input
        name="query"
        type="search"
        placeholder={useTrans('Search…')}
        className="SearchForm-input"
        value={query}
        onChange={({ target }) => setQuery(target.value)}
      />
      <button type="submit">
        <Trans>Search</Trans>
      </button>
    </form>
  );
}
