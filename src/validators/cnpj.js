const { map, reduce } = require('lodash');

const defaultMessage = 'invalid cnpj';

function check(weights, inputs, digit) {
  const res = reduce(weights, (partial, value, index) => partial + (value * inputs[index]), 0);
  const mod = res % 11;

  if (mod < 2) {
    return digit === 0;
  }
  return 11 - mod === digit;
}

async function cnpj(data, field, message, args, get = () => data[field]) {
  const value = get(data, field);

  if (!value) return;

  if (!/(^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$)|(\d{14})/g.test(value)) {
    // DD.DDD.DDD/DDDD-DD or DDDDDDDDDDDDDD
    throw message || defaultMessage;
  }

  const values = map(value.replace(/[^\d]/g, ''), Number);

  const isValid = check([5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2], values, values[12])
    && check([6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2], values, values[13]);

  if (isValid) {
    return;
  }

  throw message || defaultMessage;
}

module.exports = cnpj;
