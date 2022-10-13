var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var quizEl = document.querySelector(".quiz");
var buttonEl = document.querySelector(".button");
var mode = "hidden";
var answersEl = document.querySelector("#answers");
var submit = document.querySelector(".form");
var startEl = document.querySelector(".intro");
var answer = document.querySelectorAll(".true");
var usernameEl = document.querySelector(".username");
var questionEl = document.getElementById("question");

// select all intro-class elements
var introEl = document.querySelector(".intro");

var footerEl = document.querySelector("footer");

//quiz question/answers options
var quiz = [
  {
    question: "What language is used to build the framework of a website?",
    choices: [
      {
        option: "CSS",
        isCorrect: false,
      },
      {
        option: "Java",
        isCorrect: false,
      },
      {
        option: "HTML",
        isCorrect: true,
      },
      {
        option: "C++",
        isCorrect: false,
      },
    ],
  },
  {
    question: "___ are used to initiate an event in JavaScript",
    choices: [
      {
        option: "Functions",
        isCorrect: false,
      },
      {
        option: "Event Listeners",
        isCorrect: true,
      },
      {
        option: "Timers",
        isCorrect: false,
      },
      {
        option: "For loops",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What is the page/universal selector in CSS?",
    choices: [
      {
        option: ":",
        isCorrect: false,
      },
      {
        option: "()",
        isCorrect: false,
      },
      {
        option: "*",
        isCorrect: true,
      },
      {
        option: "@",
        isCorrect: false,
      },
    ],
  },
  {
    question: "Selectors in CSS are important because ___.",
    choices: [
      {
        option: "they provide colors",
        isCorrect: false,
      },
      {
        option: "they are my favorite",
        isCorrect: false,
      },
      {
        option: "they target specific elements",
        isCorrect: true,
      },
      {
        option: "they actually don't matter",
        isCorrect: false,
      },
    ],
  },
];

function createQuestionEl() {
  answersEl.setAttribute("class", "visible");
  quiz.question.createElement("header");
  quiz.choices.createElement("button");
}

// TODO: cycle through question/answers
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
  questionEl.setAttribute("class", "visible");
  setTime();
  createQuestionEl();
});

//function when the time is up
function sendMessage() {
  timeEl.textContent = "Time's Up!";
  var scoresEl = document.createElement("header");
  var input = document.createElement("input");
  var button1 = document.createElement("button");
  var scoreEl = document.createElement("h4");
  mainEl.textContent = "Final Score: " + secondsLeft;
  scoresEl.textContent = "Your Name Here: ";
  button1.textContent = "Submit";
  scoreEl.textContent = secondsLeft;
  footerEl.appendChild(scoreEl);
  footerEl.appendChild(scoresEl);
  footerEl.appendChild(button1);
  input.setAttribute("id", "username");
  footerEl.appendChild(input);
  clearInterval(setTime);
  // TODO: present quiz results - local storage - MAKE THIS WORK
  function keepUserName() {
    var lastUser = localStorage.getItem(user);
    if (user === "") return;
    else footerEl.appendChild(lastUser);
  }

  button1.addEventListener("click", function (event) {
    event.preventDefault();
    var user = document.querySelector(".username");
    localStorage.setItem("user", user);
    localStorage.getItem(user);
    // footerEl.createElement("h4");
    // h4.textContent = usernameEl;
    // footerEl.appendChild(usernameEl);
    console.log(user);

    keepUserName();
  });
}

function rightAnswer() {
  answer.addEventListener("click", function (event) {
    if (!event === true) {
      secondsLeft - 1000;
    }
  });
}

rightAnswer();

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
