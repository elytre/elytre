const fs = require('fs-extra');
const path = require('path');
const YAML = require('yaml');

// Read site config
module.exports = function getSiteConfig() {
  const siteConfigFilePath = path.resolve('./site.yaml');
  if (!fs.pathExistsSync(siteConfigFilePath)) {
    throw new Error('Cannot find file site.yaml in current directory.');
  }

  const siteConfigFileContent = fs.readFileSync(siteConfigFilePath, 'utf-8');
  return YAML.parse(siteConfigFileContent);
};
