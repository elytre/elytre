import { Model } from 'objectmodel';

Model.prototype.errorCollector = function errorCollector(errors) {
  errors.forEach((error) => {
    const message = error.message.match(/returned Error: (.*) for value/m)[1];
    throw new Error(message);
  });
};
