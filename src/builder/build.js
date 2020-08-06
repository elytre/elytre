const path = require('path');
const fs = require('fs-extra');
const util = require('util');
const webpack = util.promisify(require('webpack'));

const yamlFileToJsonFile = require('./yaml-file-to-json-file');
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

/**
 * Tests if requirements are met for build to succeed
 */
function checkRequirements() {
  const requiredFiles = ['site.yaml', 'catalog.yaml', 'styles.css'];
  requiredFiles.forEach((file) => {
    if (!fs.pathExistsSync(path.join('./', file))) {
      throw new Error(
        `Cannot find require file "${file}" in current directory.`,
      );
    }
  });
}

/**
 * Copy local files and template files to a temporary directory
 */
async function copyFiles() {
  // Copy walden site template to local temp directory
  fs.copySync(templatePath, tempDirPath);

  // Convert site.yaml and catalog.yaml to json
  // and copy them to local temp directory
  yamlFileToJsonFile(
    path.resolve('./site.yaml'),
    path.join(tempDirPath, '/site.json'),
  );
  yamlFileToJsonFile(
    path.resolve('./catalog.yaml'),
    path.join(tempDirPath, '/catalog.json'),
  );

  // Copy styles.css file to local temp directory
  fs.copySync(
    path.resolve('./styles.css'),
    path.join(tempDirPath, './styles.css'),
  );

  // Create a symbolic link to node_modules in temporary directory
  fs.symlinkSync(
    path.resolve('node_modules'),
    path.join(tempDirPath, '/node_modules'),
  );
}

async function build() {
  try {
    // eslint-disable-next-line no-console
    console.log(`Working directory: ${tempDirPath}`);

    // eslint-disable-next-line no-console
    console.log('Checking for requirements…');
    checkRequirements();

    // eslint-disable-next-line no-console
    console.log('Copying files to temp directory…');
    copyFiles();

    // eslint-disable-next-line no-console
    console.log('Building using webpack…');
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
