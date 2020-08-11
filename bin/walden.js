#!/usr/bin/env node

const build = require('../builder/src/build.js');

const [command] = process.argv.slice(2);

build(command);
