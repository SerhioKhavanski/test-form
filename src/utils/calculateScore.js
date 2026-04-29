
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

        if(!userAnswer){
            const emptyError = document.createElement('p')
            emptyError.textContent = "Вы не выбрали ни один из ответов"
            questionBlock.append(emptyError)
        }
        else if(userAnswers[question.questionId] === question.correctAnswer){
            counter++
        }
        else{
            const answerError = document.createElement('p')
            answerError.textContent = "Не верный ответ"
            questionBlock.append(answerError)
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