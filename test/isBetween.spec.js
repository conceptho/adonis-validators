/* eslint-disable no-loop-func */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const test = require('japa');
const isBetween = require('../src/validators/isBetween');

const { throws } = require('./helpers');

test.group('isBetween', () => {
  test('a number inside the given range should not throw error',
    async (assert) => {
      let hasError;

      hasError = await throws(async () => isBetween({ data: 1 }, 'data', '', ['0', '1']));
      assert.equal(hasError, false);

      hasError = await throws(async () => isBetween({ data: -1 }, 'data', '', ['-2', '3']));
      assert.equal(hasError, false);
    });

  test('a number outside the given range should throw an error',
    async (assert) => {
      let hasError;

      hasError = await throws(async () => isBetween({ data: 2 }, 'data', '', ['0', '1']));
      assert.equal(hasError, true);

      hasError = await throws(async () => isBetween({ data: -2.1 }, 'data', '', ['-2', '3']));
      assert.equal(hasError, true);
    });

  test('args can be strings representing floats',
    async (assert) => {
      let hasError;

      hasError = await throws(async () => isBetween({ data: 2 }, 'data', '', ['0', '4.5']));
      assert.equal(hasError, false);

      hasError = await throws(async () => isBetween({ data: -2.1 }, 'data', '', ['-2.1', '3']));
      assert.equal(hasError, false);
    });
});
