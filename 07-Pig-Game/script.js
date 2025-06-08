'use strict';

// Pig Game
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const currentS0 = document.getElementById("current--0");
const currentS1 = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

score0El.textContent = 0;
score1El.textContent = 0;
let currentScore = 0;

diceEl.classList.add("hidden");

btnRoll.addEventListener("click", function () {
  const diceNum = Math.trunc(Math.random() * 6) + 1;

  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${diceNum}.png`;

  if (diceNum !== 1) {
    currentScore += diceNum;
    currentS0.textContent = currentScore;
  } else {
    currentScore = 0;
  }
})


