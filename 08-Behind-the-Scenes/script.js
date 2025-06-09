'use strict';
/*
                      // Scoping in Practice
const firstName = "Godung";

function me(birthYear) {
  const age = 2025 - birthYear;
  console.log(`${firstName}'s turns ${age} this year.`);

  let currentJob;
  const job = function (job) {
    currentJob = job;
  }

  job("student")
  console.log(currentJob);

  const godungJob = function () {
    console.log(`${firstName}'s ${currentJob}`)

    if (age > 19) {
      const currentJob = "developer";
      console.log(`But ${firstName}'s turns ${age} this year, he's ${currentJob} now!`);
    }
  }
  godungJob();
}
me(2002);
*/


/*
                      // Hoisting and TDZ in Practice
// Varibles
console.log(firstName); // undefined
// console.log(lastName); // TDZ (Temporal Dead Zone)
// console.log(year); // TDZ

var firstName = "Godung";
const lastName = "Lim";
let year = 2002;

// Function
console.log(funDecla(2, 7)); // 9
// console.log(funExpr(3, 1)); // TDZ
// console.log(funArrow(5, 5)); // TDZ

function funDecla(a, b) {
  return a + b;
}

const funExpr = function (a, b) {
  return a + b;
}

var funArrow = (a, b) => a + b;

    // Example
console.log(potato); // undefined

if (!potato) {
  console.log(deleteProduct()); // All products delete!
}

var potato = 5

function deleteProduct() {
  console.log("All products delete!")
}
*/


