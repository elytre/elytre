import { join } from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import { SiteConfig } from '../shared/types';

// Get local build directory path
const outputPath = join(process.cwd(), '/build');

type WebpackMode = webpack.Configuration['mode'];

export default function getWebpackConfig(
  tempDirPath: string,
  siteConfig: SiteConfig,
  mode: WebpackMode,
): webpack.Configuration {
  const prodConfig = {
    mode: 'production' as WebpackMode,
  };
  const devConfig = {
    mode: 'development' as WebpackMode,
    devtool: 'source-map',
  };

  const configToUse = mode === 'development' ? devConfig : prodConfig;

  return {
    ...configToUse,
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
          test: /\.mdx?$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/env', '@babel/react'],
              },
            },
            '@mdx-js/loader',
          ],
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
