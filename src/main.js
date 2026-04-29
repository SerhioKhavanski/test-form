import './style.css'
import questions from './questions'
import getQuestionBlock from './ui/getQuestionBlock'
import getScore from './utils/calculateScore'

const app = document.getElementById('app')
const score = document.getElementById('score')
const formH2 =  document.createElement('h2')
formH2.textContent = "Опрос по JS"
const form = document.createElement('form')
const button = document.createElement('button')
button.type = "button"
button.textContent = "Проверить"

form.append(formH2)
questions.forEach(question =>{
  form.append(getQuestionBlock(question))
})

form.append(button)
button.addEventListener('click',()=>getScore(score,form,questions))
console.log(button.dataset);
app.append(form)

