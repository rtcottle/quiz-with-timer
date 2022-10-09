var timeEl = document.querySelector(".time");

var mainEl = document.getElementById("main");

var quizEl = document.querySelector(".quiz");

var buttonEl = document.querySelector("button");

var mode = "hidden";

var answersEl = document.querySelector(".answers");

var submit = document.querySelector("form");

var startEl = document.querySelector("intro");

var answer = document.querySelectorAll(".true");

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

var quizAnswers = [
  document.getElementById("answers1"),
  document.getElementById("answers2"),
  document.getElementById("answers3"),
  document.getElementById("answers4"),
  document.getElementById("answers5"),
];

//number of seconds to do the quiz.
var secondsLeft = 75;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Current Score: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
    // this removes the quiz answers/questions when the timer runs out
  }, 1000);
}

//start quiz when button clicked
introEl.addEventListener("click", function () {
  introEl.setAttribute("class", "hidden");
  quizQuestions[0].setAttribute("class", "visible");
  quizAnswers[0].setAttribute("class", "visible");
  setTime();
  answerQuestion1();
});

//function when the time is up
function sendMessage() {
  timeEl.textContent = "Time's Up!";
  // if (submit === "hidden") {
  //   document.setAttribute("class", "visible");
  // }
  var scoresEl = document.createElement("header");
  var input = document.createElement("input");
  var button1 = document.createElement("button");
  var scoreEl = document.createElement("h4");
  mainEl.textContent = "Final Score: " + secondsLeft;
  scoresEl.textContent = "Your Name Here: ";
  button1.textContent = "Submit";
  scoreEl.textContent = secondsLeft;
  button1.setAttribute("href", "");
  footerEl.appendChild(scoreEl);
  footerEl.appendChild(scoresEl);
  footerEl.appendChild(button1);
  input.setAttribute("class", "username");
  footerEl.appendChild(input);
  clearInterval(setTime);
  // TODO: present quiz results - local storage
  // function keepUserName() {
  //   var name = localStorage.getItem("username");
  // }

  // function displayName(username, secondsLeft) {}

  // keepUserName();
  // displayName();
}

// function response() {
//   if (answer === true) {
//     footerEl.createElement("p");
//     p.textContent = "correct!";
//     footerEl.appendChild("p");
//   } else {
//     footerEl.createElement("p");
//     p.textContent = "wrong!";
//     footerEl.appendChild("p");
//   }
// }

// when answer is selected, this happens
function answerQuestion1() {
  answersEl.addEventListener("click", function () {
    quizQuestions[0].setAttribute("class", "hidden");
    quizAnswers[0].setAttribute("class", "hidden");
    quizQuestions[1].setAttribute("class", "visible");
    quizAnswers[1].setAttribute("class", "visible");
    answerQuestion2();
    // response();
  });
}

function answerQuestion2() {
  answersEl.addEventListener("click", function () {
    quizQuestions[1].setAttribute("class", "hidden");
    quizAnswers[1].setAttribute("class", "hidden");
    quizQuestions[2].setAttribute("class", "visible");
    quizAnswers[2].setAttribute("class", "visible");
    answerQuestion3();
  });
}

function answerQuestion3() {
  answersEl.addEventListener("click", function () {
    quizQuestions[2].setAttribute("class", "hidden");
    quizAnswers[2].setAttribute("class", "hidden");
    quizQuestions[3].setAttribute("class", "visible");
    quizAnswers[3].setAttribute("class", "visible");
    answerQuestion4();
  });
}

function answerQuestion4() {
  answersEl.addEventListener("click", function () {
    quizQuestions[3].setAttribute("class", "hidden");
    quizAnswers[3].setAttribute("class", "hidden");
    quizQuestions[4].setAttribute("class", "visible");
    quizAnswers[4].setAttribute("class", "visible");
    clearInterval(secondsLeft);
    hideQuestions();
  });
}

function hideQuestions() {
  answersEl.addEventListener("click", function () {
    clearInterval(setTime);
    quizQuestions[4].setAttribute("class", "hidden");
    quizAnswers[4].setAttribute("class", "hidden");
    timeEl.setAttribute("class", "hidden");
    sendMessage();
  });
}

// TODO: timer reduced when answer is wrong.
// TODO: add timer result to scorelist.
