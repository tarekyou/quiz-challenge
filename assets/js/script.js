let questions = [
    {
        numb: 1,
        question: "String values must be enclosed within ______ when being assigned to variables",
        answers: [
            "commas",
            "curly brackets",
            "quotes",
            "parenthesis"
        ],
        correctAns: "quotes"
    },
    {
        numb: 2,
        question: "Commonly used data types DO NOT include:",
        answers: [
            "strings",
            "booleans",
            "alerts",
            "numbers"
        ],
        correctAns: "alerts"
    },
    {
        numb: 3,
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            "JavaScript",
            "terminal/bash",
            "for loops",
            "console.log"
        ],
        correctAns: "console.log"
    },
    {
        numb: 4,
        question: "The condition in an if/else statement is enclosed with",
        answers: [
            "quotes",
            "curly brackets",
            "parenthesis",
            "square brackets"
        ],
        correctAns: "parenthesis"
    },
    {
        numb: 5,
        question: "Arrays in JavaScript can be used to store ______",
        answers: [
            "numbers and arrays",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        correctAns: "all of the above"
    },
];

//start code

let initialTime = 75;
let questionQ = [questions];





var startBtn = document.getElementById("start-button");




var countDown = function(){
    var timerCount = setInterval(initialTime--, 1000)
    if (timerCount === 0 || questionQ === questions.length){
    
        endQuizz();
    }
    return timerCount;
};



var startQuestionQ = function(){
    countDown();
    var nextQuestion = "";
    for (let i = 0; questionQ < questions.length; i++) {
        nextQuestion= questionQ[i] ;
    }
};

var checkCorrect = function(){
    var checkAnswer = questions.correctAns[i];
    for (let i = 0; questionQ < questions.length; i++){
        if (checkAnswer !== correctAns){
            timerCount = timerCount - 10;
        };
    };
};    









var endQuizz = function(){
    alert("Game over");
};
startBtn.addEventListener("click", startQuestionQ);

//startQuestionQ();