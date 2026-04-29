export default function getAnswers(answer,questionId){
  const label = document.createElement('label')
  label.textContent = answer
  const check = document.createElement('input')
  check.type = "radio"
  check.name = questionId
  check.value = answer
  label.prepend(check)

  return label
}