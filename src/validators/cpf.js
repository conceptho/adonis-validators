const defaultMessage = 'Invalid cpf.';
const repeated = ['11111111111', '22222222222', '33333333333', '44444444444', '55555555555', '66666666666', '77777777777', '88888888888', '99999999999'];

const cpf = async (data, field, message = defaultMessage, args = [], get = (data, field) => data[field]) => {
  const value = get(data, field);

  // Not a number
  if (!/\d+/.test(value)) throw message;

  if (repeated.includes(value)) throw message;

  let soma = 0;
  let resto;

  for (let i = 1; i <= 9; i += 1) {
    soma += parseInt(value.substring(i - 1, i), 10) * (11 - i);
  }

  resto = (soma * 10) % 11;

  if ((resto === 10) || (resto === 11)) resto = 0;
  if (resto !== parseInt(value.substring(9, 10), 10)) throw message;

  soma = 0;

  for (let i = 1; i <= 10; i += 1) {
    soma += parseInt(value.substring(i - 1, i), 10) * (12 - i);
  }

  resto = (soma * 10) % 11;

  if ((resto === 10) || (resto === 11)) resto = 0;
  if (resto !== parseInt(value.substring(10, 11), 10)) throw message;
};

module.exports = cpf;
