import * as fs from 'fs';
import * as os from 'os';

import createTempDir from './create-temp-dir';

jest.mock('fs');
jest.mock('os');

describe('createTempDir', () => {
  it('create a temporary directory and return its path', () => {
    const log = jest.spyOn(console, 'log').mockImplementation();
    const tmpdir = jest.spyOn(os, 'tmpdir').mockImplementation(() => '/tmp/');
    const mkdtempSync = jest
      .spyOn(fs, 'mkdtempSync')
      .mockImplementation((path) => `${path}abcd1234`);

    const tempDirPath = createTempDir();

    expect(tmpdir).toHaveBeenCalledWith();
    expect(mkdtempSync).toHaveBeenCalledWith('/tmp/elytre-');
    expect(tempDirPath).toBe('/tmp/elytre-abcd1234');
    expect(log).toHaveBeenCalledWith('Created temp directory: /tmp/elytre-abcd1234…');
  });
});
