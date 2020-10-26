import { copySync, existsSync } from 'fs-extra';
import { resolve, join } from 'path';

import checkRequirements from './check-requirements';
import validateFile from './validate-file';
import yamlFileToJsonFile from './yaml-file-to-json-file';
import buildCatalog from './build-catalog';
import createSearchIndex from './create-search-index';
import log from './log';

import Site from './models/Site';
import Catalog from './models/Catalog';
import processPages from './process-pages';

/**
 * This functions prepare user' files for a build,
 * it must be run before every build
 * and each time a file change in watch mode
 */
export default function prepareUserFiles(tempDirPath: string): void {
  // Check that all required files are present
  checkRequirements();
  log.success('Checked required files');

  // Check that YAML user files endorse the data model
  validateFile('site.yaml', Site);
  log.success('Validated site.yaml file');
  validateFile('catalog.yaml', Catalog);
  log.success('Validated catalog.yaml file');

  // Copy site.yaml to temp directory and convert it to json
  yamlFileToJsonFile(resolve('./site.yaml'), join(tempDirPath, '/site.json'));
  // Copy styles.css to temp directory
  copySync(resolve('./styles.css'), join(tempDirPath, './styles.css'));
  log.success('Copied user files to temp directory');

  // Build catalog from catalog.yaml into a json file
  const catalog = buildCatalog(
    resolve('./catalog.yaml'),
    join(tempDirPath, '/catalog.json'),
    tempDirPath,
  );
  log.success(
    `Built catalog with ${catalog.products.length} products from catalog.yaml`,
  );

  // If there is a "pages" directory in the current working directory,
  // copy its content to the temp directory
  processPages(tempDirPath);

  // If there is a "public" directory in the current working directory,
  // copy its content to the temp directory
  if (existsSync('public')) {
    copySync('public', tempDirPath);
    log.success('Added public directory content to build');
  }

  createSearchIndex(catalog, tempDirPath);
  log.success('Built search index from product catalog');
}
