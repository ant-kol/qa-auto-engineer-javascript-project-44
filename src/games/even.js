import runGame from '../index.js'
import { getRandomNumber } from '../helper.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'
const isEvenNumber = number => number % 2 === 0

const getQuestionAnswer = () => {
  const question = getRandomNumber(0, 100)
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no'
  return [question, correctAnswer]
}

export default () => {
  runGame(description, getQuestionAnswer)
}
