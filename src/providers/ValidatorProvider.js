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

    const cpf = require('../validators/cpf');
    const exists = require('../validators/exists');

    Validator.extend('cpf', cpf.bind(cpf));
    Validator.extend('exists', exists.bind(exists));
  }
}

module.exports = ValidatorProvider;
