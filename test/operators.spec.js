/* eslint-disable no-loop-func */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const test = require('japa');

const greaterThan = require('../src/validators/greaterThan');
const greaterEqualsThan = require('../src/validators/greaterEqualsThan');
const lessEqualsThan = require('../src/validators/lessEqualsThan');
const lessThan = require('../src/validators/lessThan');

const { throws } = require('../japaHelpers');

test.group('greaterThan', () => {
  test('number must be greater than given value', async (assert) => {
    assert.isFalse(await throws(async () => greaterThan({ value: 0.1 }, 'value', 'error', ['0'])));
    assert.isTrue(await throws(async () => greaterThan({ value: 0.0 }, 'value', 'error', ['0'])));
    assert.isTrue(await throws(async () => greaterThan({ value: -1.0 }, 'value', 'error', ['0'])));

    assert.isFalse(await throws(async () => greaterThan({ value: 0.1, target: 0 }, 'value', 'error', ['target'])));
    assert.isTrue(await throws(async () => greaterThan({ value: 0.0, target: 0 }, 'value', 'error', ['target'])));
    assert.isTrue(await throws(async () => greaterThan({ value: -1.0, target: 0 }, 'value', 'error', ['target'])));
  });
});

test.group('greaterEqualsThan', () => {
  test('number must be greater or equals than given value', async (assert) => {
    assert.isFalse(await throws(async () => greaterEqualsThan({ value: 0.0 }, 'value', 'error', ['0'])));
    assert.isFalse(await throws(async () => greaterEqualsThan({ value: 1.0 }, 'value', 'error', ['0'])));
    assert.isTrue(await throws(async () => greaterEqualsThan({ value: -1.0 }, 'value', 'error', ['0'])));

    assert.isFalse(
      await throws(async () => greaterEqualsThan({ value: 0.0, target: 0 }, 'value', 'error', ['target'])),
    );
    assert.isFalse(
      await throws(async () => greaterEqualsThan({ value: 1.0, target: 0 }, 'value', 'error', ['target'])),
    );
    assert.isTrue(
      await throws(async () => greaterEqualsThan({ value: -1.0, target: 0 }, 'value', 'error', ['target'])),
    );
  });
});

test.group('lessEqualsThan', () => {
  test('number must be less or equals than given value', async (assert) => {
    assert.isFalse(await throws(async () => lessEqualsThan({ value: 0.0 }, 'value', 'error', ['0'])));
    assert.isTrue(await throws(async () => lessEqualsThan({ value: 1.0 }, 'value', 'error', ['0'])));
    assert.isFalse(await throws(async () => lessEqualsThan({ value: -1.0 }, 'value', 'error', ['0'])));

    assert.isFalse(await throws(async () => lessEqualsThan({ value: 0.0, target: 0 }, 'value', 'error', ['target'])));
    assert.isTrue(await throws(async () => lessEqualsThan({ value: 1.0, target: 0 }, 'value', 'error', ['target'])));
    assert.isFalse(await throws(async () => lessEqualsThan({ value: -1.0, target: 0 }, 'value', 'error', ['target'])));
  });
});

test.group('lessThan', () => {
  test('number must be less than given value', async (assert) => {
    assert.isTrue(await throws(async () => lessThan({ value: 0.0 }, 'value', 'error', ['0'])));
    assert.isTrue(await throws(async () => lessThan({ value: 1.0 }, 'value', 'error', ['0'])));
    assert.isFalse(await throws(async () => lessThan({ value: -1.0 }, 'value', 'error', ['0'])));

    assert.isTrue(await throws(async () => lessThan({ value: 0.0, target: 0 }, 'value', 'error', ['target'])));
    assert.isTrue(await throws(async () => lessThan({ value: 1.0, target: 0 }, 'value', 'error', ['target'])));
    assert.isFalse(await throws(async () => lessThan({ value: -1.0, target: 0 }, 'value', 'error', ['target'])));
  });
});
