import * as fs from 'fs';

import buildCatalog from './build-catalog';

jest.mock('fs');
jest.mock('./process-covers');

describe('buildCatalog', () => {
  it('read yaml file, write json file and return a built catalog', () => {
    const readFileSync = jest.spyOn(fs, 'readFileSync').mockImplementationOnce(
      () => `
products:
  - title: L’Ordure du jeu
    author: Aymeric Buvard
    ean: 9781234567888
  - title: Chaussons d'ours
    author: Laetitia Mani
    ean: 9781234567877
`,
    );
    const writeFileSync = jest.spyOn(fs, 'writeFileSync');

    const catalog = buildCatalog('catalog.yaml', 'catalog.json', '/tmp/');

    expect(readFileSync).toHaveBeenCalledWith('catalog.yaml', 'utf-8');
    expect(writeFileSync).toHaveBeenCalledWith(
      'catalog.json',
      '{"products":[{"title":"L’Ordure du jeu","author":"Aymeric Buvard","ean":9781234567888,"slug":"lordure-du-jeu","coverImage":"cover-image.jpg"},{"title":"Chaussons d\'ours","author":"Laetitia Mani","ean":9781234567877,"slug":"chaussons-dours"}]}',
    );
    expect(catalog).toMatchInlineSnapshot(`
      Object {
        "products": Array [
          Object {
            "author": "Aymeric Buvard",
            "coverImage": "cover-image.jpg",
            "ean": 9781234567888,
            "slug": "lordure-du-jeu",
            "title": "L’Ordure du jeu",
          },
          Object {
            "author": "Laetitia Mani",
            "ean": 9781234567877,
            "slug": "chaussons-dours",
            "title": "Chaussons d'ours",
          },
        ],
      }
    `);
  });

  it('throws an error if catalog contains an invalid product', () => {
    jest.spyOn(fs, 'readFileSync').mockImplementationOnce(
      () => `
products:
  - author: Aymeric Buvard
    ean: 9781234567888
`,
    );
    const tested = () => buildCatalog('catalog.yaml', 'catalog.json', '/tmp/');

    expect(tested).toThrowError(
      'Error whild building catalog: expecting products[0].title to be String, got undefined',
    );
  });
});
