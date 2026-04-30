export default function getAnswers(answer,questionId){
  const label = document.createElement('label')
  label.textContent = answer
  const check = document.createElement('input')
  check.type = "radio"
  check.name = questionId
  check.value = answer
  label.prepend(check)


label.className = `
  flex items-center gap-2 
  p-2 rounded-lg 
  cursor-pointer 
  transition-colors
  text-gray-800 dark:text-gray-100
  hover:bg-gray-100 dark:hover:bg-gray-600
`
check.className = "accent-blue-500"
  return label


}
