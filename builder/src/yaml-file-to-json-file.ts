import { readFileSync, writeFileSync } from 'fs-extra';
import { parse } from 'yaml';

/**
 * Converts a YAML file to JSON
 */
export default function yamlFileToJsonFile(
  yamlFilePath: string,
  jsonFilePath: string,
): void {
  const yamlFileContent = readFileSync(yamlFilePath, 'utf-8');
  const parsedYamlFileContent = parse(yamlFileContent);
  const fileContentAsJson = JSON.stringify(parsedYamlFileContent);
  writeFileSync(jsonFilePath, fileContentAsJson);
}
