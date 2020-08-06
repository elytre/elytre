const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const getTempDir = require('./get-temp-dir');
const getSiteConfig = require('./get-site-config');

// Get local build directory path
const outputPath = path.join(process.cwd(), '/build');

const tempDirPath = getTempDir();
const siteConfig = getSiteConfig();

module.exports = {
  mode: 'development',
  entry: path.join(tempDirPath, '/index.tsx'),
  output: {
    filename: 'main.js',
    path: outputPath,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      templateContent: `<html>
<head>
<title>${siteConfig.title}</title>
</head>
<body>
<div id="root"></div>
</body>
</html>`,
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(path.join(tempDirPath, 'tsconfig.json')),
          },
        },
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'source-map-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'source-map',
  stats: {
    all: false,
    colors: true,
    assets: true,
    performance: true,
    publicPath: true,
    timings: true,
    warnings: true,
    errors: true,
    errorDetails: true,
  },
};
