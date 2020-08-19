import { join } from 'path';
import { readFileSync } from 'fs-extra';
import { parse } from 'yaml';

import Site from './models/Site';
import Catalog from './models/Catalog';

/**
 * Validate a YAML file's content against a model
 */
export default function validateFile(
  fileName: 'site.yaml' | 'catalog.yaml',
  model: typeof Site | typeof Catalog,
): void {
  try {
    const filePath = join(process.cwd(), fileName);
    const fileContent = readFileSync(filePath, 'utf-8');
    const fileContentParsed = parse(fileContent);
    model(fileContentParsed);
  } catch (error) {
    const newError = new Error(`File ${fileName} is invalid: ${error.message}`);
    newError.stack = error.stack;
    throw newError;
  }
}
