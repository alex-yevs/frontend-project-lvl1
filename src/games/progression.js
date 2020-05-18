import engine from '../index.js';
import { getRandomNum } from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const getGameData = () => {
  const start = getRandomNum(0, 30);
  const delta = getRandomNum(0, 30);
  const progressionLength = 10;
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = start + delta * i;
  }
  const randomIndex = getRandomNum(0, progression.length - 1);
  const result = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, result];
};

const brainProgression = () => engine(gameDescription, getGameData);

export {
  brainProgression as default,
};
