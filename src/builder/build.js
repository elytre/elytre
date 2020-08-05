const path = require('path');
const fs = require('fs-extra');
const util = require('util');
const webpack = util.promisify(require('webpack'));

const getTempDir = require('./get-temp-dir');

// eslint-disable-next-line no-console
console.log('Building walden site…');

// Get walden module directories paths
const modulePath = path.dirname(
  require.resolve('@iwazaru/walden/package.json'),
);
const templatePath = path.join(modulePath, '/src/template');

const tempDirPath = getTempDir();

const webpackConfig = require('./webpack.config');

async function build() {
  try {
    // Create a symbolic link to node_modules in temporary directory
    await fs.symlink(
      path.resolve('node_modules'),
      path.join(tempDirPath, '/node_modules'),
    );

    // Check that required catalog file exists
    if (!(await fs.pathExists('./catalog.yaml'))) {
      throw new Error('Cannot find file catalog.yaml in current directory.');
    }

    // Copy walden site template to local temp directory
    await fs.copy(templatePath, tempDirPath);

    // Copy site.yaml and catalog.yaml to local temp directory
    await fs.copy('./site.yaml', path.join(tempDirPath, '/site.yaml'));
    await fs.copy('./catalog.yaml', path.join(tempDirPath, '/catalog.yaml'));

    // Build with webpack
    const stats = await webpack(webpackConfig);

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
