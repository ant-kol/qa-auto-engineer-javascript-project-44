import runGame from '../index.js'
import { getRandomNumber } from '../helper.js'

const mathOperations = ['+', '-', '*']
const description = 'What is the result of the expression?'

const getRandomMathOperations = (mathSymbols) => {
  const randomIndex = getRandomNumber(0, mathSymbols.length - 1)
  const mathSymbol = mathSymbols[randomIndex]
  return mathSymbol
}

const calcMathOperation = (symbol, firstValue, secondValue) => {
  switch (symbol) {
    case '+': return firstValue + secondValue
    case '-': return firstValue - secondValue
    case '*': return firstValue * secondValue
    default: return null
  }
}

const getQuestionAnswer = () => {
  const mathSymbol = getRandomMathOperations(mathOperations)
  const firstNum = getRandomNumber(0, 10)
  const secondNum = getRandomNumber(0, 10)
  const question = `${firstNum} ${mathSymbol} ${secondNum}`
  const correctAnswer = String(calcMathOperation(mathSymbol, firstNum, secondNum))
  return [question, correctAnswer]
}

export default () => {
  runGame(description, getQuestionAnswer)
}
