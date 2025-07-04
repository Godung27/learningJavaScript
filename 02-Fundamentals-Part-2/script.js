"use strict"
/*
// const num = 2;
let num = 2;
num += 1;
console.log(num);
*/


/*
                      // Functions
function sayMyName() {
  console.log("Godung");
}
// calling/ running/ invoking function
sayMyName()
sayMyName()
sayMyName()

function myKFC(chiken, coke) {
  const comboKFC = `I buy combo KFC, it's got ${chiken} chiken and ${coke} coke`;
  return comboKFC;
}
const myChiken = myKFC(0, 5);
console.log(myChiken);

const myCombo = myKFC(10, 6);
console.log(myCombo);

    // Quiz
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const thailand = describeCountry("Thailand", 3, "Bangkok");
const japan = describeCountry("Japan", 2, "Tokyo");
console.log(thailand, japan);

console.log(describeCountry("Finland", 6, "Helsinki"));
*/


/*
                      // Function Declarations and Expressions
  // Function Declarations
function age1(birthyear) {
  return 2025 - birthyear;
}
const godungAge1 = age1(2002);

  // Function Expressions

// const godungAge2 = age2(2002);
// const age2 = function (birthyear) {
//   return 2025 - birthyear;
// }

// *** can't define before function
const age2 = function (birthyear) {
  return 2025 - birthyear;
}
const godungAge2 = age2(2002);

console.log(godungAge1, godungAge2);

    // Quiz

function percentageOfWorld1(population) {
  return population / 7900 * 100;
}
const thaiPopPer1 = percentageOfWorld1(300);
const japanPopPer1 = percentageOfWorld1(200);
const finlandPopPer1 = percentageOfWorld1(600);

console.log(`Thai ${thaiPopPer1}, Japan ${japanPopPer1}, Finland ${finlandPopPer1}`);

const percentageOfWorld2 = function (population) {
  return population / 7900 * 100;
}
const thaiPopPer2 = percentageOfWorld2(300);
const japanPopPer2 = percentageOfWorld2(200);
const finlandPopPer2 = percentageOfWorld2(600);

console.log(`Thai ${thaiPopPer2}, Japan ${japanPopPer2}, Finland ${finlandPopPer2}`);
*/


/*
                      // Arrow Functions
const bornYear1 = age => 2025 - age;
const godungAge1 = bornYear1(23);
console.log(godungAge1);

const bornYear2 = (age, firstname) => {
  const year = 2025 - age;
  return `${firstname} was born in ${year}`;
}

console.log(bornYear2(23, "Godung"));

    // Quiz
const percentageOfWorld3 = poppulation => poppulation / 7900 * 100;
const thaiPopPer3 = percentageOfWorld3(300);
const japanPopPer3 = percentageOfWorld3(200);
const finlandPopPer3 = percentageOfWorld3(600);

console.log(thaiPopPer3, japanPopPer3, finlandPopPer3);
*/


/*
                      // Functions Calling Other Functions
const cutMachine = ingredient => ingredient * 6;

function myKFC(chiken, potato) {
  const nuggetPieces = cutMachine(chiken);
  const frenchFriesPieces = cutMachine(potato);
  return `Combo KFC have ${nuggetPieces} pieces of nugget and ${frenchFriesPieces} pieces of french fries`;
}
console.log(myKFC(7, 10));

    // Quiz
function describePopulation(country, poppulation) {
  const popPer = percentageOfWorld1(poppulation);
  return `${country} has ${poppulation} million people, which is about ${popPer}% of the world`
}
function percentageOfWorld1(population) {
  return population / 7900 * 100;
}
const thaiPopPer1 = describePopulation("Thailand", 300);
const japanPopPer1 = describePopulation("Japan", 200);
const finlandPopPer1 = describePopulation("Finland", 600);

console.log(thaiPopPer1);
console.log(japanPopPer1);
console.log(finlandPopPer1);
*/


/*
        // CHALLENGE #1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins / 2 >= avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas / 2 >= avgDolphins) {
    console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
  } else {
    console.log("No team wins...");
  }
}
checkWinner(scoreDolphins, scoreKoalas);
*/


/*
                      // Introduction to Arrays
const friend1 = "Godung";
const friend2 = "Tom";
const friend3 = "John";

const friends = ["Godung", "Tom", "John"]; // Godung = 0, Tom = 1, John = 2
console.log(friend1, friend2, friend3);
console.log(friends);

const age = new Array("Ten", 20, 30); // another way to creating Array
console.log(age);

console.log(friends[0]); // 0 = Godung
console.log(friends[1]);

console.log(friends.length); // num of friends = 3
console.log(friends[friends.length - 1]); // - 1 because Array start count from 0

friends[2] = "Peter"; // can be change element of Array
console.log(friends);
// friends = ["King, God"]; can't replace entire of Array (const)

const firstName = "Parnu";
const something = [firstName, 20 - 10, 20 < 10, friends, age[0]];
console.log(something);

const calAge = function (birthyear) {
  return 2025 - birthyear;
}
const years = [2020, 2019, 2002];
// console.log(calAge(years)); // NaN
const age1 = calAge(years[0]);
const age2 = calAge(years[1]);
const age3 = calAge(years[years.length - 1]);
console.log(age1, age2, age3);

const allAge = [calAge(years[0]), calAge(years[1]), calAge(years[years.length - 1])];
console.log(allAge);

    // Quiz
const populations = [300, 200, 600, 400];
console.log(populations.length === 4);

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])]
function percentageOfWorld1(population) {
  return population / 7900 * 100;
}
console.log(percentages);
*/


/*
                      // Basic Array Operations (Methods)
// Add elements
const friends = ["Godung", "Tom", "John", "Ron"];
friends.push("Jack"); // Last
console.log(friends);

const newLength = friends.push("Bob");
console.log(newLength);
console.log(friends);

friends.unshift("Sun"); // Beginning
console.log(friends);

// Remove elements
friends.pop() // Last
console.log(friends);

const popped = friends.pop();
console.log(popped);

friends.shift(); // Beginning
console.log(friends);

// Index and Include
console.log(friends.indexOf("Tom")); // Tom = 1
console.log(friends.indexOf("Jack")); // Jack not in element = -1

console.log(friends.includes("Tom")); // True or False (Boolean)
console.log(friends.includes("Jack"));

if (friends.includes("Tom")) {
  console.log("You have friend name Tom");
}

    // Quiz
const neighbours = ["Thailand", "Sweden", "China"];
neighbours.push("Utopia");
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central european country :D");
}
neighbours[neighbours.indexOf("Sweden")] = "Republic to Sweden";
console.log(neighbours);
*/


/*
        // CHALLENGE #2
const calcTip = bills => bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);
*/

/*
                      // Introduction to Objects
// Array
const meArray = [
  "Godung",
  "Lim",
  2025 - 2002,
  "student",
  ["Tim", "Alex", "Web"]
];

// Object
const meObject = {
  firstName: "Godung",
  lastName: "Lim",
  age: 2025 - 2002,
  job: "student",
  friends: ["Tim", "Alex", "Web"]
};

console.log(meArray);
console.log(meObject);

    // Quiz
const myCountry = {
  country: "Thailand",
  capital: "Bangkok",
  language: "Thai",
  population: 3,
  neighbours: ["Republic to Sweden", "China", "Utopia"]
};

console.log(myCountry);
*/


/*
                      //  Dot vs. Bracket Notation
const me = {
  firstName: "Godung",
  lastName: "Lim",
  age: 2025 - 2002,
  job: "student",
  friends: ["Tim", "Alex", "Web"]
};

console.log(me);

console.log(me.lastName);
console.log(me["lastName"]); // can put any expreesion in []

const nameKey = "Name";
console.log(me["first" + nameKey]);
console.log(me["last" + nameKey]);
// console.log(me."first" + nameKey); // not working

const interestIn = prompt("What do you want to know about me ? Choose between firstName, lastName, age, job, friends");

if (me[interestIn]) {
  console.log(me[interestIn]);
} else {
  console.log("Wrong request!");
}

me.location = "Bangkok";
me["hobby"] = ["Game", "Climbing"];

// Godung has 3 friends, and his best friend is Tim.
console.log(`${me.firstName} has ${me.friends.length} friends, and his best friend is ${me.friends[0]}.`);

    // Quiz
// Thailand has 3 million thai-speaking people, 3 neighbouring countries and a capital called Bangkok

const myCountry = {
  country: "Thailand",
  capital: "Bangkok",
  language: "Thai",
  population: 3,
  neighbours: ["Republic to Sweden", "China", "Utopia"]
};

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);
*/


/*
                      // Object Methods
const me = {
  firstName: "Godung",
  lastName: "Lim",
  birthyear: 2002,
  job: "student",
  friends: ["Tim", "Alex", "Web"],
  hasDriverLicense: true,

  // calAge: function (birthyear) {
  //   return 2025 - birthyear;
  // }

  // calAge: function () {
  //   return 2025 - this.birthyear;
  // },

  calAge: function () {
    return this.age = 2025 - this.birthyear;
  }
};
console.log(me.calAge(2002));
console.log(me["calAge"](2002));

console.log(me.calAge()); // to create age (me.age)
console.log(me.age);

    // Challenge
// "Godung is a 23-year old student, and he has a/no driver's license"

const me = {
  firstName: "Godung",
  lastName: "Lim",
  birthyear: 2002,
  job: "student",
  friends: ["Tim", "Alex", "Web"],
  hasDriverLicense: true,

  calAge: function () {
    return this.age = 2025 - this.birthyear;
  },

  getsummary: function () {
    console.log(`${this.firstName} is a ${this.calAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license`)
  }
};

console.log(me.getsummary());

    // Quiz
const myCountry = {
  country: "Thailand",
  capital: "Bangkok",
  language: "Thai",
  population: 3,
  neighbours: ["Republic to Sweden", "China", "Utopia"],

  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  },

  checkIsland: function () {
    return this.neighbours.length === 0 ? true : false;
  }
};
console.log(myCountry.describe());
console.log(myCountry.checkIsland());
*/


/*
        // CHALLENGE #3
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height)
    return this.bmi;
  }
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height)
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
}
*/


/*
                      // Iteration: The for Loop
console.log("Running 1 km");
console.log("Running 2 km");
console.log("Running 3 km");
console.log("Running 4 km");
console.log("Running 5 km");

for (let run = 1; run <= 5; run++) {
  console.log(`Running ${run} km`);
}

    // Quiz
for (let numVote = 1; numVote <= 50; numVote++) {
  console.log(`Voter number ${numVote} is currently voting`);
}
*/


/*
                      // Looping Arrays, Breaking and Continuing
const me = [
  "Godung",
  "Lim",
  2025 - 2002,
  "student",
  ["Tim", "Alex", "Web"]
];
const meType = [];

for (let i = 0; i <= me.length - 1; i++) {
  console.log(me[i], typeof me[i]);

  // Filling type array
  // meType[i] = typeof me[i];

  meType.push(typeof me[i]);
}
console.log(meType);

const years = [1998, 2002, 2010, 2022];
const age = [];

for (let i = 0; i < years.length; i++) {
  age[i] = 2025 - years[i]
}
console.log(age);
console.log("heyyyyyy")

// Continuing
for (let i = 0; i <= me.length - 1; i++) {
  if (typeof me[i] === "string") continue; // Skip string

  console.log(me[i], typeof me[i]);
}

// Breaking
for (let i = 0; i <= me.length - 1; i++) {
  if (typeof me[i] === "number") break; // Out of loop if find number

  console.log(me[i], typeof me[i]);
}

    // Quiz
const populations = [300, 200, 600, 400];
function percentageOfWorld1(population) {
  return population / 7900 * 100;
}

const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);
*/


/*
                      // Looping Backwards and Loops in Loops
const me = [
  "Godung",
  "Lim",
  2025 - 2002,
  "student",
  ["Tim", "Alex", "Web"]
];

for (let i = me.length - 1; i >= 0; i--) {
  console.log(me[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`---- Exercise Set ${exercise}`);

  for (let pushup = 1; pushup < 6; pushup++) {
    console.log(`Excerise ${exercise}: Push up ${pushup}`);
  }
}

    // Quiz
const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbours.length; i++) {

  for (let x = 0; x < listOfNeighbours[i].length; x++) {
    console.log(`Neighbour: ${listOfNeighbours[i][x]}`);
  }
}
*/


/*
                      // The while Loop
// for (let i = 1; i <= 3; i++) {
//   console.log(i);
// }

let x = 1;
while (x <= 3) {
  console.log(x);
  x++
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 1) {
  console.log(`You rolled a ${dice}!`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice == 1) console.log("End...");
}
// While loop just need condition

    // Quiz
const populations = [300, 200, 600, 400];
function percentageOfWorld1(population) {
  return population / 7900 * 100;
}
const percentages3 = [];
let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}
console.log(percentages3);
*/


/*
        // CHALLENGE #4
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tips[i]);
}
console.log(totals);

// BONUS
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum / arr.length;
}
console.log(calcAverage(totals));
*/



