import * as fs from 'fs';

import buildCatalog from './build-catalog';

jest.mock('fs');
jest.mock('./process-covers');

describe('buildCatalog', () => {
  it('read yaml file, write json file and return a built catalog', () => {
    const readFileSync = jest.spyOn(fs, 'readFileSync').mockImplementationOnce(
      () => `
global:
  buyLink: https://www.amazingbookstore.com/isbn/:ean
products:
  - title: L’Ordure du jeu
    author: Aymeric Buvard
    ean: 9781234567888
  - title: Chaussons d'ours
    author: Laetitia Mani
    ean: 9781234567877
    contributors:
    - name: Claude Monet
      role: Cover artist # or "Author" or "Translator" or "Photographer"
    releaseDate: 2021-01-04
    pageCount: 516
    originalLanguage: fr
    backCoverText: |
      « Lorem ipsum dolor sit amet, consectetur adipiscing elit. »

      Vivamus pharetra at tortor nec cursus. Proin accumsan sagittis molestie. Suspendisse euismod dolor quis elit egestas vulputate. Maecenas et nisl nec dui ullamcorper aliquam nec at erat. Praesent in nunc elit. Nam metus ante, ultrices sit amet lacinia non, feugiat vitae ligula. Mauris sollicitudin rutrum justo egestas dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi euismod justo nec ipsum dapibus varius. 
      Praesent ac auctor velit. Phasellus metus eros, dignissim eu ex consectetur, aliquam rutrum massa. Ut pharetra tellus tortor, eu dictum felis euismod ac. Nullam ut accumsan risus, sit amet consectetur leo. Nunc tristique posuere eros, sit amet condimentum neque consequat eu. 
      Proin sollicitudin, lacus eleifend ullamcorper laoreet, turpis ante aliquet arcu, sit amet consectetur libero libero in dolor.

      Quisque sodales ipsum eget lectus cursus pharetra. Nam eu eleifend ipsum.
    price: 19.90
    reviews:
      - text: Un très grand talent de la littérature poire.
        author: Mélodie
        source: Librairie L'Arbre à Nèfles – Paris
        sourceUrl: https://www.arbreanefles.com
`,
    );
    const writeFileSync = jest.spyOn(fs, 'writeFileSync');

    const catalog = buildCatalog('catalog.yaml', 'catalog.json', '/tmp/');

    expect(readFileSync).toHaveBeenCalledWith('catalog.yaml', 'utf-8');
    expect(writeFileSync).toHaveBeenCalledWith(
      'catalog.json',
      '{"global":{"buyLink":"https://www.amazingbookstore.com/isbn/:ean"},"products":[{"title":"L’Ordure du jeu","author":"Aymeric Buvard","ean":9781234567888,"slug":"lordure-du-jeu","buyLink":"https://www.amazingbookstore.com/isbn/9781234567888","coverImage":"cover-image.jpg"},{"title":"Chaussons d\'ours","author":"Laetitia Mani","ean":9781234567877,"contributors":[{"name":"Claude Monet","role":"Cover artist"}],"releaseDate":"2021-01-04","pageCount":516,"originalLanguage":"fr","backCoverText":"« Lorem ipsum dolor sit amet, consectetur adipiscing elit. »\\n\\nVivamus pharetra at tortor nec cursus. Proin accumsan sagittis molestie. Suspendisse euismod dolor quis elit egestas vulputate. Maecenas et nisl nec dui ullamcorper aliquam nec at erat. Praesent in nunc elit. Nam metus ante, ultrices sit amet lacinia non, feugiat vitae ligula. Mauris sollicitudin rutrum justo egestas dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi euismod justo nec ipsum dapibus varius. \\nPraesent ac auctor velit. Phasellus metus eros, dignissim eu ex consectetur, aliquam rutrum massa. Ut pharetra tellus tortor, eu dictum felis euismod ac. Nullam ut accumsan risus, sit amet consectetur leo. Nunc tristique posuere eros, sit amet condimentum neque consequat eu. \\nProin sollicitudin, lacus eleifend ullamcorper laoreet, turpis ante aliquet arcu, sit amet consectetur libero libero in dolor.\\n\\nQuisque sodales ipsum eget lectus cursus pharetra. Nam eu eleifend ipsum.\\n","price":19.9,"reviews":[{"text":"Un très grand talent de la littérature poire.","author":"Mélodie","source":"Librairie L\'Arbre à Nèfles – Paris","sourceUrl":"https://www.arbreanefles.com"}],"slug":"chaussons-dours","buyLink":"https://www.amazingbookstore.com/isbn/9781234567877"}]}',
    );
    expect(catalog).toMatchInlineSnapshot(`
      Object {
        "global": Model {
          "buyLink": "https://www.amazingbookstore.com/isbn/:ean",
        },
        "products": Array [
          Object {
            "author": "Aymeric Buvard",
            "buyLink": "https://www.amazingbookstore.com/isbn/9781234567888",
            "coverImage": "cover-image.jpg",
            "ean": 9781234567888,
            "slug": "lordure-du-jeu",
            "title": "L’Ordure du jeu",
          },
          Object {
            "author": "Laetitia Mani",
            "backCoverText": "« Lorem ipsum dolor sit amet, consectetur adipiscing elit. »

      Vivamus pharetra at tortor nec cursus. Proin accumsan sagittis molestie. Suspendisse euismod dolor quis elit egestas vulputate. Maecenas et nisl nec dui ullamcorper aliquam nec at erat. Praesent in nunc elit. Nam metus ante, ultrices sit amet lacinia non, feugiat vitae ligula. Mauris sollicitudin rutrum justo egestas dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi euismod justo nec ipsum dapibus varius. 
      Praesent ac auctor velit. Phasellus metus eros, dignissim eu ex consectetur, aliquam rutrum massa. Ut pharetra tellus tortor, eu dictum felis euismod ac. Nullam ut accumsan risus, sit amet consectetur leo. Nunc tristique posuere eros, sit amet condimentum neque consequat eu. 
      Proin sollicitudin, lacus eleifend ullamcorper laoreet, turpis ante aliquet arcu, sit amet consectetur libero libero in dolor.

      Quisque sodales ipsum eget lectus cursus pharetra. Nam eu eleifend ipsum.
      ",
            "buyLink": "https://www.amazingbookstore.com/isbn/9781234567877",
            "contributors": Array [
              Object {
                "name": "Claude Monet",
                "role": "Cover artist",
              },
            ],
            "ean": 9781234567877,
            "originalLanguage": "fr",
            "pageCount": 516,
            "price": 19.9,
            "releaseDate": "2021-01-04",
            "reviews": Array [
              Object {
                "author": "Mélodie",
                "source": "Librairie L'Arbre à Nèfles – Paris",
                "sourceUrl": "https://www.arbreanefles.com",
                "text": "Un très grand talent de la littérature poire.",
              },
            ],
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
      'Error while building catalog: expecting products[0].title to be String, got undefined',
    );
  });
});
