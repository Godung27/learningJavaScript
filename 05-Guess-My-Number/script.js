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



// Handling Click Events
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No number!"
  }
})