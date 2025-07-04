'use strict';

/*
                      // Default Parameters
const booking = [];

const Createbooking = function (flightNum, passenger = 1, price = 200) {
  // ES5 Default values
// passenger = passenger || 1;
// price = price || 500;

  const bookingFlight = {
    flightNum,
    passenger,
    price,
  }
  booking.push(bookingFlight);
  console.log(bookingFlight);
}
Createbooking("B474", 5, 100); // {flightNum: 'B474', passenger: 5, price: 100}
Createbooking(); // {flightNum: undefined, passenger: 1, price: 200}
Createbooking("B474", undefined, 300); // {flightNum: 'B474', passenger: 1, price: 300}
*/


/*
                      // How Passing Arguments Works: Value vs. Reference
const flight = "LH383";
const godung = {
  name: "Godung Lim",
  passport: 3029309
}

const checkIn = function (flightNum, passenger) {
  flightNum = "LH222";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === 3029309) {
    console.log("Check In");
  } else {
    console.log("Wrong passport");
  }
}

checkIn(flight, godung); // Check In
console.log(flight); // LH383
console.log(godung); // {name: 'Mr.Godung Lim', passport: 3029309}

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
}

newPassport(godung); // (Heap)
checkIn(flight, godung); // Wrong passport
*/


/*
                      // Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
}

const UpperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
}

  // Higher-order function
const transformStr = function (str, callFunction) {
  console.log(`Original string: ${str}`);
  console.log(`Transform string: ${callFunction(str)}`);
  console.log(`Function name: ${callFunction.name}`);
}

transformStr("Hello my name is Godung", oneWord);
// Original string: Hello my name is Godung
// Transform string: hellomynameisgodung
// Function name: oneWord

transformStr("Hello my name is Godung", UpperFirstWord);
// Original string: Hello my name is Godung
// Transform string: HELLO my name is Godung
// Function name: UpperFirstWord

  // JS use callbacks all the time
const run = function () {
  console.log("🏃‍♂️");
}
document.body.addEventListener("click", run);

["Godung", "Smith"].forEach(run); // 🏃‍♂️🏃‍♂️
*/


/*
                      // Functions Returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  }
}
const greetHi = greet("Hi"); // greetHi = function
greetHi("Godung"); // Hi Godung

greet("Hello")("Smith") // Hello Smith

    // Challenge
  // By myself
const greetArr = greeting => function (name) {
  console.log(`${greeting} ${name}`);
}
greetArr("Hi")("Mark"); // Hi Mark
  // Another way
const greetArr2 = greeting => name => console.log(`${greeting} ${name}`);
greetArr2("Hi")("Mark"); // Hi Mark
*/


/*
                      // The call and apply Methods
const eagle = {
  airline: "Eagle Airline",
  iataCode: "EA",
  booking: [],
  // book: function () {},
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);

    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
}

eagle.book(222, "Godung"); // Godung booked a seat on Eagle Airline flight LH222
console.log(eagle);

const flyHigh = {
  airline: "Fly High",
  iataCode: "FH",
  booking: [],
};
const book = eagle.book;

  // Dose NOT work
// book(777, "Smith"); // "this" keyword point to undefined

  // Call method
book.call(flyHigh, 653, "Smith"); // Set "this" keyword point to flyHigh
// Smith booked a seat on Fly High flight FH653
console.log(flyHigh);

const tigerStar = {
  airline: "Tiger Star",
  iataCode: "TS",
  booking: [],
};
book.call(tigerStar, 777, "Tony");
book.call(tigerStar, 930, "Nick");
console.log(tigerStar);

  // Apply method
const flightBooking = [537, "Ron"];
book.apply(tigerStar, flightBooking);

book.call(tigerStar, ...flightBooking) // same
*/


/*
                      // The bind Method
const eagle = {
  airline: "Eagle Airline",
  iataCode: "EA",
  booking: [],
  // book: function () {},
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);

    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
}
const flyHigh = {
  airline: "Fly High",
  iataCode: "FH",
  booking: [],
};
const tigerStar = {
  airline: "Tiger Star",
  iataCode: "TS",
  booking: [],
};
const book = eagle.book;

  // Bind method
const bookEA = book.bind(eagle);
const bookFY = book.bind(flyHigh);
const bookTS = book.bind(tigerStar);

bookEA(5, "Hummel"); // Hummel booked a seat on Eagle Airline flight EA5

const bookTS99 = book.bind(tigerStar, 99); // similar like default value
bookTS99("Ham"); // Ham booked a seat on Tiger Star flight TS99

  // With Event Listener
eagle.plane = 100;
eagle.buyPlane = function () {
  console.log(this);
  this.plane++;

  console.log(this.plane);
}
document.querySelector(".buy").addEventListener("click", eagle.buyPlane.bind(eagle)); // define "this" keyword to eagle

  // Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.7); // similar like default value
// addVat = value => value + value * 0.7

    // Challenge
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  }
}
const addVat7 = addTaxRate(0.7);

console.log(addTaxRate(0.1)(200));
console.log(addVat7(200));
*/


/*
                      // Immediately Invoked Function Expressions (IIFE)
const run = function () {
  console.log("Run");
}
run();
run();

  // IIFE (Run function once time)
(function () {
  console.log("Run Only Once");
})();

  // IIFE Arrow
(() => console.log("Run Only Once Arrow"))();
*/


/*
                      // Closures
const secureBooking = function () {
  let people = 0;
  return function () {
    people++;
    console.log(people);
  }
}
const booking = secureBooking();

booking(); // 1
booking(); // 2
booking(); // 3

console.dir(booking);
*/


/*
                      // More Closure Examples
    // Example 1
let x;

const first = function () {
  const a = 10;
  x = function () {
    console.log(a * 2);
  }
}

const second = function () {
  const b = 999;
  x = function () {
    console.log(b * 2);
  }
}

first();
x(); // 20

second();
x(); // 1998

    // Example 2
const boarding = function (n, wait) {
  const group = n / 5;

  setTimeout(function () {
    console.log(`${n} passengers`);
    console.log(`There are 5 groups, each with ${group} passengers`)
  }, wait * 1000);

  console.log(`Start boarding in ${wait} second`);
}

// const group = 20;
boarding(200, 5);
*/





