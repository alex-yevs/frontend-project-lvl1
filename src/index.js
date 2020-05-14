import readlineSync from 'readline-sync';

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const getRandomArg = (...rest) => rest[getRandomNum(0, rest.length - 1)];


const engine = (gameDescription, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);
  let step = 1;
  const totalSteps = 3;
  while (step <= totalSteps) {
    const [question, result] = getGameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === result) {
      console.log('Correct!');
      step += 1;
    } else {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export {
  engine, getRandomNum, getRandomArg,
};
