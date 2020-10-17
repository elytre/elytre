import { Catalog } from '../../../shared/types';

export default function buildCatalog(): Catalog {
  return {
    products: [
      {
        title: 'L’Ordure du jeu',
        author: 'Aymeric Buvard',
        ean: 9781234567888,
        slug: 'lordure-du-jeu',
        coverImage: 'cover-image.jpg',
      },
      {
        title: "Chaussons d'ours",
        author: 'Laetitia Mani',
        ean: 9781234567877,
        slug: 'chaussons-dours',
      },
    ],
  };
}
