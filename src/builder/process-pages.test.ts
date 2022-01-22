import * as fs from 'fs-extra';
import { Dirent } from 'fs-extra';
import log from './log';

import processPages from './process-pages';

jest.mock('fs-extra');
jest.mock('./log');

const success = jest.spyOn(log, 'success');
const warning = jest.spyOn(log, 'warning');

describe('processPages', () => {
  it('processes pages', () => {
    jest.spyOn(fs, 'existsSync').mockReturnValue(true);
    const readdirSync = jest
      .spyOn(fs, 'readdirSync')
      .mockImplementation(() => ['custom-page.mdx'] as unknown as Dirent[]);

    processPages('/tmp/dir');

    expect(success).toHaveBeenCalledWith('Processed 1 custom mdx pages');
    expect(readdirSync).toHaveBeenCalledWith('./pages');
  });

  it('warns if a file name does not match expected pattern', () => {
    jest.spyOn(fs, 'existsSync').mockReturnValue(true);
    jest
      .spyOn(fs, 'readdirSync')
      .mockImplementation(
        () => ['custom-page.markdown'] as unknown as Dirent[],
      );

    processPages('/tmp/dir');

    expect(warning).toHaveBeenCalled();
  });

  it("does nothing if there is no 'pages' directory", () => {
    jest.spyOn(fs, 'existsSync').mockReturnValue(false);
    jest.spyOn(fs, 'readdirSync').mockImplementation(() => {
      throw new Error('Directory does not exist');
    });

    expect(() => processPages('/tmp/dir')).not.toThrow();
  });
});
