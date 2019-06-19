const lessEqualsThan = async (data, field, message, args, get = (d, f) => d[f]) => {
  const value = Number(get ? get(data, field) : data[field]);
  const [targetField] = args;

  const target = Number.isNaN(Number(targetField)) ? get(data, targetField) : Number(targetField);
  if (value <= target) {
    return;
  }

  throw message || `lessEqualsThan validation failed. ${value} <= ${target}.`;
};

module.exports = lessEqualsThan;
