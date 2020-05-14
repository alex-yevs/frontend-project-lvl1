import { engine, getRandomNum, getRandomArg } from '../index.js';

const calc = (a, operator, b) => {
  switch (operator) {
    case '+':
      return (a + b);
    case '-':
      return (a - b);
    case '*':
      return (a * b);
    default:
      throw new Error('invalid parameters of calc specified');
  }
};

const gameDescription = 'What is the result of expression?';

const getGameData = () => {
  const firstNum = getRandomNum(0, 10);
  const secondNum = getRandomNum(0, 10);
  const operator = getRandomArg('+', '-', '*');
  const question = `${firstNum} ${operator} ${secondNum}`;
  const result = String(calc(firstNum, operator, secondNum));
  return [question, result];
};

const brainCalc = () => engine(gameDescription, getGameData);

export {
  brainCalc as default,
};
