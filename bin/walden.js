#!/usr/bin/env node

const build = require('../src/builder/build.js');

const [command] = process.argv.slice(2);

build(command);
