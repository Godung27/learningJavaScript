'use strict';

// Pig Game
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
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

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
}

diceEl.classList.add("hidden");

btnRoll.addEventListener("click", function () {
  if (playing) {
    const diceNum = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${diceNum}.png`;

    if (diceNum !== 1) {
      currentScore += diceNum;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
})

btnHold.addEventListener("click", function () {
  if (playing) {
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

    if (score[activePlayer] >= 10) {
      playing = false;

      document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
      document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");

      diceEl.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
})
