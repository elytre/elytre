const { ObjectModel, ArrayModel } = require('objectmodel');
const Product = require('./Product');

const Catalog = new ObjectModel({
  products: ArrayModel([Product]),
});

module.exports = Catalog;
