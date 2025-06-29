import runGame from '../index.js';
import {getRandomNumber} from '../helper.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (number) => {
  let divider = 2;
  while (divider <= number / 2) {
    if (number % divider === 0) {
      return false;
    }
    divider += 1;
  }
  return true;
}

const getQuestionAnswer = () => {
  const question = getRandomNumber(2, 50);
  const correctAnswer = isPrimeNumber(question) ? 'yes' : 'no';
  return [question, correctAnswer]
};

export default () => {
  runGame(description, getQuestionAnswer);
};