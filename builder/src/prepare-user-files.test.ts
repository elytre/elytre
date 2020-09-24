import * as fs from 'fs-extra';

import prepareUserFiles from './prepare-user-files';

import log from './log';
import checkRequirements from './check-requirements';
import validateFile from './validate-file';
import yamlFileToJsonFile from './yaml-file-to-json-file';
import createSearchIndex from './create-search-index';

import Site from './models/Site';
import Catalog from './models/Catalog';

jest.mock('fs-extra');
jest.mock('./log');
jest.mock('./validate-file');
jest.mock('./check-requirements');
jest.mock('./yaml-file-to-json-file');
jest.mock('./build-catalog');
jest.mock('./create-search-index');

describe('prepareUserFiles', () => {
  it('prepares build', () => {
    const success = jest.spyOn(log, 'success');
    const copySync = jest.spyOn(fs, 'copySync').mockImplementation();

    prepareUserFiles('/tmp/dir');

    expect(success).toHaveBeenCalledWith('Checked required files');
    expect(checkRequirements).toHaveBeenCalledWith();

    expect(success).toHaveBeenCalledWith('Validated site.yaml file');
    expect(success).toHaveBeenCalledWith('Validated catalog.yaml file');
    expect(validateFile).toHaveBeenCalledWith('site.yaml', Site);
    expect(validateFile).toHaveBeenCalledWith('catalog.yaml', Catalog);

    expect(yamlFileToJsonFile).toHaveBeenCalledWith(
      `${process.cwd()}/site.yaml`,
      '/tmp/dir/site.json',
    );
    expect(copySync).toHaveBeenCalledWith(
      `${process.cwd()}/styles.css`,
      '/tmp/dir/styles.css',
    );

    expect(success).toHaveBeenCalledWith(
      'Built catalog with 2 products from catalog.yaml',
    );
    expect(success).toHaveBeenCalledWith(
      'Built search index from product catalog',
    );
    expect(success).toHaveBeenCalledWith('Copied user files to temp directory');

    expect(createSearchIndex).toHaveBeenCalledWith(
      {
        products: [
          {
            author: 'Aymeric Buvard',
            coverImage: 'cover-image.jpg',
            ean: 9781234567888,
            slug: 'lordure-du-jeu',
            title: 'L’Ordure du jeu',
          },
          {
            author: 'Laetitia Mani',
            ean: 9781234567877,
            slug: 'chaussons-dours',
            title: "Chaussons d'ours",
          },
        ],
      },
      '/tmp/dir',
    );
  });
});
