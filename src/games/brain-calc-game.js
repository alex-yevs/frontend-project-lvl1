import { engine, getRandomNum, getRandomArg } from '../index.js';

const brainCalc = () => {
  const description = 'What is the result of expression?';
  const getQuestion = () => `${getRandomNum(10)} ${getRandomArg('+', '-', '*')} ${getRandomNum(10)}`;

  const getResult = (str) => {
    const [a, oper, b] = str.split(' ');
    const x = Number(a);
    const y = Number(b);
    switch (oper) {
      case '+':
        return String(x + y);
      case '-':
        return String(x - y);
      default:
        return String(x * y);
    }
  };
  return engine(description, getQuestion, getResult);
};

export {
  brainCalc as default,
};
