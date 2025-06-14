"use strict";

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  }
}

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  // Destructuring Arrays
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Destructuring Objects
  orderDelivery: function ({ time = "20:00", starterIndex = 1, mainIndex = 0 }) {
    console.log(`At ${time}, order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}`);
  },

  // The Spread Operator (...)
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  // Rest Pattern and Parameters
  orderPizza: function (mainIngredient, ...otherIng) {
    console.log(mainIngredient);
    console.log(otherIng);
  }

};


/*
                      // Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

const [x, y, z] = arr;
console.log(arr);
console.log(x, y, z);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

  // Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[secondary, main] = [main, secondary];
console.log(main, secondary)

// Recive 2 return values form a function
const [starter, mainCourse] = restaurant.order(0, 2);
console.log(starter, mainCourse)

const nested = [2, 4, [3, 9]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

  // Default values
// const [q = 1, r = 1, s = 1] = [8, 9];
// console.log(q, r, s); // 8, 9 ,1
const [q = 1, r = 1, s = 1] = [8];
console.log(q, r, s); // 8, 1, 1
*/


/*
                      // Destructuring Objects
restaurant.orderDelivery({ // At 11:30, order received Garlic Bread and Risotto
  time: "11:30",
  starterIndex: 2,
  mainIndex: 2
});

restaurant.orderDelivery({ // At 20:00, order received Caprese Salad and Pizza
  starterIndex: 3
})

const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);

const {
  name: restaurantName,
  categories: task,
  openingHours: hours
} = restaurant;
console.log(restaurantName, task, hours);

  // Default values
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

  // Mutating variables
let a = 111;
let b = 999;
const obj = { a: 20, b: 7, c: 0 };
console.log(obj);

({ a, b } = obj);
console.log(a, b);

  // Nested objects
const { fri: { open: o, close: c } } = openingHours;
console.log(o, c)
*/


/*
                      // The Spread Operator (...)
const arr = [2, 4, 9];
const arrBadCopy = [arr[0], arr[1], arr[2]]; // 2, 4, 9
const arrCopy = [...arr]; // 2, 4, 9
const arrNew = [1, ...arr, 10]; // 1, 2, 4, 9, 10
console.log(`
  arr: ${arr},
  arrBadCopy: ${arrBadCopy},
  arrCopy: ${arrCopy},
  arrNew: ${arrNew}`
)

const newMenu = [...restaurant.mainMenu, "Sandwich"];
console.log(newMenu);

  // Copy
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

  // Merge arrays
const allMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(allMenu);

// Iterable: arrays, strings, maps, sets (Not object)
const str = "Godung" // G o d u n g
const letter = [...str, , , 27]; // G o d u n g, , 27
console.log(...str);
console.log(letter);
// console.log(`${...str}`); // Unexpected ...

const ingredients = [
  prompt("Let's make pasta! ingredient 1?"),
  prompt("ingredient 2?"),
  prompt("ingredient 3?")
];
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

  // Object
const newRestaurant = { Owner: "Godung", ...restaurant, OwnerIn: 2002 };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = structuredClone("Rolina Goco");
console.log(restaurant.name);
console.log(restaurantCopy.name);
*/


/*
                      // Rest Pattern and Parameters
    // 1) Destructuring
  // Spread, becuase on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

  // Spread, becuase on LEFT side of =
const [a, b, ...other] = [1, 2, 3, 4];
console.log(a, b, other); // 1, 2, [3, 4]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu
];
console.log(pizza, risotto, otherFood)

  //  Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

    // 2) Functions
const add = function (...number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += number[i];
  }
  console.log(sum);
}
add(2, 3);
add(7, 8, 9);

const x = [20, 30];
add(...x);

restaurant.orderPizza("tomato", "mushroom", "cheese")
*/


/*
                      // Short Circuiting (&& and ||)
  // OR \\ (first True)
console.log(0 || "Godung"); // Godung
console.log(27 || null); // 27
console.log(" " || undefined); // undefined (No true then last false)

console.log(0 || 27 || "Godung" || undefined) // 27

restaurant.numGuests = 0;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 20;
console.log(guest1); // 20

restaurant.numGuests = 5;
const guest2 = restaurant.numGuests || 10;
console.log(guest2); // 5

  // AND && (first False)
console.log(0 && "Godung"); // 0
console.log(27 && "Hello"); // Hello

    // Example
if (restaurant.orderPizza) { 
  restaurant.orderPizza("Pork", "Cheese");
}

restaurant.orderPasta && restaurant.orderPasta("Mushroom", "Chiken", "Pepper");
*/


/*
                      // The Nullish Coalescing Operator (??)
// Nullish: null and undefined (Not 0 or " ") 
  // Nullish (first True)
restaurant.numGuests = 0;
const guestZero = restaurant.numGuests ?? 10;
console.log(guestZero); // 0

restaurant.numGuests = undefined;
const unGuest = restaurant.numGuests ?? 10;
console.log(unGuest); // 10
*/


/*
                      // Logical Assignment Operators
const res1 = {
  guest: 10,
  name: "Ca-pone Pizza",
  owner: "Godung",
};
const res2 = {
  guest: 0,
  name: undefined,
  owner: " ",
};

  // AND assignment operator
res1.guest &&= 5; // res1.guest = res1.guest && 5
res2.guest &&= 5; // res2.guest = res2.guest && 5

  // OR assignment operator
res1.name ||= "<ANONYMOUS>"; // res1.name = res1.name || "<ANONYMOUS>"
res2.name ||= "<ANONYMOUS>"; // res2.name = res2.name || "<ANONYMOUS>"

  // Nullish assignment operator
res1.owner ??= "ME"; // res1.owner = res1.owner ?? "ME"
res2.owner ??= "ME"; // res2.owner = res2.owner ?? "ME"

console.log(res1);
console.log(res2);
*/


/*
                      // Looping Arrays: The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/


/*
                      // Enhanced Object Literals
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  // ES6
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[4 + 2] {
    open: 0,
    close: 24,
  }
};

const restaurantES6 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // openingHours: openingHours // Old one
  // ES6 Enhanced Object Literals
  openingHours,

  // Function ES6
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

};
console.log(restaurantES6);
*/


/*
                      // Optional Chaining (?.)
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon);
}
// console.log(restaurant.openingHours.mon); // undefiend
// console.log(restaurant.openingHours.mon.open); // error

  // with Optional Chaining
console.log(restaurant.openingHours?.mon); // undefiend
console.log(restaurant.openingHours.mon?.open); // undefiend

    // Example
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of weekdays) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day} we open at ${open}`);
}

  // Methods
console.log(restaurant.order?.(0, 1) ?? "Method dose not exist.")
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method dose not exist.") // Method dose not exist.

  // Array
const user = [{ name: "Godung", Job: "Student" }];
console.log(user[0]?.name ?? "Unknow")
*/


/*
                      // Looping Objects: Object Keys, Values, and Entries
  // Property Name
const properties = Object.keys(openingHours)
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

  // Property VALUES
const values = Object.values(openingHours);
console.log(values);

  // Entries Object
const entries = Object.entries(openingHours);
console.log(entries);

// [key, value]
for (const [key, { open, close }] of entries) {
  console.log(`We open on ${key}, open at ${open} and close at ${close}`);
}
*/



const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

