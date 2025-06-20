'use strict';

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
