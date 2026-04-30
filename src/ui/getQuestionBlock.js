import getAnswers from "./getAnswers"

export default function getQuestionBlock(questionBlock){
  const block = document.createElement('div')
  block.dataset.questionId = questionBlock.questionId
  const questionText = document.createElement('h3')
  questionText.textContent = questionBlock.question
  block.append(questionText)

  const errorMessageBlock = document.createElement('div')
  const errorText = document.createElement('p')
  errorText.textContent = ""
  errorMessageBlock.append(errorText)
  
  questionBlock.answers.forEach(answer => {
    block.append(getAnswers(answer,questionBlock.questionId))
  })
  block.append(errorMessageBlock)
      block.className = `
    border 
    border-gray-200 dark:border-gray-700 
    rounded-xl 
    p-4 
    space-y-3 
    bg-gray-50 dark:bg-gray-700 
    transition
`
  questionText.className = `
    font-semibold 
    text-gray-800 dark:text-gray-100
`
  errorMessageBlock.className= `
    question-block__error 
    text-sm 
    mt-2 
    min-h-[1.25rem]
`
  return block

}

