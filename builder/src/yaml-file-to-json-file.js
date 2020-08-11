const fs = require('fs-extra');
const YAML = require('yaml');

/**
 * Converts a YAML file to JSON
 * @param yamlFilePath the yaml file path
 * @param jsonFilePath the json file path
 */
module.exports = function yamlFileToJsonFile(yamlFilePath, jsonFilePath) {
  const yamlFileContent = fs.readFileSync(yamlFilePath, 'utf-8');
  const parsedYamlFileContent = YAML.parse(yamlFileContent);
  const fileContentAsJson = JSON.stringify(parsedYamlFileContent);
  fs.writeFileSync(jsonFilePath, fileContentAsJson);
};
