import { engine, getRandomNum } from '../index.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameData = () => {
  const question = getRandomNum(0, 100);
  const result = isPrime(question) ? 'yes' : 'no';
  return [question, result];
};

const brainPrime = () => engine(gameDescription, getGameData);

export {
  brainPrime as default,
};
