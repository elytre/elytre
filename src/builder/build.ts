import { dirname, join, resolve } from 'path';
import { copySync, symlinkSync } from 'fs-extra';
import webpack from 'webpack';
import chokidar from 'chokidar';
import * as liveServer from 'live-server';

import log from './log';
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
async function build(command: 'build' | 'start'): Promise<void> {
  try {
    if (command === 'build') {
      log.info('Building Elytre site for production…');
    } else if (command === 'start') {
      log.info('Starting Elytre in watch mode…');
    } else {
      throw new Error(`Unknown command ${command}`);
    }

    // Get elytre module directories paths
    const modulePath = dirname(require.resolve('elytre/package.json'));
    const templatePath = join(modulePath, 'dist/template');

    // Create temporary directory
    const tempDirPath = createTempDir();
    log.success('Created temp directory');
    log.info(`Working in ${tempDirPath}`);

    // Copy elytre site template to local temp directory
    copySync(templatePath, tempDirPath);

    // Create a symbolic link to node_modules in temporary directory
    symlinkSync(resolve('node_modules'), join(tempDirPath, '/node_modules'));

    // Prepare user files for build
    prepareUserFiles(tempDirPath);

    // Get site and webpack configs
    const siteConfig = getSiteConfig();
    const webpackMode = command === 'build' ? 'production' : 'development';
    const webpackConfig = getWebpackConfig(
      tempDirPath,
      siteConfig,
      webpackMode,
    );

    // Create webpack compiler from config
    const compiler = webpack(webpackConfig);

    if (command === 'build') {
      log.info('Building using webpack…');
      compiler.run((error, stats) => onBuildEnd(error, stats, webpackConfig));
    } else if (command === 'start') {
      log.info('Watching for changes…');

      // Chokidar watches files in current directory and will trigger a new
      // user file preparation, copying files to the temp directory
      const watcher = chokidar.watch([
        'styles.css',
        'styles.yaml',
        'catalog.yaml',
        'covers/**',
        'pages/**',
      ]);
      watcher.on('all', (event, path) => {
        log.info(`File ${path} was ${event}d, rebuilding…`);
        prepareUserFiles(tempDirPath);
      });

      // Webpack watches files in temp directory and will trigger a new build
      // if they changes, copyting files to the build directory
      compiler.watch(
        { aggregateTimeout: 300, poll: false, ignored: /node_modules/ },
        (error, stats) => onBuildEnd(error, stats, webpackConfig),
      );

      // Live dev server (reloads if a file is changed in build directory)
      liveServer.start({
        port: 1854,
        root: webpackConfig.output?.path,
        file: 'index.html',
      });
    }
  } catch (error) {
    log.error(error.message);
    process.exit(1);
  }
}

export default build;
