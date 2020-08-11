import { join } from 'path';
import { readFileSync } from 'fs';
import { parse } from 'yaml';

/**
 * Validate a YAML file's content against a model
 * @param {*} fileName site.yaml or catalog.yaml
 * @param {*} model Site or Catalog
 */
export default function validateFile(fileName, model) {
  try {
    const filePath = join(process.cwd(), fileName);
    const fileContent = readFileSync(filePath, 'utf-8');
    const fileContentParsed = parse(fileContent);
    model(fileContentParsed);
  } catch (error) {
    throw new Error(`File ${fileName} is invalid: ${error.message}`);
  }
}
