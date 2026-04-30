import './style.css'
import questions from './questions'
import getQuestionBlock from './ui/getQuestionBlock'
import getScore from './utils/calculateScore'

const themeToggle = document.createElement('button')
themeToggle.textContent = "🌙"
themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark')

  if (document.documentElement.classList.contains('dark')) {
    themeToggle.textContent = "☀️"
  } else {
    themeToggle.textContent = "🌙"
  }
})

const app = document.getElementById('app')
const score = document.getElementById('score')
const form = document.createElement('form')
const formH2 =  document.createElement('h2')
formH2.textContent = "Опрос по JS"
const button = document.createElement('button')
button.type = "button"
button.textContent = "Проверить"

form.append(formH2)
questions.forEach(question =>{
  form.append(getQuestionBlock(question))
})

form.append(button)
button.addEventListener('click',()=>getScore(score,form,questions))
app.append(form)
app.append(themeToggle)


app.className = `
  min-h-screen 
  flex flex-col items-center justify-center 
  gap-6
  bg-gray-100 dark:bg-gray-900 
  transition-colors
`
score.className = `
  mt-6 
  text-center 
  text-lg 
  font-semibold 
  order-1
  text-gray-800 dark:text-gray-100
`
form.className =  `
  w-full max-w-xl 
  bg-white dark:bg-gray-800 
  p-8 
  rounded-2xl 
  shadow-xl 
  space-y-6 
  transition-colors
`
formH2.className = `
  text-2xl font-bold text-center 
  text-gray-800 dark:text-gray-100
`
button.className = `
  w-full 
  bg-blue-500 
  text-white 
  py-2 
  rounded-lg 
  font-medium
  hover:bg-blue-600 
  active:scale-95 
  transition
`
themeToggle.className = `
  fixed top-4 right-4
  bg-white dark:bg-gray-800
  text-gray-800 dark:text-gray-100
  px-3 py-2 rounded-lg shadow
  hover:scale-105 transition
`