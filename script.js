// TODO: Add timer
var timeEl = document.querySelector(".time");

var mainEl = document.getElementById("main");

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
  var scoresEl = document.createElement(<header>Final Score</header>);
  scoresEl.createElement(<button>Try Again</button>);
  scoresEl.createElement(<button>High Scores</button>);
  scoresEl.createElement(<input></input>);
  mainEl.appendChild(scoresEl);
}

setTime();

// TODO: add event listener for start button
// TODO: cycle through questions - - can be through event listener or HTML
// TODO: present quiz results - local storage
// TODO: show right/wrong answers
// TODO: timer reduced when answer is wrong.
