/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
const { ServiceProvider } = require('@adonisjs/fold');

class ValidatorProvider extends ServiceProvider {
  register() {
    // Making sure those dependencies are booted
    const iocDependencies = ['Validator', 'Database'];

    iocDependencies.forEach(dep => this.app.use(dep));
  }

  boot() {
    const Validator = use('Validator');
    const validatorFunctions = require('../validators');

    for (const funcName of Object.keys(validatorFunctions)) {
      const fn = validatorFunctions[funcName];

      Validator.extends(funcName, fn.bind(fn));
    }
  }
}

module.exports = ValidatorProvider;
