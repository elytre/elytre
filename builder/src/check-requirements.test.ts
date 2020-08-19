import * as fs from 'fs-extra';

import checkRequirements from './check-requirements';

jest.mock('fs');

describe('checkRequirements', () => {
  it('checks that required file are present', () => {
    const pathExistsSync = jest
      .spyOn(fs, 'pathExistsSync')
      .mockImplementation(() => true);

    expect(() => checkRequirements()).not.toThrowError();
    expect(pathExistsSync).toHaveBeenCalledWith('site.yaml');
    expect(pathExistsSync).toHaveBeenCalledWith('catalog.yaml');
    expect(pathExistsSync).toHaveBeenCalledWith('styles.css');
  });

  it('checks throws an error if required file is missing', () => {
    jest.spyOn(fs, 'pathExistsSync').mockImplementation(() => false);

    expect(() => checkRequirements()).toThrowError(
      'Cannot find required file "site.yaml" in current directory',
    );
  });
});
