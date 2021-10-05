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
let questionQ = 0;
var timerCount = setInterval(countDown, 1000);




var startBtn = document.getElementById("start-button");
var initialTimeEl = document.getElementById("time-left");



function countDown(){
    initialTime--;
    initialTimeEl.textContent = initialTime;
    if (initialTime === 0 || questions[questionQ].numb === questions.length){
    
        endQuizz();
    }
  // return timerCount;
  
};



var startQuestionQ = function(){
    //countDown();
    var q = questions[questionQ];
    var nextQuestion = document.getElementById("question-text");
    //console.log(nextQuestion);
    nextQuestion.textContent = q.question;


    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var btn4 = document.getElementById("btn4");

    btn1.textContent = q.answers[0]
    btn2.textContent = q.answers[1]
    btn3.textContent = q.answers[2]
    btn4.textContent = q.answers[3]

    // for (let i = 0; questionQ < questions.length; i++) {
    //     nextQuestion++ ;
    // }
};

var checkCorrect = function(event){
    console.log('checkCorrect');
    var checkAnswer = questions[questionQ].correctAns;
    var selectedAnsw = event.target;
    for (let i = 0; questionQ < questions.length; i++){
        if (checkAnswer !== selectedAnsw){
            initialTime = initialTime -10;
        };
    };
    
    questionQ++;
    startQuestionQ();
};    

var btn1 = document.getElementById("btn1");
btn1.addEventListener("click", checkCorrect);
var btn2 = document.getElementById("btn2");
btn2.addEventListener("click", checkCorrect);
var btn3 = document.getElementById("btn3");
btn3.addEventListener("click", checkCorrect);
var btn4 = document.getElementById("btn4");
btn4.addEventListener("click", checkCorrect);








var endQuizz = function(){
    alert("Game over");
    clearInterval(timerCount);
};
startBtn.addEventListener("click", startQuestionQ);

//startQuestionQ();