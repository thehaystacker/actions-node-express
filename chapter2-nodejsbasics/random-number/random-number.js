const getRandomNumber = (min = 100, max = 1000) => {
  if (min > max) {
    throw Error("Min value should be less than Max value");
  }
  return min + Math.floor(Math.random() * (max - min));
};

module.exports = getRandomNumber;