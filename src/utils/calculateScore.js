
export default function getScore(score,form,questions){
    let counter = 0
    const points = document.createElement('h3')
    const results = form.querySelectorAll('input[type="radio"]')
    const userAnswers = {}
    results.forEach(answer =>{
        if(answer.checked){
            userAnswers[answer.name] =  answer.value
        }
    })
    questions.forEach(question=>{
        const userAnswer = userAnswers[question.questionId]
        const questionBlock = form.querySelector(`div[data-question-id=${question.questionId}]`)
        const errorMessage = questionBlock.querySelector('.question-block__error p')
        errorMessage.textContent = ""
        if(!userAnswer){
            errorMessage.textContent = "Вы не выбрали ни один из ответов"
        }
        else if(userAnswer === question.correctAnswer){
            counter++
        }
        else{
            errorMessage.textContent = "Не верный ответ"
        }
    })

    if(questions.length !== Object.keys(userAnswers).length){
        points.textContent = `Вы ответили не на все вопросы`
    }
    else{
        points.textContent = `Набрано баллов: ${counter} из ${questions.length}`
    }
    score.innerHTML = ""
    score.append(points)
}