"use strict";

////////////////////////////////////
// Functions
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} people and its capital city is ${capitalCity}`;
}
console.log(describeCountry("Finland", "6 million", "Helsinki"));
console.log(describeCountry("USA", "100 million", "Washington DC"));
console.log(describeCountry("Brazil", "50 million", "Brasília"));

////////////////////////////////////
// Function declarations vs expressions
function percentageOfWorld1(population) {
  // population in million unit
  const totalPopulation = 7900;
  const percentagePopulation = (population / totalPopulation) * 100;
  return percentagePopulation;
}
console.log(percentageOfWorld1(6));
console.log(percentageOfWorld1(100));
console.log(percentageOfWorld1(50));

const percentageOfWorld2 = function (population) {
  return percentageOfWorld1(population);
};
console.log(percentageOfWorld2(6));
console.log(percentageOfWorld2(100));
console.log(percentageOfWorld2(50));

////////////////////////////////////
// Arrow function
const percentageOfWorld3 = (population) => percentageOfWorld1(population);

////////////////////////////////////
// Calling other functions
function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  return (
    `${country} has ${population} million people, ` +
    `which is about ${percentage}% of the world.`
  );
}
console.log(describePopulation("Brazil", 50));

////////////////////////////////////
// Introduction to arrays
const populations = new Array(8, 50, 100, 144);
console.log(populations.length === 4);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

////////////////////////////////////
// Basic Array Operations (Methods)
const neighbours = ["Colombia", "Peru", "Argentina", "Uruguay"];
neighbours.push("Utopia");
neighbours.pop();
if (!neighbours.includes("Germany"))
  console.log("Probably not a central European countr :D");
neighbours[neighbours.indexOf("Peru")] = "Venezuela";
console.log(neighbours);

////////////////////////////////////
// Introduction to objects
const myCountry = {
  country: "Brazil",
  capital: "Brasília",
  language: "Portuguese",
  population: 214, // population in million is about 214.3 million
  neighbours,
};

////////////////////////////////////
// Dot vs Bracket notation
console.log(
  `${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital} `
);
myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);

////////////////////////////////////
// Object methods
myCountry.describe = function () {
  console.log(
    `${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital} `
  );
};
myCountry.describe();
myCountry.checkIsland = function () {
  this.isIsland = this.neighbours.length === 0;
};
myCountry.checkIsland();
console.log(myCountry);

////////////////////////////////////
// The for loop
for (let voter = 1; voter < 51; voter++) {
  console.log(`Voter number ${voter} is currently voting.`);
}

////////////////////////////////////
// Looping arrays, breaking, continuing
let percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2, percentages);

////////////////////////////////////
// Looping backwards and loops in loops
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(listOfNeighbours[i][j]);
  }
}

////////////////////////////////////
// The while loop
let i = 0;
let percentages3 = [];
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}
console.log(percentages3, percentages);
