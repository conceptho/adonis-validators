/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const test = require('japa');
const cnpj = require('../src/validators/cnpj');

const { throws } = require('../japaHelpers');

test.group('cnpj', () => {
  test('a valid cnpj shoud not throw an exception', async (assert) => {
    assert.isFalse(await throws(() => cnpj({ data: '11.444.777/0001-61' }, 'data')));
    assert.isFalse(await throws(() => cnpj({ data: '11444777000161' }, 'data')));
    assert.isFalse(await throws(() => cnpj({ data: '11444777000161' }, 'data')));
    assert.isFalse(await throws(() => cnpj({ data: '15.170.010/0001-42' }, 'data')));
  });

  test('an invalid cnpj shoud throw an exception', async (assert) => {
    assert.isTrue(await throws(() => cnpj({ data: '15.170.010/000asf1-42' }, 'data')));
    assert.isTrue(await throws(() => cnpj({ data: '15.170.010/0001-43' }, 'data')));
  });
});
