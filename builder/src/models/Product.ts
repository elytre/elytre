import { Model } from 'objectmodel';

const Product = new Model({
  ean: /^97[8|9]\d{10}$/,
  title: String,
  author: String,
  slug: [String],
  coverImage: [String],
});

export default Product;
