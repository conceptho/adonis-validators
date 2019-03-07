/* eslint-disable no-loop-func */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const test = require('japa');
const isBetween = require('../src/validators/isBetween');

const { throws } = require('./helpers');

test('isBetween', async (assert) => {
  const testCases = [
    {
      data: 1, args: ['0', '1'], shouldThrow: false,
    },
    {
      data: -1, args: ['-2', '3'], shouldThrow: false,
    },
    {
      data: 5, args: ['-1', '4'], shouldThrow: true,
    },
    {
      data: 4.15, args: ['-1', '4.5'], shouldThrow: false,
    },
  ];

  for (const { data, shouldThrow, args } of testCases) {
    const hasError = await throws(async () => isBetween({ data }, 'data', '', args));

    assert.equal(hasError, shouldThrow);
  }
});
