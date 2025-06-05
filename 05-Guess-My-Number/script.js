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



// Implementing the Game Logic
// Manipulating CSS Styles
const secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector(".number").textContent = secretNumber;
let score = Number(document.querySelector(".score").textContent);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // no number
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";

    // correct
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number!";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem"

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
})
