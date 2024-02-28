const questions = [
    
    {
        question: "What is the capital of France",
        answers:[
        {text: 'Madrid', correct: false},
        {text: 'Berlin', correct: false},
        {text: 'Paris', correct: true},
        {text: 'Rome', correct: false},
        ],
    },

    {
        question: "Which planet is known as the Red Planet?",
        answers:[
        {text: 'Earth', correct: false},
        {text: 'Mars', correct: true},
        {text: 'Venus', correct: false},
        {text: 'Jupiter', correct: false},
        ],
    },

    {
        question: "What is the largest ocean on Earth?",
        answers:[
        {text: 'Atlantic Ocean', correct: false},
        {text: 'Indian Ocean', correct: false},
        {text: 'Arctic Ocean', correct: false},
        {text: 'Pacific Ocean', correct: true},
        ],
    },

    {
        question: 'Who wrote "Romeo and Juliet"?',
        answers:[
        {text: 'Charles Dickens', correct: false},
        {text: 'Jane Austen', correct: false},
        {text: 'William Shakespeare', correct: true},
        {text: 'Mark Twain', correct: false},
        ],
    },

    {
        question: 'Which element has the chemical symbol "H"?',
        answers:[
        {text: 'Helium', correct: false},
        {text: 'Hydrogen', correct: true},
        {text: 'Oxygen', correct: false},
        {text: 'Nitrogen', correct: false},
        ],
    },

    {
        question: 'What is the currency of Japan?',
        answers:[
        {text: 'Yuan', correct: false},
        {text: 'Yen', correct: true},
        {text: 'Won', correct: false},
        {text: 'Ringgit', correct: false},
        ],
    },

    {
        question: "In what year did Christopher Columbus reach the Americas?",
        answers:[
        {text: '1492', correct: true},
        {text: '1500', correct: false},
        {text: '1601', correct: false},
        {text: '1405', correct: false},
        ],
    },

    {
        question: 'Which animal is known as the "King of the Jungle"?',
        answers:[
        {text: 'Tiger', correct: false},
        {text: 'Lion', correct: true},
        {text: 'Leopard', correct: false},
        {text: 'Cheetah', correct: false},
        ],
    },

    {
        question: "Who painted the Mona Lisa?",
        answers:[
        {text: 'Pablo Picasso', correct: false},
        {text: 'Vincent van Gogh', correct: false,},
        {text: 'Leonardo da Vinci', correct: true},
        {text: 'Claude Monet', correct: false},
        ],
    },

    {
        question: "What is the largest mammal in the world?",
        answers:[
        {text: 'African Elephant', correct: false},
        {text: 'Blue Whale', correct: true},
        {text: 'Giraffe', correct: false},
        {text: 'Orca (Killer Whale)', correct: false},
        ],
    },
]


const questionElement = document.querySelector('.quiz');
const answerButtons = document.querySelector('#answer');
const nextButton = document.querySelector('.submit-btn');
console.log(nextButton);

let currentIndex = 0;
let score = 0;

function startQuiz(){
    currentIndex =  0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
};

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentIndex];
    let questionNo = currentIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button)

        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
    })
};

function resetState(){
    nextButton.style.display = 'none';
    while(answerButtons.firstElementChild){
        answerButtons.removeChild(answerButtons.firstElementChild);
    };
}


function selectAnswer(e){
    const selectedButton = e.target;
    console.log(e);
    const isCorrect = selectedButton.dataset.correct === 'true';
    if(isCorrect){
        selectedButton.classList.add('correct')
        score++;
    }else{
        selectedButton.classList.add('incorrect')
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    })
    nextButton.style.display = 'block';
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Play Again'
    nextButton.style.display = 'block'
}

function handleNextButton(){
    currentIndex++;
    if(currentIndex<questions.length){
        showQuestion()
    }else{
        showScore();
    }
};


nextButton.addEventListener('click',()=>{
    if(currentIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();

