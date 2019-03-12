const { xor } = require('lodash');

const only = async (data, field, message, args, get = () => data[field]) => {
  const value = get(data, field);

  if (!(value instanceof Object)) {
    throw message || `only validation failed. ${field} is not an object.`;
  }

  const keys = Object.keys(value);
  if (xor(args, keys).length === 0) {
    return;
  }

  throw message || `only validation failed. ${keys} !== ${args}.`;
};

module.exports = only;
