import { join } from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import { SiteConfig } from '../shared/types';

// Get local build directory path
const outputPath = join(process.cwd(), '/build');

export default function getWebpackConfig(
  tempDirPath: string,
  siteConfig: SiteConfig,
): webpack.Configuration {
  return {
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
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react'],
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /(\.jpg|\.png)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
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
}
