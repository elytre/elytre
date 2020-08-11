import { pathExistsSync, readFileSync } from 'fs-extra';
import { resolve } from 'path';

import { parse } from 'yaml';

import validateFile from './validate-file';
import Site from './models/Site';

// Read site config
export default function getSiteConfig() {
  const siteConfigFilePath = resolve('./site.yaml');
  if (!pathExistsSync(siteConfigFilePath)) {
    throw new Error('Cannot find file site.yaml in current directory.');
  }

  validateFile('site.yaml', Site);

  const siteConfigFileContent = readFileSync(siteConfigFilePath, 'utf-8');
  return parse(siteConfigFileContent);
}
