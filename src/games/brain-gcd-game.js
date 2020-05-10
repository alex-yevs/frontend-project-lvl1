import { engine, getRandomNum } from '../index.js';

const getGCD = (a, b) => {
  const rest = a % b;
  if (rest === 0) {
    return b;
  }
  return getGCD(b, rest);
};


const brainGCD = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const getQuestion = () => `${getRandomNum(29) + 1} ${getRandomNum(29) + 1}`;
  const getResult = (str) => {
    const [a, b] = str.split(' ');
    const x = Number(a);
    const y = Number(b);
    return String(getGCD(x, y));
  };
  return engine(description, getQuestion, getResult);
};

export {
  brainGCD as default,
};
