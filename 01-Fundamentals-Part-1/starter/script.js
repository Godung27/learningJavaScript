/*
                      // Values and Variables
let js = "amazing";
console.log(2 - 3 / 4 + 3);

console.log(23);
console.log("Jonas");

let firstName = "Godung";
console.log(firstName);

let PI = 3.14;
console.log(PI);

    // Quiz
let country = "Thai";
let continent = "Asia";
let population = "11,000,000";
console.log(country, continent, population);
*/


/*
                      // Data Type
let hello = true;
console.log(hello);

console.log(typeof hello);
// console.log(typeof true);
// console.log(typeof 27);
// console.log(typeof "Simon");

hello = "YES!";
console.log(hello);

let year;
console.log(year);
console.log(typeof year);

year = 22;
console.log(year);
console.log(typeof year);

console.log(typeof null);

    // Quiz
let country = "Thailand";
let continent = "Asia";
let population = "11,000,000";
let isIsland = false;
let language;
console.log(typeof country, typeof population, typeof isIsland, typeof language);
*/


/*
                      // let, const and var
let age = 40; // let = flexible
age = 39;
// console.log(age);

const year = 1990; // const = fix
// year = 2000;
// console.log(year);
// const job;

var job = "student";
job = "teacher";

lastName = "lim";
console.log(lastName);

    // Quiz
language = "Thai";
const country = "Thai";
const continent = "Asia";
let population = "11,000,000";
const isIsland = false;
// isIsland = true;
*/


/*
                      // Basic Operators
// Math Operators
const now = 2025
const ageGodung = now - 2002;
const ageJonas = now - 1998;
console.log(ageGodung, ageJonas, ageGodung + ageJonas);
console.log(ageGodung + ageJonas / 2, 2 * 3, 2 ** 3);
// 2 ** 3 = 2 * 2 * 2

const firstName = "Parnu";
const lastName = "Limtong";
console.log(firstName + lastName);
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 20;
x += 5; // x = x + 5 = 35
console.log(x);
x *= 4; // x = x * 4 = 140
console.log(x);
x++; // x + 1 = 141
console.log(x);
x--; // x - 1 = 140
console.log(x);

// Comparison Operators
console.log(ageGodung > ageJonas); // >, <, >=, <=
console.log(ageGodung <= 23);
console.log(ageGodung < 23);

const ageTest = ageGodung < 23;
console.log(ageTest, typeof ageTest);
console.log(now - 2002 > now - 1998);

    // Quiz
const language = "Thai";
const country = "Thailand";
const continent = "Asia";

let thaiPop = 11;
console.log(thaiPop / 2);

thaiPop++;

console.log(thaiPop);
let finPop = 6;
console.log(thaiPop > finPop);
let averagePop = 33;
console.log(thaiPop < averagePop);

const description = country + " is in " + continent + ", and its " + thaiPop + " million people speak " + language;

console.log(description);
*/


/*
                      // Operator Precedence
const now = 2025
const ageGodung = now - 2002;
const ageJonas = now - 1998;
console.log(now - 2002 > now - 1998);

let x, y;
x = y = 20 - 10 - 5 // x = y = 5, y = 5, x = y
console.log(x, y);

const averAge = (ageGodung + ageJonas) / 2; // in gruop first then / 2
console.log(ageGodung, ageJonas, averAge);

// mdn operator precedence : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
*/


/*
        // CHALLENGE #1
const massMark = 95;
const heightMark = 1.88;

const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
*/


/*
                      // Strings and Template Literals
const firstName = "Godung";
const birstYear = 2002;
const now = 2025;
const job = "student";

const godung = "i'm " + firstName + ", a " + (now - birstYear) + " year old " + job + "!";
console.log(godung);

const godungNew = `I'm ${firstName}, a ${now - birstYear} year old ${job}!`;
console.log(godungNew);

console.log("Hello \n\
World \n\
!");

console.log(`Hello
World
!`);

    // Quiz
const language = "Thai";
const country = "Thailand";
const continent = "Asia";
let thaiPop = 11;

const description = `${country} is in ${continent}, and its ${thaiPop} million people speak ${language}`;
console.log(description);
*/


/*
                      // if / else Statements
const godungAge = 18;

if (godungAge >= 18) {
  console.log(`You can start drivelicence 🚗`);
} else {
  console.log(`Too young, wait another ${18 - godungAge} years`);
}

const birstYear = 1800
let century;

if (birstYear > 2000) {
  century = 20;
} else {
  century = 21
}

console.log(century);

    // Quiz
const country = "Thailand";
let thaiPop = 11;
let averagePop = 33;

if (thaiPop > averagePop) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is ${averagePop - thaiPop} million below average`);
}
*/


/*
        // CHALLENGE #2
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
} else {
  console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
}
*/


/*
                      // Type Conversion and Coercion
// type Conversion
const inputYear = "2002";
console.log(inputYear, Number(inputYear)); // convert String to Number
console.log(inputYear + 18);

console.log(Number("Godung")); // NaN
console.log(typeof (NaN));

console.log(String(27), 27); // convert Number to String
console.log("I'm " + String(23) + " year old");

// type Coercion (JavaScript)
console.log("I'm " + 23 + " year old"); // JaveScript convert Number to String
console.log("10" - "5" - 3); // 2 (Number)
console.log("10" + "5" + 3); // 1053 (String)
console.log("10" * 3) // 30 (Number)
// -, *, / (Number)

let x = "1" + 1; // 11 (String)
x = x - 1; // 10 (Number)
console.log(x); // 10

    // Quiz
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143
*/

// test
