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
       // correctAns: 3,
        correctAns: "quotes",
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
        correctAns: "alerts",
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
        correctAns: "console.log",
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
        correctAns: "parenthesis",
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
        correctAns: "all of the above",
    },
];

//start code

let initialTime = 75;
let questionQ = 0;
var timerCount = setInterval(countDown, 1000);
var highSco = document.getElementById("view-high-scores");
var goBack = document.getElementById("go-back");
var clearHigh = document.getElementById("clear-high-scores");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var selectedAnsw = document.getElementById("answers-body");
var openPage = document.getElementById("opening-page");
var questionList = document.getElementById("question-list");
var questionText = document.getElementById("question-text");
var closingPage = document.getElementById("closing-page");
var highScorePage = document.getElementById("high-scores");



var startBtn = document.getElementById("start-button");
var initialTimeEl = document.getElementById("time-left");
var score = 0;
var keepScore = [];
var submitScore = document.getElementById("submit");


function landingPage(){

};


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




    btn1.textContent = q.answers[0]
    btn2.textContent = q.answers[1]
    btn3.textContent = q.answers[2]
    btn4.textContent = q.answers[3]

    // for (let i = 0; questionQ < questions.length; i++) {
    //     nextQuestion++ ;
    // }
};
var checkAnswer = questions[questionQ].correctAns;
var checkCorrect = function(){
   // console.log('checkCorrect');
    // var checkAnswer = questions[questionQ].correctAns;
    // var selectedAnsw = document.getElementById("answers-body");
    selectedAnsw.addEventListener("click", function(event){
    var clickedAnsw = event.target;
    
   // for (let i = 0; questionQ < questions.length; i++){}
        if (clickedAnsw.textContent != checkAnswer){
            initialTime = initialTime -10;
     } });

    questionQ++;
    startQuestionQ();
       
       let score = initialTime;
       return score;
};    

//var btn1 = document.getElementById("btn1");
btn1.addEventListener("click", checkCorrect);
//var btn2 = document.getElementById("btn2");
btn2.addEventListener("click", checkCorrect);
//var btn3 = document.getElementById("btn3");
btn3.addEventListener("click", checkCorrect);
//var btn4 = document.getElementById("btn4");
btn4.addEventListener("click", checkCorrect);



function startQuiz(){
    countDown();
    startQuestionQ();
    checkCorrect();
};






var endQuizz = function(){
    alert("Game over");
    clearInterval(timerCount);
};

function highScore(){
    keepScore.push(score);
    localStorage.setItem("score", score);
};

function retrieveHigh(){
   JSON.parse(localStorage.getItem(score));
};


startBtn.addEventListener("click", startQuiz);
highSco.addEventListener("click", retrieveHigh);
submitScore.addEventListener("click", highScore);
goBack.addEventListener("click", landingPage);


//startQuestionQ();