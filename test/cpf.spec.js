/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const test = require('japa');
const validateCpf = require('../src/validators/cpf');

const throws = async (callback) => {
  try {
    await callback();
    return false;
  } catch (error) {
    return true;
  }
};

test('cpf should be validated', async (assert) => {
  const testCases = [
    { data: '14715498790', shouldThrow: false },
    { data: '11111111111', shouldThrow: true },
    { data: '123', shouldThrow: true },
    { data: '', shouldThrow: true },
    { data: '14869122731', shouldThrow: false },
    { data: '12965888748', shouldThrow: false },
    { data: 'asghror', shouldThrow: true },
  ];

  for (const testCase of testCases) {
    const { data: cpf, shouldThrow } = testCase;
    const hasError = await throws(async () => validateCpf({ cpf }, 'cpf'));

    assert.equal(hasError, shouldThrow);
  }
});
