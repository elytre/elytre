const webpack = require('webpack');
const path = require('path');

console.log('Building walden site…');

webpack({
  entry: './src/entry.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
  },
}, (err, stats) => { // Stats Object
  if (err || stats.hasErrors()) {
    // Handle errors here
    console.error('An error has occured');
  }
  // Done processing
  console.log('Done!');
});