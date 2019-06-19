const greaterEqualsThan = async (data, field, message, args, get) => {
  const value = Number(get ? get(data, field) : data[field]);
  const [target] = args;

  if (value >= target) {
    return;
  }

  throw message
    || `greaterEqualsThan validation failed. ${value} >= ${target}.`;
};

module.exports = greaterEqualsThan;
