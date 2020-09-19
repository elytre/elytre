#!/usr/bin/env node

const build = require('../builder/dist/index.js').default;

const [command] = process.argv.slice(2);

build(command);
