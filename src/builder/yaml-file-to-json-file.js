const fs = require('fs-extra');
const YAML = require('yaml');

/**
 * Converts a YAML file to JSON
 * @param yamlFilePath the yaml file path
 * @param jsonFilePath the json file path
 */
module.exports = async function yamlFileToJsonFile(yamlFilePath, jsonFilePath) {
  if (!fs.pathExistsSync(yamlFilePath)) {
    throw new Error(`Cannot find ${yamlFilePath}.`);
  }

  const yamlFileContent = await fs.readFile(yamlFilePath, 'utf-8');
  const parsedYamlFileContent = YAML.parse(yamlFileContent);
  const fileContentAsJson = JSON.stringify(parsedYamlFileContent);
  await fs.writeFile(jsonFilePath, fileContentAsJson);
};
