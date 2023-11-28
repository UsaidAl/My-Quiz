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
let timeLeft = 60;
let timerInterval;


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


