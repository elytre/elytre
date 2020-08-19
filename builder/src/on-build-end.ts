import webpack from 'webpack';

/**
 * A function called when the build has ended
 */
export default function onBuildEnd(
  err: Error,
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

  // Success!
  // eslint-disable-next-line no-console
  console.log(stats.toString(webpackConfig.stats));
}
