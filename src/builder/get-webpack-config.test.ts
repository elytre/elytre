import getWebpackConfig from './get-webpack-config';

describe('getWebpackConfig', () => {
  it('returns the webpack config', () => {
    const webpackConfig = getWebpackConfig('/tmp/dir/', {
      title: 'Les Éditions Paronymie',
    });

    expect(webpackConfig.mode).toBe('development');
  });
});
