import engine from '../index.js';
import { getRandomNum, getRandomArg } from '../utils.js';

const calc = (operator, ...rest) => {
  switch (operator) {
    case '+':
      return rest.reduce((acc, num) => acc + num, 0);
    case '-':
      return rest.slice(1).reduce((acc, num) => acc - num, rest[0]);
    case '*':
      return rest.reduce((acc, num) => acc * num, 1);
    default:
      throw new Error('Invalid parameters of calc specified');
  }
};

const gameDescription = 'What is the result of expression?';

const getGameData = () => {
  const firstNum = getRandomNum(0, 10);
  const secondNum = getRandomNum(0, 10);
  const operator = getRandomArg('+', '-', '*');
  const question = `${firstNum} ${operator} ${secondNum}`;
  const result = String(calc(operator, firstNum, secondNum));
  return [question, result];
};

const brainCalc = () => engine(gameDescription, getGameData);

export {
  brainCalc as default,
};
