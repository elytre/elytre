import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function SearchForm(): React.ReactElement {
  const history = useHistory();
  const [query, setQuery] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    history.push(`/search?q=${query}`);
  }

  return (
    <form action="/search" className="SearchForm" onSubmit={handleSubmit}>
      <input
        name="query"
        type="search"
        placeholder="Search…"
        className="SearchForm-input"
        value={query}
        onChange={({ target }) => setQuery(target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
