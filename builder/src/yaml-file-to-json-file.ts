import { readFileSync, writeFileSync } from 'fs-extra';
import { parse } from 'yaml';

/**
 * Converts a YAML file to JSON
 * @param yamlFilePath the yaml file path
 * @param jsonFilePath the json file path
 */
export default function yamlFileToJsonFile(yamlFilePath, jsonFilePath) {
  const yamlFileContent = readFileSync(yamlFilePath, 'utf-8');
  const parsedYamlFileContent = parse(yamlFileContent);
  const fileContentAsJson = JSON.stringify(parsedYamlFileContent);
  writeFileSync(jsonFilePath, fileContentAsJson);
}
