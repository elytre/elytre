import { ArrayModel, Model } from 'objectmodel';

import Contributor from './Contributor';

const Extra = new Model({
  title: String,
  type: [['youtube']],
  href: String,
});

const Review = new Model({
  text: String,
  author: [String],
  source: [String],
  sourceUrl: [String],
});

const Product = new Model({
  ean: /^97[8|9]\d{10}$/,
  title: String,
  author: String,
  contributors: Model([ArrayModel(Contributor)]).defaultTo([]),
  slug: [String],
  coverImage: [String],
  releaseDate: [String],
  pageCount: [Number],
  originalLanguage: [['en', 'fr', 'de']],
  backCoverText: [String],
  price: [Number],
  extras: Model([ArrayModel(Extra)]).defaultTo([]),
  reviews: Model([ArrayModel(Review)]).defaultTo([]),
});

export default Product;
