////////////////////////////////////
// Values and Variables
// let 0myCountry, let new, 
// let name = 5
let myCountry = "Brazil"
const continent = "South America"
let population = 25_000_000
let PI = 3.1415
console.log(myCountry, continent, population, PI)

////////////////////////////////////
// Data types
let language;
let isIsland = false;
console.log(language, isIsland);
console.log(typeof language, typeof isIsland);

////////////////////////////////////
// let, const, var
language = "Portuguese";
//// continent = "America"; // TypeError: Assignment to constant variable.
console.log(continent); // continent is a const variable

////////////////////////////////////
// Basic Operators
let halfPopulation = population / 2.0
halfPopulation++;
console.log(halfPopulation);
let finlandPopoulation = 6_000_000
let moreThanFinland = population > finlandPopoulation 
console.log(moreThanFinland)
let averagePopulation = 33_000_000
let moreThanAverage = population > averagePopulation
console.log(moreThanAverage)

let description = 'Brazil is in South America, and its 25000000 people speak Portuguese';
console.log(description);

////////////////////////////////////
// String and Template Literals
let newDescription = `${myCountry} is in ${continent}, and its ${population} people speak ${language}`;
console.log(newDescription);

////////////////////////////////////
// Taking decisions: if / else statements
if (population > 33_000_000) {
    console.log(`${myCountry}'s population is above average`)
} else {
    const populationDifference = averagePopulation - population 
    console.log(`${myCountry}'s population is ${populationDifference} below average`)
}

////////////////////////////////////
// Type conversions and coercion
// predict the result
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // '617'
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false - > type coercion from string to int
console.log('12' < 57); // true
console.log(5 + 6 + '4' + 9 - 4 - 2) // 1143

////////////////////////////////////
// Equality operators == ===
// const numNeighbours = Number(prompt("How many neighbour coutnries does your country have?"));
const numNeighbours = Number('1');
if (numNeighbours === 1) console.log('Only 1 border!');
else if (numNeighbours > 1) console.log('More than 1 order');
else console.log('No borders');
/*
Ref: stackoverflow
Tim Down

The reason for == being frowned upon in such circumstances is purely stylistic. 
The argument is that code is easier to read if === is used consistently throughout 
without having to consider the implications of seeing a use of ==. 
A lot of this originates with Douglas Crockford and is perpetuated by his JSLint tool.

https://stackoverflow.com/questions/12894285/why-is-considered-always-a-bad-practice-in-javascript#_=_
*/

////////////////////////////////////
// Logical operators
if (language === "English" && population <= 50_000_000 & !isIsland){
    console.log("You should live in Portugal :)😊"); // press windows + . to insert emoji into a string
} else {
    console.log("Portugal does not meet oyur criteria :(😢");
}

////////////////////////////////////
// The switch statement
language = 'portuguese';
// language = 'chinese';
switch(language.toLowerCase()) {
    case "chinese":
    case "mandarin":
        console.log('Most number of native speakers');
        break;
    case "spanish":
        console.log('2nd place in number of native speakers');
        break;
    case "english":
        console.log('3rd place');
        break;
    case "hindi":
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D👍');
}

// The conditional (Ternary) operator
// population = 35_000_000;
const comparePopulation = 
`${myCountry}'s population is ${population > 33_000_000 ? 'above' : 'below'} average`
console.log(comparePopulation);