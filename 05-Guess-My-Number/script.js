'use strict';
/*
                      // Selecting and Manipulating Elements
console.log(document.querySelector(".between").textContent);
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "correct ! 🎉";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 33;
document.querySelector(".score").textContent = 18;

document.querySelector(".guess").value = 10;
console.log(document.querySelector(".guess").value);
*/


/*
                      // Handling Click Events
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No number!"
  }
})
*/


/*
                      // Implementing the Game Logic
                      // Manipulating CSS Styles
                      // CHALLENGE #1
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = Number(document.querySelector(".highscore").textContent);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // no number
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";

    // correct
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number!";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem"

    // highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high 📈";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "Game Over 💥";
    }

    // too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low 📉"
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "Game Over 💥";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem"
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";

});
*/


/*
                      // Refactoring 
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = Number(document.querySelector(".highscore").textContent);
const displayMessage = function (message) {
  document.querySelector(".message").textContent = (message);
}
const answerNumber = function (number) {
  document.querySelector(".number").textContent = (number);
}
const displayScore = function (score) {
  document.querySelector(".score").textContent = (score);
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // no number
  if (!guess) {
    displayMessage("No number!");

    // correct
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");
    answerNumber(secretNumber);

    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem"

    // highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  // wrong
  else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? "Too high 📈" : "Too low 📉");
    score--;
    displayScore(score);
  } else {
    displayScore(0);
    displayMessage("Game Over 💥");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  answerNumber("?");
  displayScore(score);
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem"

});
*/

