import engine from '../index.js';
import { getRandomNum } from '../utils.js';

const isEven = (num) => num % 2 === 0;

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const question = getRandomNum(0, 100);
  const result = isEven(question) ? 'yes' : 'no';
  return [question, result];
};

const brainEven = () => engine(gameDescription, getGameData);

export {
  brainEven as default,
};
