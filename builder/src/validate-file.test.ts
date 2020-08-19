import * as fs from 'fs-extra';

import validateFile from './validate-file';

import Site from './models/Site';

jest.mock('fs-extra');
jest.mock('./models/Site');

const readFileSync = jest
  .spyOn(fs, 'readFileSync')
  .mockImplementation(() => '{"title":"Les Éditions Paronymie"}');

describe('validateFile', () => {
  it('validates a file', () => {
    validateFile('site.yaml', Site);

    expect(readFileSync).toHaveBeenCalledWith(
      `${process.cwd()}/site.yaml`,
      'utf-8',
    );
  });

  it('throws an error if a file is invalid', () => {
    const tested = () => validateFile('site.yaml', Site);
    expect(tested).toThrowError('File site.yaml is invalid: Validation error!');
  });
});
