#!/usr/bin/env node

const build = require('../dist/builder/build').default;

const [command] = process.argv.slice(2);

build(command);
