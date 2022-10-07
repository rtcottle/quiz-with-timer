var timeEl = document.querySelector(".time");

var mainEl = document.getElementById("main");

var quizEl = document.querySelector(".quiz");

var buttonEl = document.querySelector("button");

// select all intro-class elements
var introEl = document.querySelector(".intro");

var footerEl = document.querySelector("footer");
//array to choose quiz questions.
var quizQuestions = [
  document.getElementById("question1"),
  document.getElementById("question2"),
  document.getElementById("question3"),
  document.getElementById("question4"),
  document.getElementById("question5"),
];

// var quizQuestions = [
//   "What language is used to build the framework of a website?",
//   "___are used to initiate an event in JavaScript",
//   "Selectors in CSS are important because___.",
//   "What is the page selector in CSS?",
//   "JavaScript is a type of Java.",
// ];

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

//function when the time is up
function sendMessage() {
  timeEl.textContent = "Time's Up!";
  var scoresEl = document.createElement("header");
  var input = document.createElement("input");
  var button1 = document.createElement("button");
  mainEl.textContent = "Final Score: " + secondsLeft;
  scoresEl.textContent = "Your Name Here: ";
  button1.textContent = "Submit";
  button1.setAttribute("href", "");
  footerEl.appendChild(scoresEl);
  footerEl.appendChild(scoresEl);
  footerEl.appendChild(button1);
  input.setAttribute("class", "username");
  footerEl.appendChild(input);
}
//start quiz when button clicked
quizEl.addEventListener("click", function () {
  introEl.setAttribute("class", "hidden");
  setTime();
});

// function answerQuestion() {
//     if
// }

// TODO: make the intro text disappear on click
// TODO: cycle through questions - - can be through event listener or HTML
// TODO: assign each question an ID of so they can be cycled through the array.
// TODO: present quiz results - local storage
// TODO: show right/wrong answers
// TODO: timer reduced when answer is wrong.
