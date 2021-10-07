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

let initialTime = 200;
let questionQ = 0;
var timerCount ;
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
var nextQuestion = document.getElementById("question-text");
var closingPage = document.getElementById("closing-page");
var highScorePage = document.getElementById("high-scores");
var playersInitials = document.getElementById("playersintials");


var startBtn = document.getElementById("start-button");
var initialTimeEl = document.getElementById("time-left");
var score = 0;
var keepScore =  JSON.parse(localStorage.getItem("score")) || [];
var submitScore = document.getElementById("submit");
var playerInitial = document.getElementById("initials");

function landingPage(){
// highScorePage.style.display = "none";
// questionList.style.display = "none";
// closingPage.style.display = "none";
};


function countDown(){
    initialTime--;
    initialTimeEl.textContent = initialTime;
    if (initialTime === 0 || questions[questionQ].numb -1 === questions.length){
    
        endQuizz();
    }
  // return timerCount;
  
};



var startQuestionQ = function(){
    // highScorePage.style.display = "none";
    // openPage.style.display = "none";
    // closingPage.style.display = "none";
    //countDown();
    var q = questions[questionQ];
    //var nextQuestion = document.getElementById("question-text");
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

var checkCorrect = function(){
//    console.log('checkCorrect');
    // var checkAnswer = questions[questionQ].correctAns;
    // var selectedAnsw = document.getElementById("answers-body");
  
    // var clickedAnsw = event.target;
    var checkAnswer = questions[questionQ].correctAns;
    // console.log(this.textContent);
    // console.log(checkAnswer);
   // for (let i = 0; questionQ < questions.length; i++){}
        if (this.textContent !== checkAnswer){
            initialTime = initialTime -10;
     } ;
     questionQ++;
     if (questionQ >= questions.length) {
         endQuizz();
     } else{
        startQuestionQ();
     }

    
    
       
        score = initialTime;
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
    timerCount =  setInterval(countDown, 1000);
    startQuestionQ();
    // checkCorrect();
};






var endQuizz = function(){
    // highScorePage.style.display = "none";
    //questionList.style.display = "none";
    // openPage.style.display = "none";
    alert("Game over");
    clearInterval(timerCount);
};

function highScore(event){
    event.preventDefault();
    console.log("highscore");
    // openPage.style.display = "none";
    // questionList.style.display = "none";
    // closingPage.style.display = "none";
    var userInitials = {
        name: playerInitial.value,
        score: score,
    }
    keepScore.push(userInitials);
    console.log("keepscore", keepScore);
    localStorage.setItem("score", JSON.stringify (keepScore));
    console.log(keepScore.length);
    for (let i = 0; i < keepScore.length; i++) {
        var liEl = document.createElement("li");
        liEl.textContent = ("player: " + keepScore[i].name + " score: " + keepScore[i].score);
        console.log(liEl);
        playersInitials.append(liEl);
    }
console.log("loop done");
    // return liEl;
};

function retrieveHigh(){
   //JSON.parse(localStorage.getItem("score"));
    // openPage.style.display = "none";
    // questionList.style.display = "none";
    // closingPage.style.display = "none";
    var keepScore =  JSON.parse(localStorage.getItem("score")) || [];
    console.log(keepScore);
   
};

function clearHighScore(){
    localStorage.clear("score");
    playersInitials.innerHTML = "";
}


startBtn.addEventListener("click", startQuiz);
highSco.addEventListener("click", retrieveHigh);
submitScore.addEventListener("click", highScore);
goBack.addEventListener("click", landingPage);
clearHigh.addEventListener("click", clearHighScore);



//startQuestionQ();