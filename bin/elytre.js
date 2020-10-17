#!/usr/bin/env node

const build = require('../builder/dist/builder/src/build').default;

const [command] = process.argv.slice(2);

build(command);
