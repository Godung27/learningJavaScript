'use strict';
/*
                      // Simple Array Methods
let arr = ["a", "b", "c", "d", "e"];

  // SLICE
    // Create New Array (array slice similar like string)
console.log(arr.slice(1)); // ['b', 'c', 'd', 'e']
console.log(arr.slice(1, 3)); // ['b', 'c']
console.log(arr.slice(-1)); // ['e']
console.log(arr.slice(0, -1)); // ['a', 'b', 'c', 'd']
  // Copy
console.log(arr.slice()); // ["a", "b", "c", "d", "e"]
console.log([...arr]); // ["a", "b", "c", "d", "e"]

// SPLICE
    // Change Original Array
// console.log(arr.splice(3)); // ['d', 'e']
// console.log(arr); // ['a', 'b', 'c']
// arr.splice(-1); // delete last
// console.log(arr); // ['a', 'b', 'c', 'd']
arr.splice(1, 2); // (start, deleteCount) (delete ['b', 'c'])
console.log(arr); // ['a', 'd', 'e']

  // REVERSE
    // Change Original Array (Reverse array)
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["i", "h", "g", "f"];
console.log(arr2.reverse()); // ['f', 'g', 'h', 'i']

  // CONCAT
const letter = arr.concat(arr2);
console.log(letter); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
console.log([...arr, ...arr2]); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

  // JOIN
console.log(letter.join("/")) // a/b/c/d/e/f/g/h/i
*/


/*
                      // The New at Method
const arr = [27, 7, 9];
console.log(arr[0]); // 27
console.log(arr.at(0)); // 27

  // Getting last
console.log(arr[arr.length - 1]); // 9
console.log(arr.slice(-1)[0]); // 9
console.log(arr.at(-1)); // 9

  // At also with string
  const name = "John";
  console.log(name.at(0)); // J
  console.log(name.at(-1)); // n
  */


/*
                      // Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement: ${i + 1} You deposited ${movement}`);
  } else {
    console.log(`Movement: ${i + 1} You withdrew ${Math.abs(movement)}`);
  }
}

console.log("----forEach----")
  // forEach
    // Callback function in each iteration
    // Can't use break
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement: ${i + 1} You deposited ${mov}`);
  } else {
    console.log(`Movement: ${i + 1} You withdrew ${Math.abs(mov)}`);
  }
});
// 0: function (200)
// 1: function (450)
// 2: function (400)
// ... last: function (last)
*/


/*
                      // forEach With Maps and Sets
  // Maps
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`)
});

  // Sets
const currenciesUnique = new Set(["USD", "USD", "USD", "EUR", "GBP", "EUR"]);
console.log(currenciesUnique); // {'USD', 'EUR', 'GBP'}
currenciesUnique.forEach(function (value, _, map) {
  console.log(value);
});
*/


/*
// Creating DOM Elements
const playMovements = function (movements) {
  containerMovements.innerHTML = "";

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const movementRowHtml = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", movementRowHtml);
  });
}
playMovements(account1.movements)
*/


/*
                      // The map Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUSD = 1.1;

  // Map: Create new Array and New Return form Original
const movementToUSD = movements.map(function (mov) {
  return mov * euroToUSD;
});

  // Arrow
const arrMovementToUSD = movements.map(mov => mov * euroToUSD);

console.log(movementToUSD);
console.log(arrMovementToUSD);

// same result
const usd = [];
for (const mov of movements) {
  usd.push(mov * euroToUSD);
}
console.log(usd);

const movementsDescriptions = movements.map(function (mov, i) {
  return `Movement: ${i + 1} You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(mov)}`;
});
console.log(movementsDescriptions);
*/


/*
                      // Computing Usernames
const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner.toLowerCase().split(" ").map(name => name[0]).join("");
  });
}
createUserName(accounts);
console.log(accounts);
*/


/*
                      //  The filter Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
  // Filter: filter by Boolean value
const deposit = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposit);

  // Arrow
const withdrawalsArr = movements.filter(mov => mov < 0);
console.log(withdrawals);

// same
const depositFor = []
for (const mov of movements) {
  if (mov > 0) depositFor.push(mov);
}
console.log(depositFor);
*/


/*
                      // The reduce Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

  // accumulate = SUM (SNOWBALL) // (accumulate, current(array), index, entire(array))
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Movement${i}: ${acc}`);
  return acc + cur;
}, 0); // Begin Value
console.log(balance); // 3,840

  // Arrow
const balanceArr = movements.reduce((acc, cur) => acc + cur, 5); // Begin Value = 5
console.log(balanceArr); // 3,845

// same
let balanceFor = 0; // Begin Value
for (const mov of movements) {
  balanceFor += mov;
}
console.log(balanceFor); // 3,840

    // Example
  // Max Value
const balanceMax = movements.reduce(function (acc, mov) {
  if (acc > mov) {
    return acc;
  } else
    return mov;
}, movements[0]);
console.log(balanceMax); // 3,000
*/


/*
                      // The Magic of Chaining Methods
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUSD = 1.1;
console.log(movements);

  // PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * euroToUSD;
  })
  // .map(mov => mov * euroToUSD)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
*/


/*
                      // The find Method
  // find: return first element that match condition
    // similar like filter
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal); // -400

// const findAccount = accounts.find(acc => acc.owner === "Sarah Smith");
// console.log(findAccount);
*/


// Implementing Login (BankistApp)
// Implementing Transfers (BankistApp)
// The findIndex Method (BankistApp)


/*
                      // The New findLast and findLastIndex Methods
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

  // findLast
const lastWithdrawal = movements.findLast(mov => mov < 0);
console.log(lastWithdrawal); // -130

// Your latest large movement was ... movements ago
  // findLastIndex
const latestLastMovementIndex = movements.findLastIndex(mov => Math.abs(mov) > 1000);
console.log(latestLastMovementIndex);
console.log(`Your latest large movement was ${movements.length - latestLastMovementIndex} movements ago`);
*/


/*
                      // some and every
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

  // Includes: equality
console.log(movements.includes(70)) // true

  // Some: condition
const anyDeposit = movements.some(mov => mov > 0);
console.log(anyDeposit);
console.log(movements.some(mov => mov === 70));

  // Every: condition
const allDeposit = [20, 40, 50];
console.log(movements.every(mov => mov > 0)); // false
console.log(allDeposit.every(mov => mov > 0)); // true

  // Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit)); // true
console.log(movements.every(deposit)); // false
console.log(movements.filter(deposit)); // [200, 450, 3000, 70, 1300]
*/


/*
                      // flat and flatMap
const arr = [[1, 2, 3], [4, 5], 6, [7]];
console.log(arr); // [Array(3), Array(2), 6, Array(1)]
console.log(arr.flat()); // [1, 2, 3, 4, 5, 6, 7] (deeper 1 level)

const deepArr = [[[1, 2], [3]], [[4], 5], 6, [7]];
console.log(deepArr); // [Array(2), Array(2), 6, Array(1)]
// console.log(deepArr.flat()); // [Array(2), Array(1), Array(1), 5, 6, 7]
console.log(deepArr.flat(2)); // [1, 2, 3, 4, 5, 6, 7] (flat(2) = deeper 2 level)

    // Example
const account1 = {
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
};
const account2 = {
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
};
const account3 = {
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
};
const account4 = {
  movements: [430, 1000, 700, 50, 90],
};
const accounts = [account1, account2, account3, account4];

  // Flat
const overallBalance = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

  // FlatMap: flat + map (deeper 1 level)
const overallBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);
*/


/*
                      // Sorting Arrays
    // Sort: Change Original Array
  // String
const owner = ["Godung", "Smith", "Jack", "Zeb", "Andrew"];
console.log(owner.sort()); // ['Andrew', 'Godung', 'Jack', 'Smith', 'Zeb']
console.log(owner); // ['Andrew', 'Godung', 'Jack', 'Smith', 'Zeb']

  // Number
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// return < 0, A, B (keep order)
// return > 0, B, A (switch)

  // Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements); // [-650, -400, -130, 70, 200, 450, 1300, 3000]

  // Descending
movements.sort((a, b) => b - a);
console.log(movements); // [3000, 1300, 450, 200, 70, -130, -400, -650]
*/


/*
                      // Array Grouping
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const groupMovements = Object.groupBy(movements, mov => mov > 0 ? "deposits" : "withdrawals");
console.log(groupMovements);
// deposits : (5) [200, 450, 3000, 70, 1300]
// withdrawals : (3) [-400, -650, -130]

    // Example
const accou1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  type: "premium",
};
const accou2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210],
  type: "standard",
};
const accou3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340],
  type: "basic",
};
const accou4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000],
  type: "basic",
};
const accous = [accou1, accou2, accou3, accou4];

const groupByActivity = Object.groupBy(accous, acc => {
  const movementCount = acc.movements.length;
  if (movementCount >= 8) return "very active";
  if (movementCount >= 5) return "active";
  if (movementCount >= 1) return "moderate";
  return "inactive";
});
console.log(groupByActivity);

// const groupAccType = Object.groupBy(accous, acc => acc.type);
const groupAccType = Object.groupBy(accous, ({ type }) => type);
console.log(groupAccType);
*/


/*
                      // More Ways of Creating and Filling Arrays
const arr = [1, 2, 3, 4, 5];
const arrNew = new Array(1, 2, 3, 4, 5);
console.log(arr); // [1, 2, 3, 4, 5]
console.log(arrNew); // [1, 2, 3, 4, 5]

  // Empty array + fill method
    // fill: Change Original
const x = new Array(5);
console.log(x); // [empty × 5]
x.fill(1); // fill(value)
console.log(x); // [1, 1, 1, 1, 1]

arr.fill(27, 2, 4); // fill(value, start, end)
console.log(arr); // [1, 2, 27, 27, 5]

  // Array.form
const y = Array.from({ length: 5 }, () => 2);
console.log(y); // [2, 2, 2, 2, 2]

const z = Array.from({ length: 3 }, (cur, i) => i + 1);
// Array.from( length ), (cur, i) (like .map())
console.log(z); // [1, 2, 3]

const randomNum = Array.from({ length: 7 }, () => Math.trunc(Math.random() * 10 + 1));
console.log(randomNum);
*/


/*
                      // Non-Destructive Alternatives: toReversed, toSorted, toSpliced, with
  // toReversed, toSorted, toSpliced, with: 
    // Create New Array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

  // toReversed: similar like revered
    // Create New Array
const reverseMovements = movements.toReversed();
console.log(reverseMovements);
console.log(movements)

  // toSorted, toSpliced: similar like sort, splice

  // with
    // Create New Array
const newMovements = movements.with(1, 27); // with(position, value)
console.log(newMovements);
console.log(movements);
*/

