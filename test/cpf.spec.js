/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const test = require('japa');
const validateCpf = require('../src/validators/cpf');

const { throws } = require('./helpers');

test.group('cpf', () => {
  test('a valid cpf should not throw exception',
    async (assert) => {
      const hasError = await throws(async () => validateCpf({ data: '14715498790' }, 'data'));

      assert.equal(hasError, false);
    });

  test('a char repeated cpf should throw an exception',
    async (assert) => {
      const hasError = await throws(async () => validateCpf({ data: '11111111111' }, 'data'));

      assert.equal(hasError, true);
    });

  test('a string containing less or more than eleven digits should throw an error ',
    async (assert) => {
      const hasError = await throws(async () => validateCpf({ data: '123' }, 'data'));

      assert.equal(hasError, true);
    });

  test('an empty string should not throw an error',
    async (assert) => {
      const hasError = await throws(async () => validateCpf({ data: '' }, 'data'));

      assert.equal(hasError, false);
    });

  test('a string containing chars that arent numbers, dots and traces should throw an error',
    async (assert) => {
      const hasError = await throws(async () => validateCpf({ data: 'a7sd98as4as8d97asd456as4' }, 'data'));

      assert.equal(hasError, true);
    });

  test('an valid cpf containing numbers, dots and traces only should not throw an error',
    async (assert) => {
      const hasError = await throws(async () => validateCpf({ data: '147.154.987-90' }, 'data'));

      assert.equal(hasError, false);
    });

  test('an valid cpf containing numbers, dots and traces only should not throw an error despite its presentation',
    async (assert) => {
      const hasError = await throws(async () => validateCpf({ data: '14...7.154---.9.87-90' }, 'data'));

      assert.equal(hasError, false);
    });
});
