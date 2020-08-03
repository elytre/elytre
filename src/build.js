const path = require('path');
const fs = require('fs-extra');
const os = require('os');
const util = require('util');
const webpack = util.promisify(require('webpack'));
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// eslint-disable-next-line no-console
console.log('Building walden site…');

// Get walden module directories paths
const modulePath = path.dirname(
  require.resolve('@iwazaru/walden/package.json'),
);
const sitePath = `${modulePath}/src/site`;

// Get local build directory path
const outputPath = `${process.cwd()}/build`;

async function build() {
  try {
    // Create temporary folder
    const tempDirPath = await fs.mkdtemp(path.join(os.tmpdir(), 'walden-'));

    // Check that required site config file exists
    const siteConfig = path.resolve('./site.yaml');
    if (!(await fs.pathExists(siteConfig))) {
      throw new Error('Cannot find file site.yaml in current directory.');
    }

    // Check that required catalog file exists
    if (!(await fs.pathExists('./catalog.yaml'))) {
      throw new Error('Cannot find file catalog.yaml in current directory.');
    }

    // Copy walden site template to local temp directory
    await fs.copy(sitePath, tempDirPath);

    // Copy site.yaml and catalog.yaml to local temp directory
    await fs.copy('./site.yaml', `${tempDirPath}/site.yaml`);
    await fs.copy('./catalog.yaml', `${tempDirPath}/catalog.yaml`);

    // Build with webpack
    const stats = await webpack({
      mode: 'development',
      entry: `${tempDirPath}/entry.js`,
      output: {
        filename: 'main.js',
        path: outputPath,
      },
      plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ title: 'A Walden Site' }),
      ],
      module: {
        rules: [
          {
            test: /\.ya?ml$/,
            type: 'json', // Required by Webpack v4
            use: 'yaml-loader',
          },
        ],
      },
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
