let htmlQuestion = document.querySelector(".coding-question");
let htmlOptions = document.querySelector(".coding-options");
let htmlAnswer = document.querySelector(".coding-answer");
let submitForm = document.querySelector(".score-submission");
let submitScore = document.querySelector('.submit-score');
let codingQuestions = document.querySelector(".coding-questions");
let timeLeft = document.querySelector(".time-left");
let codingContainer = document.querySelector(".coding-container");
let yourScore = document.querySelector(".score-text");
let secondsLeft = 30;
let randomNumber = Math.floor(Math.random() * QandA.length);
let questionSet = QandA[randomNumber];
let question = questionSet.question;
let allOptions = questionSet.options.allOptions;
let correct = questionSet.options.correctOption;
htmlQuestion.innerHTML = question;

const startQuiz = () => {
    codingContainer.style.display = "none";
    codingQuestions.style.display = "flex";
    let timerInterval = setInterval(() => {
        secondsLeft--;
        timeLeft.innerHTML = `You have ${secondsLeft} seconds left`;
        if(QandA.length === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

for(let i = 0; i < allOptions.length; i++){
    let sortedOptions = allOptions[i];
    let div = document.createElement("div");
    div.setAttribute("class", "quiz-option")
    div.innerHTML = sortedOptions;
    htmlOptions.appendChild(div);
    if(allOptions[i] === correct){
        div.setAttribute("data-answer", true);
    } else {
        div.setAttribute("data-answer", false);
    }
}