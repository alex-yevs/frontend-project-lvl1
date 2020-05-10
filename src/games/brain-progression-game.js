import { engine, getRandomNum } from '../index.js';

const getGameProgression = (first, delta) => {
  const progression = [first];
  for (let i = 1; i <= 9; i += 1) {
    progression[i] = progression[i - 1] + delta;
  }
  progression[getRandomNum(progression.length - 1)] = '..';
  return progression.join(' ');
};

const brainProgression = () => {
  const description = 'What number is missing in the progression?';
  const getQuestion = () => getGameProgression(getRandomNum(30), getRandomNum(30));

  const getResult = (str) => {
    const arr = str.split(' ');
    const lastIndex = arr.length - 1;
    const markIndex = arr.indexOf('..');
    if (markIndex === 0) {
      const delta = Number(arr[2]) - Number(arr[1]);
      return String(Number(arr[1]) - delta);
    }
    if (markIndex === lastIndex) {
      const delta = Number(arr[lastIndex - 1]) - Number(arr[lastIndex - 2]);
      return String(Number(arr[lastIndex - 1]) + delta);
    }
    return String((Number(arr[markIndex - 1]) + Number(arr[markIndex + 1])) / 2);
  };

  return engine(description, getQuestion, getResult);
};

export {
  brainProgression as default,
};
