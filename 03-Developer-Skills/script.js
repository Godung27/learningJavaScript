'use strict';

/*
                      // Using Google, StackOverflow and MDN
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew(temperatures, [17, 0, -10]);
console.log(amplitudeNew);
*/

/*
                      // Debugging with the Console and Breakpoints
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    value: Number(prompt('Degrees celsius:')),
  };

  // B) FIND
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug);
*/


/*
        // CHALLENGE #1
// Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

// Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

// Use the problem-solving framework: Understand the problem and break it up into sub-problems!

// TEST DATA 1: [17, 21, 23]
// TEST DATA 2: [12, 5, -5, 0, 4]

const testTem1 = [17, 21, 23];
const testTem2 = [12, 5, -5, 0, 4];
const temperatures = testTem1.concat(testTem2);
const godung = [];
const printForecast = function (arr) {

  for (let i = 0; i < temperatures.length; i++) {
    godung.push(`... ${temperatures[i]}ºC in ${temperatures.indexOf(temperatures[i]) + 1} days`);
  }
  // godung.push("...");
}
printForecast(temperatures);
console.log(godung.join("") + "...");
*/


/*
                      // CHALLENGE #2 me/AI
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]

// by Myself
const hours = [7.5, 8, 6.5, 0, 8.5, 4, 0];
let sumHours = 0;
let max = hours[0];
let x = 0;

const freelancers = function (worked) {

  for (let i = 0; i < hours.length; i++) {
    sumHours += worked[i]; // Total hours

    const maxTime = worked[i];
    if (maxTime > max) max = maxTime; // the most hours worked

    if (hours[i] === 0) continue;
    x++ // Num of worked

  }
}
freelancers(hours);
const avgHours = sumHours / (hours.length + 1); // Average hours

console.log(sumHours);
console.log(avgHours);
console.log(max);
console.log(x);
if (sumHours >= 35) console.log("full-time"); // check full

// by ChatGPT
function analyzeWorkWeek(dailyHours) {
  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  // Validate that the input array has exactly 7 elements
  if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
    throw new Error('Input must be an array of exactly 7 daily work hours.');
  }

  // Calculate total hours worked
  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);

  // Calculate average daily hours, rounded to one decimal place
  const averageHours = Math.round((totalHours / dailyHours.length) * 10) / 10;

  // Find the day with the most hours worked
  const maxHours = Math.max(...dailyHours);
  const maxDayIndex = dailyHours.indexOf(maxHours);
  const maxDay = daysOfWeek[maxDayIndex]; // Convert index to day name

  // Count the number of days worked
  const daysWorked = dailyHours.filter(hours => hours > 0).length;

  // Check if the week was full-time (35 hours or more)
  const isFullTime = totalHours >= 35;

  // Return the result object
  return {
    totalHours,
    averageHours,
    maxDay, // The name of the day with the most hours
    daysWorked,
    isFullTime,
  };
}

const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 5, 0];
const analysis = analyzeWorkWeek(weeklyHours);
console.log(analysis);

const weeklyHours2 = [7.5, 8, 6.5, 0, 8.5];
const analysis2 = analyzeWorkWeek(weeklyHours2);
console.log(analysis2);
*/
