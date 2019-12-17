var timeEl = document.querySelector("#quizTime");
var quizButton = document.getElementById("startQuiz");
var highScore = document.getElementById("highScore");
var questions = document.querySelector(".questions");
var choices = document.querySelector(".choices");
var optionBtn = $(".optionBtns");
var score = 0;
var storedHighScore = 0;
var currentQuestion = 0;

//Move to other folder later

var quizQuestions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Famous titles",
        choices: ["Dolly Parton", "Your mother"],
        answer: "Dolly Parton"
    },
    {
        title: "Pick a number, any number and you win.",
        choices: ["V", "dog", "moo", "5"],
        answer: "5"
    },
    {
        title: "Ive paid my dues....",
        choices: ["Every monday", "time after time", "the last thursday of the month"],
        answer: "time after time"
    }
];

//move to questions file later

function quizTimer() {
    var quizCountDown = 60;
    var timerInterval = setInterval(function () {
        timeEl.textContent = "Time: " + quizCountDown;
        quizCountDown--;

        if (quizCountDown === 0) {
            clearInterval(timerInterval);
            timeEl.textContent = "";
            questions.textContent = "Score: " + score;
            $(".optionBtns").empty();

            //add post quiz functionallity here likely a function call out to post quiz functions
        }
    }, 100)
}

function questionPrint () {
    var item = quizQuestions[currentQuestion];
    var ansAry = item.choices;
    questions.textContent = item.title;
    for (var n = 0; n < ansAry.length; n++){
        var options = $("<button>");
        options.attr("data-option", ansAry[n]);
        options.text(ansAry[n]);
        $(".optionBtns").append(options);
    }
    currentQuestion++;
}


optionBtn.on("click", function(){
    $(".optionBtns").empty();
    questionPrint();
})

quizButton.addEventListener("click", function () {
    quizButton.style.display = "none"
    quizTimer();
    questionPrint();
    // quizRun();
});

highScore.textContent = "High Score: " + storedHighScore;

