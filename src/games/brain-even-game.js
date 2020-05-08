import { engine, getRandom } from '../index.js';

const isEven = (num) => num % 2 === 0;

const brainEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no"';
  const question = () => getRandom(100);
  const result = (num) => (isEven(num) ? 'yes' : 'no');
  return engine(description, question, result);
};

export {
  brainEven as default,
};
