import { engine, getRandomNum } from '../index.js';

const getGCD = (a, b) => {
  const rest = a % b;
  if (rest === 0) {
    return b;
  }
  return getGCD(b, rest);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const firstNum = getRandomNum(1, 30);
  const secondNum = getRandomNum(1, 30);
  const question = `${firstNum} ${secondNum}`;
  const result = String(getGCD(firstNum, secondNum));
  return [question, result];
};

const brainGCD = () => engine(gameDescription, getGameData);

export {
  brainGCD as default,
};
