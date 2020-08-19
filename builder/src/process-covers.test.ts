import * as fs from 'fs-extra';
import { Dirent } from 'fs-extra';

import processCovers from './process-covers';
import buildCatalog from './build-catalog';

jest.mock('fs-extra');
jest.mock('./build-catalog');

const log = jest.spyOn(console, 'log').mockImplementation();
const warn = jest.spyOn(console, 'warn').mockImplementation();

const { products } = buildCatalog('catalog.yaml', 'catalog.json', '/tmp/dir');

describe('processCovers', () => {
  it('processes covers', () => {
    const readdirSync = jest
      .spyOn(fs, 'readdirSync')
      .mockImplementation(() => (['9781234567888.jpg'] as unknown) as Dirent[]);

    processCovers(products, '/tmp/dir');

    expect(log).toHaveBeenCalledWith('Processing cover images…');
    expect(readdirSync).toHaveBeenCalledWith('./covers');
    expect(products[0].coverImage).toBe('lordure-du-jeu.cover.jpg');
    expect(products[0].coverImage).toBe('lordure-du-jeu.cover.jpg');
  });

  it('warns if a file name does not match expected pattern', () => {
    jest
      .spyOn(fs, 'readdirSync')
      .mockImplementation(() => (['cover-image.jpg'] as unknown) as Dirent[]);

    processCovers(products, '/tmp/dir');

    expect(warn).toHaveBeenCalledWith(
      '- cover-image.jpg does not match {ean}.jpg file name pattern',
    );
  });

  it("warns if a file name's ean does not match any product", () => {
    jest
      .spyOn(fs, 'readdirSync')
      .mockImplementation(() => (['9781234567811.jpg'] as unknown) as Dirent[]);

    processCovers(products, '/tmp/dir');

    expect(warn).toHaveBeenCalledWith(
      '- 9781234567811.jpg does not match any product in catalog with EAN 9781234567811',
    );
  });
});
