const isBetween = async (data, field, message, args, get) => {
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
