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

var x = 1;
const y = 2;
let z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
*/


/*
// The this Keyword in Practice
console.log(this); // Global object

const calAge = function (birthYear) { // own this keyword
  console.log(2025 - birthYear);
  console.log(this); // undefined
}
calAge(1999);

const calAgeArrow = (birthYear) => { // lexical this keyword (use keyword of parent function)
  console.log(this); // Global object
}
calAgeArrow();

const godung = {
  year: 2002,
  calAge: function () {
    console.log(this); // year, calAge
    console.log(2025 - this.year);
  }
}
godung.calAge();

const tom = {
  year: 2020
}
tom.calAge = godung.calAge;
tom.calAge(); // this = year: 2020, calAge

const f = godung.calAge;
f(); // undefined (this.year = undefined)
*/


/*
                      // Regular Functions vs. Arrow Functions
const godung = {
  firstName: "Godung",
  year: 2002,
  calAge: function () {
    console.log(this);
    console.log(2020 - this.year);

        // Solution #1
    // const self = this; // self || that
    // const young = function () {
    //   console.log(self);
    //   console.log(self.year < 18);
    //   // console.log(this.year < 18); // undefined
    // }

        //  Solution #2 (Arrow function)
    const young = () => {
      console.log(this);
      console.log(this.year < 18);
    }

    young();
  },

  hello: () => { // Arrow function
    console.log(this) // undefined
    console.log(`Hello ${this.firstName}`); // Hello undefined
  }
}
godung.calAge();
godung.hello();

// Arguments keyword
const funExpr = function (a, b) {
  console.log(arguments);
  return a + b;
}
funExpr(3, 5);
funExpr(3, 5, 7, 8);

var funArrow = (a, b) => {
  console.log(arguments); // undefined
  return a + b;
}
funArrow(1, 3, 5)
*/


