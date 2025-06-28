import runGame from '../index.js';
import {getRandomNumber} from '../helper.js'

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (num1, num2) => {
  let firstValue = Math.abs(num1);
  let secondValue = Math.abs(num2);
  while (secondValue !== 0) {
    const temporaryValue = secondValue;
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