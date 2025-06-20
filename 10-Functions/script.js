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


