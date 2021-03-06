/* eslint-disable no-restricted-syntax */
const { reduce } = require('lodash');

const fields = [
  'seconds',
  'minutes',
  'hours',
  'days',
  'weeks',
  'months',
  'years',
];

async function duration(data, field, message, args, get = () => data[field]) {
  const value = get(data, field);

  if (!(value instanceof Object)) {
    throw message || `duration validation failed. ${field} is not an object.`;
  }

  const isValid = reduce(
    value,
    (acc, v, k) => fields.includes(k) && Number.isInteger(Number(v)),
    true,
  );

  if (isValid) {
    return;
  }

  throw message || 'duration validation failed. invalid fields.';
}

module.exports = duration;
