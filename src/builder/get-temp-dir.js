const fs = require('fs-extra');
const os = require('os');
const path = require('path');

const tempDirPath = fs.mkdtempSync(path.join(os.tmpdir(), 'walden-'));

module.exports = function getTempDir() {
  return tempDirPath;
};
