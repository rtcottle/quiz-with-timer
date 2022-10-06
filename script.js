var timeEl = document.querySelector(".time");

var mainEl = document.getElementById("main");

var quizEl = document.querySelector(".quiz");

var buttonEl = document.querySelector("button");

var introEl = document.querySelector(".intro");

// var quizQuestions = [
//   "What language is used to build the framework of a website?",
//   "___are used to initiate an event in JavaScript",
//   "Selectors in CSS are important because___.",
//   "What is the page selector in CSS?",
//   "JavaScript is a type of Java.",
// ];

var answers1 = ["1. Java", "2. CSS", "3. HTML", "4. C++"];

//number of seconds to do the quiz.
var secondsLeft = 2;

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
  introEl.setAttribute("class", "hidden");
  setTime();
});

// TODO: cycle through questions - - can be through event listener or HTML
// TODO: present quiz results - local storage
// TODO: show right/wrong answers
// TODO: timer reduced when answer is wrong.
