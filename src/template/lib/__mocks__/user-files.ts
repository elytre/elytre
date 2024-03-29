const getSiteConfig = jest.fn().mockReturnValue({
  title: 'Les Éditions Paronymie',
  baseUrl: 'https://paronymie.elytre.app',
  menus: {
    header: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/pages/about' },
    ],
    nav: [
      { label: 'Books', href: '/pages/books' },
      { label: 'Search', href: '/search/' },
    ],
    footer: [
      { label: 'Legal notice', href: '/pages/legal-notice' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
});

const getCatalog = jest.fn().mockReturnValue({
  products: [
    {
      ean: 9781234567833,
      title: 'Le Serpent sur la butte aux pommes',
      author: 'Gérard Ferrori',
      contributors: [{ name: 'Claude Monnet', role: 'Cover artist' }],
      slug: 'le-serpent-sur-la-butte-aux-pommes',
      releaseDate: new Date('2019-04-28'),
      pageCount: 248,
      originalLanguage: 'fr',
      backCoverText: `
« *Lorem ipsum dolor sit amet, consectetur adipiscing elit.* »

Vivamus pharetra at tortor nec cursus. Proin accumsan sagittis molestie. Suspendisse euismod dolor quis elit egestas vulputate. Maecenas et nisl nec dui ullamcorper aliquam nec at erat. Praesent in nunc elit. Nam metus ante, ultrices sit amet lacinia non, feugiat vitae ligula. Mauris sollicitudin rutrum justo egestas dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi euismod justo nec ipsum dapibus varius.
Praesent ac auctor velit. Phasellus metus eros, dignissim eu ex consectetur, aliquam rutrum massa. Ut pharetra tellus tortor, eu dictum felis euismod ac. Nullam ut accumsan risus, sit amet consectetur leo. Nunc tristique posuere eros, sit amet condimentum neque consequat eu.
Proin sollicitudin, lacus eleifend ullamcorper laoreet, turpis ante aliquet arcu, sit amet consectetur libero libero in dolor.

Quisque sodales ipsum eget lectus cursus pharetra. Nam eu eleifend ipsum.`,
      price: 18.85,
    }, {
      ean: 9781234567834,
      title: 'Le Serpent sur la butte aux pommes - édition illustrée',
      slug: 'le-serpent-illustre',
      author: 'Gérard Ferrori',
      coverImage: 'cover-image.jpg',
    },
  ],
});

const getSearchIndex = jest.fn().mockReturnValueOnce({
  version: '2.3.9',
  fields: ['title'],
  fieldVectors: [
    ['title/9781234567888', [0, 1.928, 1, 1.928, 2, 1.928]],
    ['title/9781234567877', [3, 2.194, 4, 2.194]],
    ['title/9781234567866', [5, 2.194, 6, 2.194]],
    ['title/9781234567855', [7, 2.546]],
    ['title/9781234567844', [8, 1.928, 9, 1.928, 10, 1.928]],
    [
      'title/9781234567833',
      [
        11,
        0.684,
        12,
        1.298,
        13,
        1.298,
        14,
        0.684,
        15,
        1.298,
        16,
        1.298,
        17,
        1.298,
      ],
    ],
    [
      'title/9781234567822',
      [11, 0.745, 14, 0.745, 18, 1.413, 19, 1.413, 20, 1.413, 21, 1.413],
    ],
    [
      'title/9781234567811',
      [11, 0.818, 14, 0.818, 22, 1.551, 23, 1.551, 24, 1.551],
    ],
  ],
  invertedIndex: [
    ['au', { _index: 8, title: { 9781234567844: {} } }],
    ['aux', { _index: 16, title: { 9781234567833: {} } }],
    ['butt', { _index: 15, title: { 9781234567833: {} } }],
    ['chausson', { _index: 3, title: { 9781234567877: {} } }],
    ["d'our", { _index: 4, title: { 9781234567877: {} } }],
    ['du', { _index: 1, title: { 9781234567888: {} } }],
    ['et', { _index: 23, title: { 9781234567811: {} } }],
    ['françai', { _index: 19, title: { 9781234567822: {} } }],
    ['guerr', { _index: 21, title: { 9781234567822: {} } }],
    ['jeu', { _index: 2, title: { 9781234567888: {} } }],
    [
      'la',
      {
        _index: 14,
        title: {
          9781234567833: {},
          9781234567822: {},
          9781234567811: {},
        },
      },
    ],
    ['lard', { _index: 18, title: { 9781234567822: {} } }],
    [
      'le',
      {
        _index: 11,
        title: {
          9781234567833: {},
          9781234567822: {},
          9781234567811: {},
        },
      },
    ],
    ['l’ordur', { _index: 0, title: { 9781234567888: {} } }],
    ['mao', { _index: 10, title: { 9781234567844: {} } }],
    ['papeet', { _index: 7, title: { 9781234567855: {} } }],
    ['pendant', { _index: 20, title: { 9781234567822: {} } }],
    ['pomm', { _index: 17, title: { 9781234567833: {} } }],
    ['revoir', { _index: 9, title: { 9781234567844: {} } }],
    ['serpent', { _index: 12, title: { 9781234567833: {} } }],
    ['sol', { _index: 6, title: { 9781234567866: {} } }],
    ['sou', { _index: 5, title: { 9781234567866: {} } }],
    ['sur', { _index: 13, title: { 9781234567833: {} } }],
    ['tart', { _index: 22, title: { 9781234567811: {} } }],
    ['terroir', { _index: 24, title: { 9781234567811: {} } }],
  ],
  pipeline: ['stemmer'],
});

module.exports = { getSiteConfig, getCatalog, getSearchIndex };
