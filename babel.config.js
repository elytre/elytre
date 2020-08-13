// Used by jest to transpile tsx to js
module.exports = {
  presets: ['@babel/env', '@babel/react', '@babel/typescript'],
  env: {
    test: {
      plugins: ['transform-require-context'],
    },
  },
};
