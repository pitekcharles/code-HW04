var timeEl = document.querySelector("#quizTime");
var quizButton = document.getElementById("startQuiz");

function quizTimer(){
    var quizCountDown = 60;
    var timerInterval = setInterval(function(){
        timeEl.textContent = quizCountDown + " seconds left to finish the quiz!";    
        quizCountDown--;

        if(quizCountDown === 0) {
            clearInterval(timerInterval);
            //add post quiz functionallity here likely a function call out to post quiz functions
        }
    }, 1000)
}

quizButton.addEventListener("click", function(){
    quizTimer();
});
