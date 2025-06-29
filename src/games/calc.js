import runGame from '../index.js'
import { getRandomNumber } from '../helper.js'

const mathOperations = ['+', '-', '*']
const description = 'What is the result of the expression?'

const getRandomMathOperations = (mathSymbols) => {
  const randomIndex = getRandomNumber(0, mathSymbols.length - 1)
  const randomMathSymbol = mathSymbols[randomIndex]
  return randomMathSymbol
}

const calcMathOperation = (mathSymbol, firstValue, secondValue) => {
  if (mathSymbol === '+') {
    return firstValue + secondValue
  }
  else if (mathSymbol === '-') {
    return firstValue - secondValue
  }
  else if (mathSymbol === '*') {
    return firstValue * secondValue
  }
}

const getQuestionAnswer = () => {
  const randomMathSymbol = getRandomMathOperations(mathOperations)
  const firstNum = getRandomNumber(0, 10)
  const secondNum = getRandomNumber(0, 10)
  const question = `${firstNum} ${randomMathSymbol} ${secondNum}`
  const correctAnswer = String(calcMathOperation(randomMathSymbol, firstNum, secondNum))
  return [question, correctAnswer]
}

export default () => {
  runGame(description, getQuestionAnswer)
}
