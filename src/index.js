import readlineSync from 'readline-sync';

const getRandomNum = (max) => Math.floor(Math.random() * Math.floor(max + 1));
const getRandomArg = (...rest) => rest[getRandomNum(rest.length - 1)];


const askUserName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};


const engine = (description, getQuestion, getResult) => {
  const userName = askUserName();
  console.log(description);
  let step = 1;
  while (step <= 3) {
    const question = getQuestion();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const result = getResult(question);
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
  askUserName, engine, getRandomNum, getRandomArg,
};
