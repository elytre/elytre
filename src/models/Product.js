const { ObjectModel } = require('objectmodel');

const Product = new ObjectModel({
  title: String,
  author: String,
});

module.exports = Product;
