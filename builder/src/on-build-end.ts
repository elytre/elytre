import { copySync, existsSync, writeFileSync } from 'fs-extra';
import { join } from 'path';
import webpack from 'webpack';
import log from './log';

/**
 * A function called when the build has ended
 */
export default function onBuildEnd(
  err: Error | undefined,
  stats: webpack.Stats,
  webpackConfig: webpack.Configuration,
): void {
  if (err) {
    throw err;
  }

  // Show stats if it contains error
  if (stats.hasErrors()) {
    // eslint-disable-next-line no-console
    console.log(stats.toString(webpackConfig.stats));
    throw new Error('An error occured during Webpack build.');
  }

  // Get local build directory path
  const buildDir = webpackConfig.output?.path;
  if (!buildDir) {
    throw new Error('Webpack config outputh path must be defined');
  }

  // If there is a "public" directory in the current working directory,
  // copy its content to the build directory
  if (existsSync('public')) {
    copySync('public', buildDir);
    log.success('Added public directory content to build');
  }

  // Netlify build: redirect every url to index.html for react-router
  if (process.env.NETLIFY === 'true') {
    const redirectsFilePath = join(buildDir, '_redirects');
    writeFileSync(redirectsFilePath, '/*   /index.html   200');
    log.success('Detected Netlify environnement and added redirects file');
  }

  // Success!
  // eslint-disable-next-line no-console
  console.log(stats.toString(webpackConfig.stats));
}
