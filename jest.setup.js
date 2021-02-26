// eslint-disable-next-line import/no-extraneous-dependencies
import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom';

const { toLocaleDateString } = Date.prototype;
// eslint-disable-next-line no-extend-native
Date.prototype.toLocaleDateString = function mockedToLocaleDateString(locale = 'en-US', ...args) {
  return toLocaleDateString.call(this, locale, ...args);
};
