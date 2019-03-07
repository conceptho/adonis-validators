const isBetween = async (data, field, message, args, get = () => data[field]) => {
  const value = get(data, field);
  if (!value) {
    return;
  }

  const [lowerLimit, upperLimit] = args;
  if (!(value >= Number(lowerLimit) && value <= Number(upperLimit))) {
    throw message;
  }
};

module.exports = isBetween;
