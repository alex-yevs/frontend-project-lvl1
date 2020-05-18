const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomArg = (...rest) => rest[getRandomNum(0, rest.length - 1)];

export {
  getRandomNum, getRandomArg,
};
