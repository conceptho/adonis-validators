/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const test = require('japa');
const only = require('../src/validators/only');

const { throws } = require('../japaHelpers');

test.group('only', () => {
  test('an object with correct keys should not throw an exception', async (assert) => {
    const hasError = await throws(async () => only({ data: { a: 1, b: 2 } }, 'data', undefined, ['a', 'b']));

    assert.equal(hasError, false);
  });

  test('an object with incorrect keys should throw an exception', async (assert) => {
    const data = {
      a: 1,
      b: 2,
      c: 3,
    };

    const hasError = await throws(async () => only({ data }, 'data', undefined, ['a', 'b']));

    assert.equal(hasError, true);
  });

  test('values which are not objects should throw error', async (assert) => {
    let hasError;

    hasError = await throws(async () => only({ data: [1, 2, 3] }, 'data', undefined, ['a', 'b']));
    assert.equal(hasError, true);

    hasError = await throws(async () => only({ data: 1 }, 'data', undefined, ['a', 'b']));
    assert.equal(hasError, true);

    hasError = await throws(async () => only({ data: 'a' }, 'data', undefined, ['a', 'b']));
    assert.equal(hasError, true);
  });
});
