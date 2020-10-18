import { Model } from 'objectmodel';

/**
 * Throw readable error message from objectmodel module custom assertion
 */
Model.prototype.errorCollector = function errorCollector(errors: Error[]) {
  errors.forEach((error) => {
    const matches = error.message.match(/returned Error: (.*) for value/m);
    const message = (matches && matches[1]) || error.message;

    throw new Error(message);
  });
};
