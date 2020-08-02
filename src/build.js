const webpack = require('webpack');
const path = require('path');
const fs = require('fs-extra');

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

async function build() {
  try {
    // Check that site config file exists
    if (!(await fs.pathExists('./site.yaml'))) {
      throw new Error('Cannot find file site.yaml in current directory.');
    }

    // Copy walden site template to local temp directory
    await fs.copy(sitePath, tempPath);

    // Copy dist directory (with index.html) to output path
    await fs.copy(distPath, outputPath);

    // Copy site.yaml to local temp directory
    await fs.copy('./site.yaml', siteConfigPath);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  // Build with webpack
  webpack(
    {
      mode: 'production',
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
    },
    async (err, stats) => {
      // Stats Object
      if (err) {
        console.error(err.stack || err);
        if (err.details) {
          console.error(err.details);
        }
        process.exit(1);
      }

      // Done processing
      console.log(
        stats.toString({
          chunks: true, // Makes the build much quieter
          colors: true, // Shows colors in the console
        })
      );

      try {
        await fs.remove(tempPath);
      } catch (err) {
        console.error(error);
        process.exit(1);
      }
    }
  );
}

module.exports = build;
