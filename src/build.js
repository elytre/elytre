const path = require('path');
const fs = require('fs-extra');
const util = require('util');
const webpack = util.promisify(require('webpack'));

console.log('Building walden site…');

// Get walden module site & dist directories paths
const modulePath = path.dirname(
  require.resolve('@iwazaru/walden/package.json')
);
const sitePath = `${modulePath}/src/site`;
const distPath = `${modulePath}/src/dist`;

// Get .walden & build local directories paths
const tempPath = `${process.cwd()}/.walden`;
const outputPath = `${process.cwd()}/build`;

const siteConfigPath = `${tempPath}/site.yaml`;
const catalogFilePath = `${tempPath}/site.yaml`;

async function build() {
  try {
    // Check that site config file exists
    if (!(await fs.pathExists('./site.yaml'))) {
      throw new Error('Cannot find file site.yaml in current directory.');
    }

    // Check that catalog file exists
    if (!(await fs.pathExists('./catalog.yaml'))) {
      throw new Error('Cannot find file catalog.yaml in current directory.');
    }

    // Copy walden site template to local temp directory
    await fs.copy(sitePath, tempPath);

    // Copy dist directory (with index.html) to output path
    await fs.copy(distPath, outputPath);

    // Copy site.yaml and catalog.yaml to local temp directory
    await fs.copy('./site.yaml', siteConfigPath);
    await fs.copy('./catalog.yaml', catalogFilePath);

    // Build with webpack
    const stats = await webpack({
      mode: 'development',
      entry: `${tempPath}/entry.js`,
      output: {
        filename: 'main.js',
        path: outputPath,
      },
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
    console.log(
      stats.toString({
        chunks: true, // Makes the build much quieter
        colors: true, // Shows colors in the console
      })
    );

    // Remove temp directory
    await fs.remove(tempPath);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

module.exports = build;
