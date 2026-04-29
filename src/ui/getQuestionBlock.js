import getAnswers from "./getAnswers"
export default function getQuestionBlock(questionBlock){
  const block = document.createElement('div')
  block.classList.add('question-block')

  const questionText = document.createElement('h3')
  questionText.textContent = questionBlock.question
  block.append(questionText)

  questionBlock.answers.forEach(answer => {
    block.append(getAnswers(answer,questionBlock.questionId))
  })

  return block
}