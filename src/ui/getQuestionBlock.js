import getAnswers from "./getAnswers"
export default function getQuestionBlock(questionBlock){
  const block = document.createElement('div')
  block.classList.add('question-block')
  block.dataset.questionId = questionBlock.questionId

  const questionText = document.createElement('h3')
  questionText.textContent = questionBlock.question
  block.append(questionText)

  const errorMessageBlock = document.createElement('div')
  errorMessageBlock.classList.add('question-block__error')
  const errorText = document.createElement('p')
  errorText.textContent = ""
  errorMessageBlock.append(errorText)
  
  questionBlock.answers.forEach(answer => {
    block.append(getAnswers(answer,questionBlock.questionId))
  })
  block.append(errorMessageBlock)
  return block
}