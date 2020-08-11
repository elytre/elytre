import { ObjectModel } from 'objectmodel';

const Product = new ObjectModel({
  ean: /^97[8|9]\d{10}$/,
  title: String,
  author: String,
  slug: [String],
});

export default Product;
