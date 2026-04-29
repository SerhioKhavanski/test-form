
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
        if(userAnswers[question.questionId] === question.correctAnswer){
            counter++
        }
    })
    points.textContent = `Набрано баллов: ${counter} из ${questions.length}`

    score.innerHTML = ""
    score.append(points)

}