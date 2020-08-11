import { join } from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import getTempDir from './get-temp-dir';
import getSiteConfig from './get-site-config';
import webpack from 'webpack';

// Get local build directory path
const outputPath = join(process.cwd(), '/build');

const tempDirPath = getTempDir();
const siteConfig = getSiteConfig();

const config: webpack.Configuration = {
  mode: 'development',
  entry: join(tempDirPath, '/index.js'),
  output: {
    filename: 'main.js',
    path: outputPath,
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      templateContent: `<html>
  <head>
    <title>${siteConfig.title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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

export default config;
