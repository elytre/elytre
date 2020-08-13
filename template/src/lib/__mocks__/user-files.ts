const getSiteConfig = jest.fn().mockReturnValueOnce({
  title: 'Les Éditions Paronymie',
});

const getCatalog = jest.fn().mockReturnValueOnce({
  products: [
    {
      ean: 9781234567890,
      title: 'Le Serpent sur la butte aux pommes',
      author: 'Gérard Ferrori',
      slug: 'le-serpent-sur-la-butte-aux-pommes',
    },
  ],
});

module.exports = { getSiteConfig, getCatalog };
