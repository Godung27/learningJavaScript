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

newPassport(godung);
checkIn(flight, godung); // Wrong passport
*/



