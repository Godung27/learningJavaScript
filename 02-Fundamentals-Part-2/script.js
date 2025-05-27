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



// CHALLENGE #4
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