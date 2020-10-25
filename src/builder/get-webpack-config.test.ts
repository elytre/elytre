import getWebpackConfig from './get-webpack-config';

describe('getWebpackConfig', () => {
  it('returns the webpack config', () => {
    const webpackConfig = getWebpackConfig('/tmp/dir/', {
      title: 'Les Éditions Paronymie',
    });

    // expect(pathExistsSync).toHaveBeenCalledWith(`${process.cwd()}/site.yaml`);
    expect(webpackConfig).toMatchInlineSnapshot(`
      Object {
        "devtool": "source-map",
        "entry": "/tmp/dir/index.js",
        "mode": "development",
        "module": Object {
          "rules": Array [
            Object {
              "exclude": /node_modules/,
              "test": /\\\\\\.\\(js\\|jsx\\)\\$/,
              "use": Object {
                "loader": "babel-loader",
                "options": Object {
                  "presets": Array [
                    "@babel/preset-react",
                  ],
                },
              },
            },
            Object {
              "test": /\\\\\\.mdx\\?\\$/,
              "use": Array [
                Object {
                  "loader": "babel-loader",
                  "options": Object {
                    "presets": Array [
                      "@babel/env",
                      "@babel/react",
                    ],
                  },
                },
                "@mdx-js/loader",
              ],
            },
            Object {
              "test": /\\\\\\.css\\$/,
              "use": Array [
                "style-loader",
                "css-loader",
              ],
            },
            Object {
              "loader": "file-loader",
              "options": Object {
                "name": "[name].[ext]",
              },
              "test": /\\(\\\\\\.jpg\\|\\\\\\.png\\)\\$/,
            },
          ],
        },
        "output": Object {
          "filename": "main.js",
          "path": "/Users/clement/dev/elytre/elytre/build",
          "publicPath": "/",
        },
        "plugins": Array [
          CleanWebpackPlugin {
            "apply": [Function],
            "cleanAfterEveryBuildPatterns": Array [],
            "cleanOnceBeforeBuildPatterns": Array [
              "**/*",
            ],
            "cleanStaleWebpackAssets": true,
            "currentAssets": Array [],
            "dangerouslyAllowCleanPatternsOutsideProject": false,
            "dry": false,
            "handleDone": [Function],
            "handleInitial": [Function],
            "initialClean": false,
            "outputPath": "",
            "protectWebpackAssets": true,
            "removeFiles": [Function],
            "verbose": false,
          },
          HtmlWebpackPlugin {
            "assetJson": undefined,
            "childCompilerHash": undefined,
            "hash": undefined,
            "options": Object {
              "base": false,
              "cache": true,
              "chunks": "all",
              "chunksSortMode": "auto",
              "compile": true,
              "excludeChunks": Array [],
              "favicon": false,
              "filename": "index.html",
              "hash": false,
              "inject": "body",
              "meta": Object {},
              "minify": "auto",
              "publicPath": "auto",
              "scriptLoading": "blocking",
              "showErrors": true,
              "template": "auto",
              "templateContent": "<html>
          <head>
            <title>Les Éditions Paronymie</title>
            <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1.0\\">
          </head>
          <body>
            <div id=\\"root\\"></div>
          </body>
        </html>",
              "templateParameters": [Function],
              "title": "Webpack App",
              "xhtml": false,
            },
            "version": 4,
          },
        ],
        "resolve": Object {
          "extensions": Array [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
          ],
        },
        "stats": Object {
          "all": false,
          "assets": true,
          "colors": true,
          "errorDetails": true,
          "errors": true,
          "performance": true,
          "publicPath": true,
          "timings": true,
          "warnings": true,
        },
      }
    `);
  });
});
