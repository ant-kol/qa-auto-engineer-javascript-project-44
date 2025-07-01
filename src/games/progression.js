import runGame from '../index.js'
import { getRandomNumber } from '../helper.js'

const description = 'What number is missing in the progression?'

const getArithmeticProgression = (
  progressionStart = getRandomNumber(0, 50),
  progressionLength = getRandomNumber(5, 10),
  progressionStep = getRandomNumber(2, 10),
) => {
  const arithmeticProgression = []

  for (let i = 0; i < progressionLength; i++) {
    const currentElement = progressionStart + i * progressionStep
    arithmeticProgression.push(currentElement)
  }
  return arithmeticProgression
}

const getQuestionAnswer = () => {
  const arithmeticProgression = getArithmeticProgression()
  const progressionLength = arithmeticProgression.length
  const randomIndex = getRandomNumber(0, progressionLength - 1)
  const correctAnswer = String(arithmeticProgression[randomIndex])
  arithmeticProgression[randomIndex] = '..'
  const question = arithmeticProgression.join(' ')
  return [question, correctAnswer]
}

export default () => {
  runGame(description, getQuestionAnswer)
}
