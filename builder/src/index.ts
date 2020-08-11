import * as path from 'path';
import * as fs from 'fs-extra';
import * as webpack from 'webpack';
import * as liveServer from 'live-server';

import yamlFileToJsonFile from './yaml-file-to-json-file';
import getTempDir from './get-temp-dir';
import validateFile from './validate-file';
import buildCatalog from './build-catalog';

import Site from './models/Site';
import Catalog from './models/Catalog';

import webpackConfig from './webpack.config';

// Get walden module directories paths
const modulePath = path.dirname(
  require.resolve('@iwazaru/walden/package.json'),
);
const templatePath = path.join(modulePath, 'template/dist');
const tempDirPath = getTempDir();

/**
 * Tests if requirements are met for build to succeed
 * @throws {Error} if a file is missing
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
  buildCatalog(
    path.resolve('./catalog.yaml'),
    path.join(tempDirPath, '/catalog.json'),
  );

  // Copy styles.css file to local temp directory
  fs.copySync(
    path.resolve('./styles.css'),
    path.join(tempDirPath, './styles.css'),
  );
}

/**
 * Validate local file content against model
 */
function validateFiles() {
  validateFile('site.yaml', Site);
  validateFile('catalog.yaml', Catalog);
}

/**
 * A function called when the build has ended
 * @param {string} err
 * @param {object} stats
 */
function onBuildEnd(err, stats) {
  if (err) {
    throw err;
  }

  // Show stats if it contains error
  if (stats.hasErrors()) {
    // eslint-disable-next-line no-console
    console.log(stats.toString(webpackConfig.stats));
    throw new Error('An error occured during Webpack build.');
  }

  // Success!
  // eslint-disable-next-line no-console
  console.log(stats.toString(webpackConfig.stats));
}

/**
 * Main function that check file requirements, copy files in working directory
 * and build or start watching mode
 * @param {string} command: 'build' or 'start'
 */
async function build(command = 'build') {
  try {
    if (command === 'build') {
      // eslint-disable-next-line no-console
      console.log('Building Walden site for production…');
    } else if (command === 'start') {
      // eslint-disable-next-line no-console
      console.log('Starting Walden in watch mode…');
    } else {
      throw new Error(`Unknown command ${command}`);
    }

    // eslint-disable-next-line no-console
    console.log(`Working directory: ${tempDirPath}`);

    // eslint-disable-next-line no-console
    console.log('Checking required files…');
    checkRequirements();

    // eslint-disable-next-line no-console
    console.log('Validating YAML files…');
    validateFiles();

    // eslint-disable-next-line no-console
    console.log('Copying files to temp directory…');
    copyFiles();

    // Create a symbolic link to node_modules in temporary directory
    fs.symlinkSync(
      path.resolve('node_modules'),
      path.join(tempDirPath, '/node_modules'),
    );

    // Create webpack compiler with config
    const compiler = webpack(webpackConfig);

    if (command === 'build') {
      // eslint-disable-next-line no-console
      console.log('Building using webpack…');
      compiler.run(onBuildEnd);
    } else if (command === 'start') {
      // eslint-disable-next-line no-console
      console.log('Watching for changes…');
      compiler.watch(
        { aggregateTimeout: 300, poll: false, ignored: /node_modules/ },
        onBuildEnd,
      );

      // Rebuild if a file is changed in local directory
      fs.watch('./', {}, (eventType, fileName) => {
        // eslint-disable-next-line no-console
        console.log(`${fileName} was ${eventType}d, rebuilding…`);
        checkRequirements();
        copyFiles();
      });

      // Live dev server (reloads if a file is changed in build directory)
      liveServer.start({
        port: 1854,
        root: webpackConfig.output?.path,
        file: 'index.html',
      });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    process.exit(1);
  }
}

export default build;
