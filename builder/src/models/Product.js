const { ObjectModel } = require('objectmodel');

const Product = new ObjectModel({
  ean: /^97[8|9]\d{10}$/,
  title: String,
  author: String,
  slug: [String],
});

module.exports = Product;
