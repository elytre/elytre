import { dirname, join, resolve } from 'path';
import { copySync, symlinkSync, watch } from 'fs-extra';
import webpack from 'webpack';
import * as liveServer from 'live-server';

import createTempDir from './create-temp-dir';
import prepareUserFiles from './prepare-user-files';
import onBuildEnd from './on-build-end';
import getWebpackConfig from './get-webpack-config';
import getSiteConfig from './get-site-config';

/**
 * Main function that check file requirements,
 * copy files in working directory
 * and build or start watching mode
 */
async function build(command: 'build' | 'start' = 'build'): Promise<void> {
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

    // Get walden module directories paths
    const modulePath = dirname(require.resolve('@iwazaru/walden/package.json'));
    const templatePath = join(modulePath, 'template/dist');

    // Create temporary directory
    const tempDirPath = createTempDir();

    // Copy walden site template to local temp directory
    copySync(templatePath, tempDirPath);

    // Create a symbolic link to node_modules in temporary directory
    symlinkSync(resolve('node_modules'), join(tempDirPath, '/node_modules'));

    // Prepare user files for build
    prepareUserFiles(tempDirPath);

    // Create site and webpack configs
    const siteConfig = getSiteConfig();
    const webpackConfig = getWebpackConfig(tempDirPath, siteConfig);

    // Create webpack compiler from config
    const compiler = webpack(webpackConfig);

    if (command === 'build') {
      // eslint-disable-next-line no-console
      console.log('Building using webpack…');
      compiler.run((error, stats) => onBuildEnd(error, stats, webpackConfig));
    } else if (command === 'start') {
      // eslint-disable-next-line no-console
      console.log('Watching for changes…');
      compiler.watch(
        { aggregateTimeout: 300, poll: false, ignored: /node_modules/ },
        (error, stats) => onBuildEnd(error, stats, webpackConfig),
      );

      // Re-prepare build if user files changed
      // Copying files in temp directory will trigger a new build from webpack
      watch('./', {}, (eventType, fileName) => {
        // eslint-disable-next-line no-console
        console.log(`${fileName} was ${eventType}d, rebuilding…`);
        prepareUserFiles(tempDirPath);
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
