const cpf = require('../validators/cpf');
const exists = require('../validators/exists');
const isBetween = require('../validators/isBetween');
const uniqueWhere = require('../validators/uniqueWhere');

module.exports = {
  cpf, exists, isBetween, uniqueWhere,
};
