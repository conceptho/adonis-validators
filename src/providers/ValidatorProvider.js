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
    const Database = use('Database');

    const cpf = require('../validators/cpf');
    const isBetween = require('../validators/isBetween');

    const uniqueWhere = require('../validators/uniqueWhere')(Database);
    const exists = require('../validators')(Database);

    Validator.extends('cpf', cpf.bind(cpf));
    Validator.extends('isBetween', isBetween.bind(isBetween));
    Validator.extends('uniqueWhere', uniqueWhere.bind(uniqueWhere));
    Validator.extends('exists', exists.bind(exists));
  }
}

module.exports = ValidatorProvider;
