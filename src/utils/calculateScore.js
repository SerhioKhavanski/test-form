
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
        questionBlock.classList.remove(
        "border-red-400",
        "border-yellow-400",
        "border-green-400",
        "bg-red-50",
        "bg-yellow-50",
        "bg-green-50",
        "dark:bg-red-900/20",
        "dark:bg-yellow-900/20",
        "dark:bg-green-900/20"
        )
        errorMessage.textContent = ""
        if(!userAnswer){
            errorMessage.textContent = "Вы не выбрали ни один из ответов"
            errorMessage.className = "text-yellow-500 text-sm"
            questionBlock.classList.add(
                "border-yellow-400",
                "bg-yellow-50",
                "dark:bg-yellow-900/20"
            )
            errorMessage.classList.add("animate-pulse")
        }
        else if(userAnswer === question.correctAnswer){
            counter++
            questionBlock.classList.add(
                "border-green-400",
                "bg-green-50",
                "dark:bg-green-900/20"
            )
        }
        else{
            errorMessage.textContent = "Не верный ответ"
            errorMessage.className = "text-red-500 text-sm"
            questionBlock.classList.add(
                "border-red-400",
                "bg-red-50",
                "dark:bg-red-900/20"
            )
            errorMessage.classList.add("animate-pulse")
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