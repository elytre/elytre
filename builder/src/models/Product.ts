import { ArrayModel, Model } from 'objectmodel';

import Contributor from './Contributor';

const Product = new Model({
  ean: /^97[8|9]\d{10}$/,
  title: String,
  author: String,
  contributors: Model([ArrayModel(Contributor)]).defaultTo([]),
  slug: [String],
  coverImage: [String],
});

export default Product;
