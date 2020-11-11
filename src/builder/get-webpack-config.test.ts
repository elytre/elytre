import getWebpackConfig from './get-webpack-config';

describe('getWebpackConfig', () => {
  it('returns the production webpack config', () => {
    const webpackConfig = getWebpackConfig(
      '/tmp/dir/',
      {
        title: 'Les Éditions Paronymie',
      },
      'production',
    );

    expect(webpackConfig.mode).toBe('production');
  });

  it('returns the development webpack config', () => {
    const webpackConfig = getWebpackConfig(
      '/tmp/dir/',
      {
        title: 'Les Éditions Paronymie',
      },
      'development',
    );

    expect(webpackConfig.mode).toBe('development');
    expect(webpackConfig.devtool).toBe('source-map');
  });
});
