import React from 'react';
import { useLocation } from 'react-router-dom';
import lunr from 'lunr';

import { getSearchIndex, getCatalog } from '../lib/user-files';
import ProductList from './ProductList';
import Trans from './Trans';

const catalog = getCatalog();
const searchIndex = getSearchIndex();
const index = lunr.Index.load(searchIndex);

export default function SearchResultsView(): React.ReactElement {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const query = params.get('q');

  if (!query) {
    return (
      <div className="SearchResultsView">
        <Trans>Missing search query</Trans>
      </div>
    );
  }

  const results = index.search(query);
  const EANs = results.map((result) => result.ref);
  const products = catalog.products.filter(({ ean }) => {
    const stringEan = ean.toString();
    return EANs.includes(stringEan);
  });

  return (
    <div className="SearchResultsView">
      <h1 className="SearchResultsView-title">
        <Trans>Search results for</Trans> <em>{query}</em>
      </h1>
      <ProductList products={products} />
    </div>
  );
}
