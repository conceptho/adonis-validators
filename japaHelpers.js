const throws = async (callback) => {
  try {
    await callback();
    return false;
  } catch (error) {
    return true;
  }
};

module.exports = { throws };
