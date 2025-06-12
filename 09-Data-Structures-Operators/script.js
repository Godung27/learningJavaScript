'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
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
    },
  },

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

