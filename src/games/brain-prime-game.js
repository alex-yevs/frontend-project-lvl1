import { engine, getRandomNum } from '../index.js';

const isPrime = (num) => {
  if (num < 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const brainPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getQuestion = () => getRandomNum(200);
  const getResult = (num) => (isPrime(num) ? 'yes' : 'no');
  return engine(description, getQuestion, getResult);
};

export {
  brainPrime as default,
};
