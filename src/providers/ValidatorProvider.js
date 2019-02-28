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

    Validator.extend('cpf', cpf.bind(cpf));
  }
}

module.exports = ValidatorProvider;
