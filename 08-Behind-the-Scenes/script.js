'use strict';

// Scoping in Practice
const firstName = "Godung";

function me(birthYear) {
  const age = 2025 - birthYear;
  console.log(`${firstName}'s turns ${age} this year.`);

  let currentJob;
  const job = function (job) {
    currentJob = job;
  }

  job("student")
  console.log(currentJob);

  const godungJob = function () {
    console.log(`${firstName}'s ${currentJob}`)

    if (age > 19) {
      const currentJob = "developer";
      console.log(`But ${firstName}'s turns ${age} this year, he's ${currentJob} now!`);
    }
  }
  godungJob();
}
me(2002);