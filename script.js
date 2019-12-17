var timeEl = document.querySelector("#quizTime");
var quizButton = document.getElementById("startQuiz");
var highScore = document.getElementById("highScore");
var score = 0;
var storedHighScore = 0;

function quizTimer(){
    var quizCountDown = 60;
    var timerInterval = setInterval(function(){
        timeEl.textContent = "Time: " + quizCountDown;    
        quizCountDown--;

        if(quizCountDown === 0) {
            clearInterval(timerInterval);
            timeEl.textContent = "";
            //add post quiz functionallity here likely a function call out to post quiz functions
        }
    }, 1000)
}

function quizRun(){
    
}

quizButton.addEventListener("click", function(){
    quizButton.style.display = "none"
    quizTimer();
    quizRun();
});

highScore.textContent = "High Score: " + storedHighScore;
