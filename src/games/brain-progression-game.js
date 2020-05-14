import { engine, getRandomNum } from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const getGameData = () => {
  const firstNum = getRandomNum(0, 30);
  const delta = getRandomNum(0, 30);
  const progressionLength = 10;
  const progression = [firstNum];
  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + delta;
  }
  const randomIndex = getRandomNum(0, progression.length - 1);
  const markedElement = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  const result = String(markedElement);
  return [question, result];
};

const brainProgression = () => engine(gameDescription, getGameData);

export {
  brainProgression as default,
};
