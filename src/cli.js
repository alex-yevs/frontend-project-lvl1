import readlineSync from 'readline-sync';

const getRandom = () => Math.floor(Math.random() * 100);
const isEven = (num) => num % 2 === 0;

const askUserName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};


const brainEven = () => {
  const userName = askUserName();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let n = 1;
  while (n <= 3) {
    const number = getRandom();
    console.log(`Qustion: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const result = isEven(number) ? 'yes' : 'no';
    if (answer === result) {
      console.log('Correct!');
      n += 1;
    } else {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export {
  askUserName, brainEven,
};
