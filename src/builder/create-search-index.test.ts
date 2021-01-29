import * as fs from 'fs';

import createSearchIndex from './create-search-index';
import buildCatalog from './build-catalog';

jest.mock('fs');
jest.mock('./build-catalog');

jest.mock('lunr', () => ({
  __esModule: true,
  ref: jest.fn(),
  default: function lunr(searchIndexBuilderFunction: () => void) {
    const index = [];
    const add = (entry) => index.push(entry);
    const builder = { ref: jest.fn(), field: jest.fn(), add };
    searchIndexBuilderFunction.call(builder);
    return index;
  },
}));

describe('createSearchIndex', () => {
  it('creates a search index', () => {
    const writeFileSync = jest.spyOn(fs, 'writeFileSync');

    const catalog = {
      products: [
        {
          ean: 9781234567890,
          title: 'Les cubes du jour',
          slug: 'les-cubes-du-jour',
          author: 'Voris Bian',
        },
      ],
    };

    createSearchIndex(catalog, '/tmp/');

    expect(writeFileSync).toHaveBeenCalledWith(
      '/tmp/search-index.json',
      '[{"ean":9781234567890,"title":"Les cubes du jour","author":"Voris Bian"}]',
    );
  });
});
