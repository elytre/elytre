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
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    process.exit(1);
  }
  
  // Done processing
  console.log(stats.toString({
    chunks: true,  // Makes the build much quieter
    colors: true    // Shows colors in the console
  }));
});