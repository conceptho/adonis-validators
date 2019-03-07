/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const test = require('japa');
const validateCpf = require('../src/validators/cpf');

const { throws } = require('./helpers');

test('cpf', async (assert) => {
  const testCases = [
    { data: '14715498790', shouldThrow: false },
    { data: '11111111111', shouldThrow: true },
    { data: '123', shouldThrow: true },
    { data: '', shouldThrow: true },
    { data: '14869122731', shouldThrow: false },
    { data: '12965888748', shouldThrow: false },
    { data: 'asghror', shouldThrow: true },
  ];

  for (const { data, shouldThrow } of testCases) {
    const hasError = await throws(async () => validateCpf({ data }, 'data'));

    assert.equal(hasError, shouldThrow);
  }
});
