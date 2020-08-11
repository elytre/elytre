const { ObjectModel } = require('objectmodel');

const Site = new ObjectModel({
  title: String,
});

module.exports = Site;
