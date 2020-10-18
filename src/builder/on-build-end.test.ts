import * as fs from 'fs-extra';

import onBuildEnd from './on-build-end';

import getWebpackConfig from './get-webpack-config';
import log from './log';

jest.mock('fs-extra');
jest.mock('./log');

const success = jest.spyOn(log, 'success');
const consoleLog = jest
  .spyOn(console, 'log')
  .mockImplementation(() => jest.fn());

const stats = {
  hasErrors: jest.fn(() => false),
  toString: jest.fn(() => 'Stats as string'),
};

describe('onBuildEnd', () => {
  it('displays stats if build was successful', () => {
    const webpackConfig = getWebpackConfig('/tmp/dir', {
      title: 'Les Éditions Paronmye',
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    onBuildEnd(undefined, stats, webpackConfig);

    expect(consoleLog).toHaveBeenCalledWith('Stats as string');
  });

  it('throws if an error is passed as first argument', () => {
    const webpackConfig = getWebpackConfig('/tmp/dir', {
      title: 'Les Éditions Paronmye',
    });

    const tested = function testedFunction() {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onBuildEnd(new Error('An error occured'), stats, webpackConfig);
    };

    expect(tested).toThrowError('An error occured');
    expect(consoleLog).not.toHaveBeenCalledWith('Stats as string');
  });

  it('displays stats and throw if stats has errors', () => {
    const webpackConfig = getWebpackConfig('/tmp/dir', {
      title: 'Les Éditions Paronmye',
    });

    const statsWithErrors = {
      hasErrors: jest.fn(() => true),
      toString: jest.fn(() => 'Stats as string'),
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const tested = () => onBuildEnd(undefined, statsWithErrors, webpackConfig);

    expect(tested).toThrowError('An error occured during Webpack build');
    expect(consoleLog).toHaveBeenCalledWith('Stats as string');
  });

  it('throws an error if webpack output path is not defined', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const tested = () => onBuildEnd(undefined, stats, {});

    expect(tested).toThrowError('Webpack config outputh path must be defined');
  });

  it('creates a _redirect file in netlify environment', () => {
    process.env.NETLIFY = 'true';
    const writeFileSync = jest
      .spyOn(fs, 'writeFileSync')
      .mockImplementation(() => jest.fn());

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    onBuildEnd(undefined, stats, { output: { path: 'build/' } });

    expect(success).toHaveBeenCalledWith(
      'Detected Netlify environnement and added redirects file',
    );
    expect(writeFileSync).toHaveBeenCalledWith(
      'build/_redirects',
      '/*   /index.html   200',
    );

    process.env.NETLIFY = '';
  });
});
