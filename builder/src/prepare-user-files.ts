import { copySync } from 'fs-extra';
import { resolve, join } from 'path';

import checkRequirements from './check-requirements';
import validateFile from './validate-file';
import yamlFileToJsonFile from './yaml-file-to-json-file';
import buildCatalog from './build-catalog';
import createSearchIndex from './create-search-index';
import log from './log';

import Site from './models/Site';
import Catalog from './models/Catalog';

/**
 * This functions prepare user' files for a build,
 * it must be run before every build
 * and each time a file change in watch mode
 */
export default function prepareUserFiles(tempDirPath: string): void {
  checkRequirements();
  log.success('Checked required files');

  validateFile('site.yaml', Site);
  log.success('Validated site.yaml file');
  validateFile('catalog.yaml', Catalog);
  log.success('Validated catalog.yaml file');

  yamlFileToJsonFile(resolve('./site.yaml'), join(tempDirPath, '/site.json'));
  copySync(resolve('./styles.css'), join(tempDirPath, './styles.css'));
  log.success('Copied user files to temp directory');

  const catalog = buildCatalog(
    resolve('./catalog.yaml'),
    join(tempDirPath, '/catalog.json'),
    tempDirPath,
  );
  log.success(
    `Built catalog with ${catalog.products.length} products from catalog.yaml`,
  );

  createSearchIndex(catalog, tempDirPath);
  log.success('Built search index from product catalog');
}
