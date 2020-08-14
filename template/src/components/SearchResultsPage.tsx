import React from 'react';
import { useLocation } from 'react-router-dom';
import lunr from 'lunr';

import { getSearchIndex, getCatalog } from '../lib/user-files';
import ProductList from './ProductList';

const catalog = getCatalog();
const searchIndex = getSearchIndex();
const index = lunr.Index.load(searchIndex);

export default function SearchResultsPage(): React.ReactElement {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const query = params.get('q');

  if (!query) {
    return <div className="SearchResultsPage">Missing search query</div>;
  }

  const results = index.search(query);
  const EANs = results.map((result) => result.ref);
  const products = catalog.products.filter(({ ean }) => {
    const stringEan = ean.toString();
    return EANs.includes(stringEan);
  });

  return (
    <div className="SearchResultsPage">
      <h1 className="SearchResultsPage-title">
        Search Results for <em>{query}</em>
      </h1>
      <ProductList products={products} />
    </div>
  );
}
