import { writeFileSync } from 'fs-extra';
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
  if (process.env.NETLIFY === 'true' && webpackConfig.output) {
    if (!webpackConfig.output.path) {
      throw new Error('Webpack config outputh path must be defined');
    }

    const redirectsFilePath = join(webpackConfig.output.path, '_redirects');
    writeFileSync(redirectsFilePath, '/*   /index.html   200');
    log.success('Detected Netlify environnement and added redirects file');
  }

  // Success!
  // eslint-disable-next-line no-console
  console.log(stats.toString(webpackConfig.stats));
}
