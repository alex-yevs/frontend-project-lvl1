import { engine, getRandom } from '../index.js';

const getRandomOper = () => {
  switch (getRandom(3)) {
    case 1:
      return '+';
    case 2:
      return '-';
    default:
      return '*';
  }
};

const brainCalc = () => {
  const description = 'What is the result of expression?';
  const getQuestion = () => `${getRandom(10)} ${getRandomOper()} ${getRandom(10)}`;

  const getResult = (str) => {
    const [a, oper, b] = str.split(' ');
    const x = parseInt(a, 10);
    const y = parseInt(b, 10);
    switch (oper) {
      case '+':
        return `${x + y}`;
      case '-':
        return `${x - y}`;
      default:
        return `${x * y}`;
    }
  };
  return engine(description, getQuestion, getResult);
};

export {
  brainCalc as default,
};
