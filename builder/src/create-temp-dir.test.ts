import * as fs from 'fs';
import * as os from 'os';

import createTempDir from './create-temp-dir';

jest.mock('fs');
jest.mock('os');
jest.mock('./log');

describe('createTempDir', () => {
  it('create a temporary directory and return its path', () => {
    const tmpdir = jest.spyOn(os, 'tmpdir').mockImplementation(() => '/tmp/');
    const mkdtempSync = jest
      .spyOn(fs, 'mkdtempSync')
      .mockImplementation((path) => `${path}abcd1234`);

    const tempDirPath = createTempDir();

    expect(tmpdir).toHaveBeenCalledWith();
    expect(mkdtempSync).toHaveBeenCalledWith('/tmp/elytre-');
    expect(tempDirPath).toBe('/tmp/elytre-abcd1234');
  });
});
