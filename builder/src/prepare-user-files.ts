import { copySync } from 'fs-extra';
import { resolve, join } from 'path';

import checkRequirements from './check-requirements';
import validateFile from './validate-file';
import yamlFileToJsonFile from './yaml-file-to-json-file';
import buildCatalog from './build-catalog';
import createSearchIndex from './create-search-index';

import Site from './models/Site';
import Catalog from './models/Catalog';

/**
 * This functions prepare user' files for a build,
 * it must be run before every build
 * and each time a file change in watch mode
 */
export default function prepareUserFiles(tempDirPath: string): void {
  // eslint-disable-next-line no-console
  console.log('Preparing user files…');

  // eslint-disable-next-line no-console
  console.log('Checking required files…');
  checkRequirements();

  // eslint-disable-next-line no-console
  console.log('Validating YAML files…');
  validateFile('site.yaml', Site);
  validateFile('catalog.yaml', Catalog);

  // eslint-disable-next-line no-console
  console.log('Copying files to temp directory…');
  yamlFileToJsonFile(resolve('./site.yaml'), join(tempDirPath, '/site.json'));
  copySync(resolve('./styles.css'), join(tempDirPath, './styles.css'));

  // eslint-disable-next-line no-console
  console.log('Building product catalog from catalog.yaml…');
  const catalog = buildCatalog(
    resolve('./catalog.yaml'),
    join(tempDirPath, '/catalog.json'),
    tempDirPath,
  );

  // eslint-disable-next-line no-console
  console.log('Building search index from product catalog…');
  createSearchIndex(catalog, tempDirPath);
}
