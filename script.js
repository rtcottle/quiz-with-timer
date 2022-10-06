var timeEl = document.querySelector(".time");

var mainEl = document.getElementById("main");

var quizEl = document.querySelector("quiz");

//number of seconds to do the quiz.
var secondsLeft = 75;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Current Score: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  timeEl.textContent = "Time's Up!";
  var scoresEl = document.createElement("header");
  var button1 = document.createElement("button");
  var button2 = document.createElement("button");
  var input = document.createElement("input");
  mainEl.textContent = "Final Score: " + secondsLeft;
  button1.textContent = "Clear History";
  button2.textContent = "View Highscores";
  quizEl.appendChild(scoresEl);
  quizEl.appendChild(scoresEl);
  quizEl.appendChild(button1);
  quizEl.appendChild(button2);
  quizEl.appendChild(input);
}

// setTime();

quizEl.addEventListener("click", function () {
  if (secondsLeft < 70) {
    setTime();
  }
});

// TODO: add event listener for start button

// TODO: cycle through questions - - can be through event listener or HTML
// TODO: present quiz results - local storage
// TODO: show right/wrong answers
// TODO: timer reduced when answer is wrong.
