const form = document.querySelector('.quiz-form')
const feedbackParagraph = document.createElement('p')
const divButton = document.querySelector('.div-btn')

const correctAnswers = ['A', 'B', 'B', 'B'] //criando array para armazenar as alternativas corretas

const scoreFeedback = score => {
    divButton.insertAdjacentElement('afterend', feedbackParagraph)

    const successFeedback = () => {
        feedbackParagraph.textContent = `SCORE: ${score}`
        feedbackParagraph.setAttribute('class', 'text-success')
        feedbackParagraph.classList.add('text-center')
        feedbackParagraph.classList.add('mt-3')
    }
    const failFeedback = () => {
        feedbackParagraph.textContent = `SCORE: ${score}`
        feedbackParagraph.setAttribute('class', 'text-danger')
        feedbackParagraph.classList.add('text-center')
        feedbackParagraph.classList.add('mt-3')
    }

    if(score >= 75){
        successFeedback()
    } else {
        failFeedback()
    }
}

form.addEventListener('submit', event => {
    event.preventDefault()

    let score = 0
    const userAnswers = [
        form.inputQuestion1.value, // é possível acessar os valores de cada questão através do value contido no radio node list
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ]

    userAnswers.forEach((userAnswer, index) => {
        if(userAnswer === correctAnswers[index]) {
            score += 25
        }
    })
    console.log(score)
    scoreFeedback(score)
})

