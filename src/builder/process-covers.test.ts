import * as fs from 'fs-extra';
import { Dirent } from 'fs-extra';
import log from './log';

import processCovers from './process-covers';
import buildCatalog from './build-catalog';

jest.mock('fs-extra');
jest.mock('./log');
jest.mock('./build-catalog');

const { products } = buildCatalog('catalog.yaml', 'catalog.json', '/tmp/dir');
const success = jest.spyOn(log, 'success');
const warning = jest.spyOn(log, 'warning');

describe('processCovers', () => {
  it('processes covers', () => {
    jest.spyOn(fs, 'existsSync').mockReturnValue(true);
    const readdirSync = jest
      .spyOn(fs, 'readdirSync')
      .mockImplementation(() => ['9781234567888.jpg'] as unknown as Dirent[]);

    processCovers(products, '/tmp/dir');

    expect(success).toHaveBeenCalledWith('Processed 1 cover images');
    expect(readdirSync).toHaveBeenCalledWith('./covers');
    expect(products[0].coverImage).toBe('lordure-du-jeu.cover.jpg');
    expect(products[0].coverImage).toBe('lordure-du-jeu.cover.jpg');
  });

  it('warns if a file name does not match expected pattern', () => {
    jest.spyOn(fs, 'existsSync').mockReturnValue(true);
    jest
      .spyOn(fs, 'readdirSync')
      .mockImplementation(() => ['cover-image.jpg'] as unknown as Dirent[]);

    processCovers(products, '/tmp/dir');

    expect(warning).toHaveBeenCalled();
  });

  it("warns if a file name's ean does not match any product", () => {
    jest.spyOn(fs, 'existsSync').mockReturnValue(true);
    jest
      .spyOn(fs, 'readdirSync')
      .mockImplementation(() => ['9781234567811.jpg'] as unknown as Dirent[]);

    processCovers(products, '/tmp/dir');

    expect(warning).toHaveBeenCalled();
  });

  it("does nothing if there is no 'covers' directory", () => {
    jest.spyOn(fs, 'existsSync').mockReturnValue(false);
    jest.spyOn(fs, 'readdirSync').mockImplementation(() => {
      throw new Error('Directory does not exist');
    });

    expect(() => processCovers(products, '/tmp/dir')).not.toThrow();
  });
});
