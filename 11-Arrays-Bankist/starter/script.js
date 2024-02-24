'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
///////////////////////////////////////
// Coding challenge 1: Study of dogs
// simple array methods, at method, forEach, DOM

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
🐶
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
*/
const checkDogs = function (dogsJulia, dogsKatie) {
  // filter incorrect information in Julia's data
  const dogsJuliaAndKatie = dogsJulia.slice(1, -2).concat(dogsKatie);

  // log the result to the console
  console.log('---Using forEach method---');
  dogsJuliaAndKatie.forEach((age, i) => {
    if (age >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
    } else if (age >= 0) {
      console.log(`Dog number ${i + 1} is still a puppy🐶`);
    } else {
      console.log('Invalid dog age');
    }
  });

  console.log('---Using array dot entries method---');
  for (const [i, age] of dogsJuliaAndKatie.entries()) {
    const isAdult = age >= 3;
    if (isAdult) {
      console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy🐶`);
    }
  }
};
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKatie = [4, 1, 15, 8, 3];
checkDogs(dogsJulia, dogsKatie);

/*
NOTE:
1. How to name a variable
e.g. dogsJuliaCorrected
e.g. just dogs instead of dogsJuliaAndKatie
2. Don't forget the splice method!(instead of using the slice method)
but using the slice method is OK.
3. 
*/

///////////////////////////////////////
// Coding challenge 1: Study of dogs
// convert dog age to human age
// then calculate their average ages
// data transformation method

/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
*/
const calcAverageHumanAge = function (dogAges) {
  // calculate the dog age in human years
  const humanAges = dogAges.map(dogAge =>
    dogAge <= 2 ? dogAge * 2 : dogAge * 4 + 16
  );

  // exclude dogs with age less than 18 human years old
  const adultHumanAges = humanAges.filter(humanAge => humanAge >= 18);

  // calculate the average human age
  const averageAdultHumanAge =
    adultHumanAges.reduce((acc, currentAge) => acc + currentAge, 0) /
    adultHumanAges.length;

  return averageAdultHumanAge;
};
const testData1 = [5, 2, 4, 1, 15, 8, 3];
const testData2 = [16, 6, 10, 5, 6, 1, 4];
console.log(calcAverageHumanAge(testData1));
console.log(calcAverageHumanAge(testData2));

/*
NOTE:
1. There's also an option to calculate the average age differently
const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
divided by the array length in each separate element in each iteration
This is a good example of using the array parameter in these methods
*/

///////////////////////////////////////
// Coding challenge 3: Study of dogs
/*
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
*/
const calcAverageHumanAge2 = function (dogAges) {
  return dogAges
    .map(dogAge => (dogAge <= 2 ? dogAge * 2 : dogAge * 4 + 16))
    .filter(humanAge => humanAge >= 18)
    .reduce((acc, currentAge, _, arr) => acc + currentAge / arr.length, 0);
};
console.log(calcAverageHumanAge2(testData1));
console.log(calcAverageHumanAge2(testData2));

///////////////////////////////////////
// Coding challenge 4: Study of dogs eating behavior
// time limit 1 hour

/*
Julia and Kate are still studying dogs, and this time they are studying if dogs are
eating too much or too little.
Eating too much means the dog's current food portion is larger than the
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10%
above and 10% below the recommended portion (see hint).
Your tasks:
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array. Forumla:
recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!"
5. Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false)
6. Log to the console whether there is any dog eating an okay amount of food
(just true or false)
7. Create an array containing the dogs that are eating an okay amount of food (try
to reuse the condition used in 6.)
8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects 😉)

Hints:
§ Use many different tools to solve these challenges, you can use the summary
lecture to choose between them 😉
§ Being within a range 10% above and below the recommended portion means:
current > (recommended * 0.90) && current < (recommended *
1.10). Basically, the current portion should be between 90% and 110% of the
recommended portion.

*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// task 1: add recommendedFood property
// NOTE: in the jonas solution, he trunc the decimal part using Math.trunc()
// so I modify by adding this Math.trunc() method according to Jonas's solution
dogs.forEach(dog => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});
console.log(dogs);

// task 2: find sarah dogs
// actually we can use find if we're sure there's only one Sarah
// I create my own bonus task: I'll assume there can be multiple Sarah,
// or Sarah can even have multiple dogs!
const sarahDogs = dogs.filter(dog => dog.owners.includes('Sarah'));
const checkEatingBehavior = function (dog) {
  if (dog.curFood > dog.recommendedFood * 1.1) {
    return 'too much!';
  } else if (dog.curFood < dog.recommendedFood * 0.9) {
    return 'too little!';
  } else {
    return 'in a recommended amount';
  }
};
console.log(sarahDogs);
sarahDogs.forEach(function (dog, idx, arr) {
  if (arr.length === 1) {
    console.log(`Sarah's dog eat ${checkEatingBehavior(dog)}`);
  } else {
    console.log(
      `Sarah's dog number ${idx + 1} eat ${checkEatingBehavior(dog)}`
    );
  }
});

//  task 3: eat too much, eat too little
const { ownersEatTooMuch, ownersEatTooLittle } = dogs.reduce(
  (owners, currentDog) => {
    const eatingBehavior = checkEatingBehavior(currentDog);
    if (eatingBehavior === 'too much!') {
      owners.ownersEatTooMuch.push(...currentDog.owners);
    } else if (eatingBehavior === 'too little!') {
      owners.ownersEatTooLittle.push(...currentDog.owners);
    }
    return owners;
  },
  {
    ownersEatTooMuch: [],
    ownersEatTooLittle: [],
  }
);

// task 4: log to the console
// Matilda and Alice and Bob's dogs eat too much!
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// task 5: dog eating exactly the amount of food that is recommended
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// task 6: dog eating an okay amount of food
console.log(
  dogs.some(dog => checkEatingBehavior(dog) === 'in a recommended amount')
);

// task 7: array containing the dogs that are eating an okay amount of food
const dogsInRecommendedFoodAmount = dogs.filter(
  dog => checkEatingBehavior(dog) === 'in a recommended amount'
);
console.log(dogsInRecommendedFoodAmount);

// task 8: sort dogs by recommended food portion in ascending order + shallow copy
const dogsSorted = dogs
  .slice()
  .sort((prev, next) => prev.recommendedFood - next.recommendedFood);
console.log(dogsSorted);

// I create my own bonus task: jackpot: we give a jackpot to owners whose name starts with 'M'
// to practice using flatMap method
const dogsJackpot = dogs
  .flatMap(dog => dog.owners)
  .filter(owner => owner.startsWith('M'));
console.log(`The Jackpot goes to ... ${dogsJackpot.join(' and ')} !!!`);

/*
NOTE:
1. dogsSarah might be better than sarahDogs
(main noun might comes first, but this is just a minor detail)
2. I've just realized I use a different condition (90 - 110% of recommended portion)
instead of Jonas's one (just over or under the recommended portion)

but there's another solution of exercise 3 is here down below
3. In task 6 and 7: to align with the DRY principle
we might export the condition into somewhere else -> checkEatingOkay = dog => ...condition...
*/
const keyOwnersEatingTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);
const keyOwnersEatingTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(keyOwnersEatingTooMuch);
console.log(keyOwnersEatingTooLittle);
