import { engine, getRandom } from '../index.js';

const getGCD = (a, b) => {
  const x = Math.max(a, b);
  const y = Math.min(a, b);
  const rest = x % y;
  if (rest === 0) {
    return y;
  }
  return getGCD(y, rest);
};


const brainGCD = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const getQuestion = () => `${getRandom(29) + 1} ${getRandom(29) + 1}`;
  const getResult = (str) => {
    const [a, b] = str.split(' ');
    const x = parseInt(a, 10);
    const y = parseInt(b, 10);
    return `${getGCD(x, y)}`;
  };
  return engine(description, getQuestion, getResult);
};

export {
  brainGCD as default,
};
