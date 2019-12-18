var timeEl = document.querySelector("#quizTime");
var quizButton = document.getElementById("startQuiz");
var highScore = document.getElementById("highScore");
var questions = document.querySelector(".questions");
var choices = document.querySelector(".choices");
var optionBtn = $(".optionBtns");
var score = 0;
var storedHighScore = 0;
var currentQuestion = 0;
var quizCountDown = 60;

function quizTimer() {
    var timerInterval = setInterval(function () {
        timeEl.textContent = "Time: " + quizCountDown;
        quizCountDown--;

        if (quizCountDown === 0 || currentQuestion === quizQuestions.length) {
            clearInterval(timerInterval);
            timeEl.textContent = "";
            if (score > storedHighScore){
                questions.textContent = "New High Score! " + score;
                $(".initial").show();
            } else {
                questions.textContent = "Score: " + score;
            }
            $(".optionBtns").empty();
        }
    }, 1000)
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
    
}

optionBtn.on("click", "button", function(){
    var item = quizQuestions[currentQuestion];
    console.log($(this).attr("data-option"));
    console.log(item.answer)
    
    if (($(this).attr("data-option")) !== item.answer){
        quizCountDown = quizCountDown - 5;
    } else {
        score += quizCountDown;
    }
    console.log(score)
    $(".optionBtns").empty();
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
        questionPrint();
    } 
})

$(".initial").on("click", "button", function(){
    storedHighScore = score;
    var initials = $("#init").val();
    console.log(initials)
    $(".initial").empty();
    var highScoreAry = [initials, storedHighScore];
    var highScore = highScoreAry.toString();
    localStorage.setItem("High Score" , highScore);
})

quizButton.addEventListener("click", function () {
    quizButton.style.display = "none"
    quizTimer();
    questionPrint();
});

var sto = localStorage.getItem("High Score");
console.log(sto);
sto = sto.split(",");
console.log(sto);
storedHighScore = sto[1];
highScore.textContent = `High Score: ${storedHighScore} ${sto[0]}`;

