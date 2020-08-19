import onBuildEnd from './on-build-end';
import getWebpackConfig from './get-webpack-config';

const log = jest.spyOn(console, 'log').mockImplementation(() => jest.fn());

describe('onBuildEnd', () => {
  it('Display stats if build was successful', () => {
    const webpackConfig = getWebpackConfig('/tmp/dir', {
      title: 'Les Éditions Paronmye',
    });
    const stats = {
      hasErrors: jest.fn(() => false),
      toString: jest.fn(() => 'Stats as string'),
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    onBuildEnd(undefined, stats, webpackConfig);

    expect(log).toHaveBeenCalledWith('Stats as string');
  });

  it('Throw if an error is passed as first argument', () => {
    const webpackConfig = getWebpackConfig('/tmp/dir', {
      title: 'Les Éditions Paronmye',
    });
    const stats = {
      hasErrors: jest.fn(() => true),
      toString: jest.fn(() => 'Stats as string'),
    };

    const tested = function testedFunction() {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onBuildEnd(new Error('An error occured'), stats, webpackConfig);
    };

    expect(tested).toThrowError('An error occured');
    expect(log).not.toHaveBeenCalledWith('Stats as string');
  });

  it('Display stats and throw if stats has errors', () => {
    const webpackConfig = getWebpackConfig('/tmp/dir', {
      title: 'Les Éditions Paronmye',
    });
    const stats = {
      hasErrors: jest.fn(() => true),
      toString: jest.fn(() => 'Stats as string'),
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const tested = () => onBuildEnd(undefined, stats, webpackConfig);

    expect(tested).toThrowError('An error occured during Webpack build');
    expect(log).toHaveBeenCalledWith('Stats as string');
  });
});
