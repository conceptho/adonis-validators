/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const test = require('japa');
const duration = require('../src/validators/duration');

const { throws } = require('../japaHelpers');

test.group('duration', () => {
  test('a valid duration object should not throw an exception', async (assert) => {
    let hasError;

    hasError = await throws(async () => duration({ data: { seconds: 2, years: 3 } }, 'data'));
    assert.equal(hasError, false);

    hasError = await throws(async () => duration({ data: { months: 2, years: 3 } }, 'data'));
    assert.equal(hasError, false);
  });

  test('an object with invalid fields should throw an exception', async (assert) => {
    const hasError = await throws(async () => duration(
      {
        data: {
          seconds: 2,
          years: 3,
          probably_error: ':)',
        },
      },
      'data',
    ));

    assert.equal(hasError, true);
  });
});
