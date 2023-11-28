const questions = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
        correctAnswer: 'Paris'
    },
    {
        question: 'Which programming language is this quiz about?',
        options: ['Java', 'JavaScript', 'Python', 'C++'],
        correctAnswer: 'JavaScript'
    },
    {
        question: 'Which method is used to remove the last element from an array?',
        options: ['pop()', 'shift()', 'remove()', 'delete()'],
        correctAnswer: 'pop()'
    },
    {
        question: 'What does the DOM stand for?',
        options: ['Document Object Model', 'Data Object Model', 'Dynamic Object Model', 'Document Oriented Model'],
        correctAnswer: 'Document Object Model'
    },
    {
        question: 'What is the purpose of the "this" keyword in JavaScript?',
        options: ['To refer to the current object', 'To create a new variable', 'To define a function', 'To represent the global scope'],
        correctAnswer: 'To refer to the current object'
    }
    
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timerInterval;

const timeLeftElement = document.getElementById('time-left')
const startBtn = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');
const scoreContainer = document.getElementById('score-container');
const initialsInput = document.getElementById('initials');
const saveScoreBtn = document.getElementById('save-score-btn');

startBtn.addEventListener('click', startQuiz);
optionsContainer.addEventListener('click', checkAnswer);
saveScoreBtn.addEventListener('click', saveScore);


function startQuiz() {
    startBtn.classList.add('hide');
    questionContainer.classList.remove('hide');
    displayQuestion();
    startTimer();
}


function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        optionsContainer.appendChild(button);
    });
}


function startTimer() {
   const timerinterval = setInterval(() => {
        timeLeft--;
        console.log('Time left: ${timeleft} seconds');
        if (timeLeft <= 0) {
            endQuiz();
            console.log('Time is up!');
        }
    }, 1000);
}
startTimer();

function checkAnswer(event) {
    if (event.target.tagName === 'BUTTON') {
        const selectedAnswer = event.target.textContent;
        const correctAnswer = questions[currentQuestionIndex].correctAnswer;

        if (selectedAnswer === correctAnswer) {
            score++;
            resultText.textContent = 'Correct!';
        } else {
            timeLeft -= 10;
            resultText.textContent = 'Incorrect!';
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            endQuiz();
        }
    }
}


function endQuiz() {
    clearInterval(timerInterval);
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    resultText.textContent = `Quiz over! Your score is ${score}.`;
    scoreContainer.classList.remove('hide');
}


function saveScore() {
    const initials = initialsInput.value.trim().toUpperCase();

    if (initials !== '') {
        
        alert(`Score saved for ${initials} - ${score}`);
    } else {
        alert('Please enter your initials.');
    }
}
