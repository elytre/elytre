const path = require('path');
const fs = require('fs-extra');
const os = require('os');
const util = require('util');
const webpack = util.promisify(require('webpack'));
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const YAML = require('yaml');

// eslint-disable-next-line no-console
console.log('Building walden site…');

// Get walden module directories paths
const modulePath = path.dirname(
  require.resolve('@iwazaru/walden/package.json'),
);
const templatePath = `${modulePath}/src/template`;

// Get local build directory path
const outputPath = `${process.cwd()}/build`;

async function build() {
  try {
    // Create temporary directory
    const tempDirPath = await fs.mkdtemp(path.join(os.tmpdir(), 'walden-'));

    // Create a symbolic link to node_modules in temporary directory
    await fs.symlink(
      path.resolve('node_modules'),
      `${tempDirPath}/node_modules`,
    );

    // Check that required site config file exists
    const siteConfigFilePath = path.resolve('./site.yaml');
    if (!(await fs.pathExists(siteConfigFilePath))) {
      throw new Error('Cannot find file site.yaml in current directory.');
    }

    // Read site config
    const siteConfigFileContent = await fs.readFile(
      siteConfigFilePath,
      'utf-8',
    );
    const siteConfig = YAML.parse(siteConfigFileContent);

    // Check that required catalog file exists
    if (!(await fs.pathExists('./catalog.yaml'))) {
      throw new Error('Cannot find file catalog.yaml in current directory.');
    }

    // Copy walden site template to local temp directory
    await fs.copy(templatePath, tempDirPath);

    // Copy site.yaml and catalog.yaml to local temp directory
    await fs.copy('./site.yaml', `${tempDirPath}/site.yaml`);
    await fs.copy('./catalog.yaml', `${tempDirPath}/catalog.yaml`);

    // Build with webpack
    const stats = await webpack({
      mode: 'development',
      entry: `${tempDirPath}/index.tsx`,
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
            test: /\.ya?ml$/,
            type: 'json',
            use: 'yaml-loader',
          },
          {
            test: /\.(tsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'ts-loader',
              options: {
                configFile: path.resolve(`${tempDirPath}/tsconfig.json`),
              },
            },
          },
          {
            enforce: 'pre',
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'source-map-loader',
          },
        ],
      },
      devtool: 'source-map',
    });

    // Done processing
    // eslint-disable-next-line no-console
    console.log(
      stats.toString({
        chunks: true, // Makes the build much quieter
        colors: true, // Shows colors in the console
      }),
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    process.exit(1);
  }
}

module.exports = build;
