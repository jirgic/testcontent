const quizData = [
    {id: 1, prompt: "What is the capital of France?", answer: "Paris"},
    {id: 2, prompt: "What is the largest planet in our solar system?", answer: "Jupiter"},
    {id: 3, prompt: "What is the chemical symbol for gold?", answer: "Au"},
    {id: 4, prompt: "What is the largest country in the world?", answer: "Russia"}
];

const container =
document.getElementById("quiz-container");

function renderQuiz() {
    container.innerHTML = quizData.map(q => `

        <div class="card id="card-${q.id}">
        <p id="question-${q.id}">${q.prompt}</p>
        <input type="text" id="input-${q.id}">
        <button id="submit-${q.id}">Submit</button>
        <p class="feedback" id="feedback-${q.id}"></p>
        </div>`
    ).join('');

    quizData.forEach(q => {
        document.getElementById(`submit-${q.id}`)
        .addEventListener('click', () =>
            checkAnswer(q.id));
    });
}

function checkAnswer(questionId) {
    const input = document.getElementById(`input-${questionId}`);
    const card = input.parentElement;
    const feedback = card.querySelector('.feedback');
    const question = quizData.find(q => q.id === questionId);

    if (input.value.toLowerCase() ===
question.answer.toLowerCase()) {
        card.classList.remove('incorrect');
        card.classList.add('correct');
        feedback.textContent = "Correct!";
    } else {
        card.classList.remove('correct');
        card.classList.add('incorrect');
        feedback.textContent = "Try again!";
    }
}

renderQuiz();







