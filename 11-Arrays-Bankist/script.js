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

