const path = require('path');
const fs = require('fs');
const YAML = require('yaml');

/**
 * Validate a YAML file's content against a model
 * @param {*} fileName site.yaml or catalog.yaml
 * @param {*} model Site or Catalog
 */
module.exports = function validateFile(fileName, model) {
  try {
    const filePath = path.join(process.cwd(), fileName);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const fileContentParsed = YAML.parse(fileContent);
    model(fileContentParsed);
  } catch (error) {
    throw new Error(`File ${fileName} is invalid: ${error.message}`);
  }
};
