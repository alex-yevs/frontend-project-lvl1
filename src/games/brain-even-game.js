import { engine, getRandomNum } from '../index.js';

const isEven = (num) => num % 2 === 0;

const brainEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getQuestion = () => getRandomNum(100);
  const getResult = (num) => (isEven(num) ? 'yes' : 'no');
  return engine(description, getQuestion, getResult);
};

export {
  brainEven as default,
};
