const fs = require('fs-extra');
const path = require('path');
const YAML = require('yaml');

const validateFile = require('./validate-file');
const Site = require('../models/Site');

// Read site config
module.exports = function getSiteConfig() {
  const siteConfigFilePath = path.resolve('./site.yaml');
  if (!fs.pathExistsSync(siteConfigFilePath)) {
    throw new Error('Cannot find file site.yaml in current directory.');
  }

  validateFile('site.yaml', Site);

  const siteConfigFileContent = fs.readFileSync(siteConfigFilePath, 'utf-8');
  return YAML.parse(siteConfigFileContent);
};
