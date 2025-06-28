import runGame from '../index.js';
import {getRandomNumber} from '../helper.js'

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (firstValue, secondValue) => {
  while (secondValue !== 0) {
    let temporaryValue = secondValue;
      secondValue = firstValue % secondValue;
      firstValue = temporaryValue;
    }
    return firstValue;
};

const getQuestionAnswer = () => {
  const firstNum = getRandomNumber(1, 50);
  const secondNum = getRandomNumber(1, 50);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = String(getGreatestCommonDivisor(firstNum, secondNum));
  return [question, correctAnswer]
};
export default () => {
  runGame(description, getQuestionAnswer);
};