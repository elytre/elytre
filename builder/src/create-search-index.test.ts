import * as fs from 'fs';

import createSearchIndex from './create-search-index';
import buildCatalog from './build-catalog';

jest.mock('fs');
jest.mock('./build-catalog');

jest.mock('lunr', () => ({
  __esModule: true,
  ref: jest.fn(),
  default: function lunr(searchIndexBuilderFunction: () => void) {
    const builder = { ref: jest.fn(), field: jest.fn(), add: jest.fn() };
    searchIndexBuilderFunction.call(builder);
    return { search: 'index' };
  },
}));

describe('createSearchIndex', () => {
  it('creates a search index', () => {
    const writeFileSync = jest.spyOn(fs, 'writeFileSync');

    const catalog = buildCatalog('catalog.yaml', 'catalog.json', '/tmp/');

    createSearchIndex(catalog, '/tmp/');

    expect(writeFileSync).toHaveBeenCalledWith(
      '/tmp/search-index.json',
      '{"search":"index"}',
    );
  });
});
