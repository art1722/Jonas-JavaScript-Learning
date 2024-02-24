"use strict";

////////////////////////////////////
// Coding challenge #1
function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}
function checkWinner(scoreDolphins, scoreKoalas) {
  if (scoreDolphins >= 2 * scoreKoalas) {
    console.log(`Dolphins wins (${scoreDolphins} vs. ${scoreKoalas})`);
  } else if (scoreKoalas >= 2 * scoreDolphins) {
    console.log(`Koalas wins (${scoreKoalas} vs. ${scoreDolphins})`);
  } else {
    console.log("No team wins...");
  }
}

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
// const ascoreolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

/*
NOTE:
1.
const calcAverage = (a, b, c) => (a + b + c) / 3;
you can use arrow function here - it's simpler.
This is supposed to be a generic function and a, b, c are generic variable names.
it doesn't have to be any scores. it can be something else like people's height.
but of course, it's totally okay if you used more specific variable names.


2. test each single function before move on to write the next function.
It's easier to debug.

3. don't forget to use command/ctrl + d to make multiple changes
e.g. change the name of the variable

4. Note that these functions are all independent from another.
*/

////////////////////////////////////
// Coding challenge #2
const calcTip = function (bill) {
  if (50 <= bill && bill <= 300) {
    return bill * (15 / 100);
  } else {
    return bill * (20 / 100);
  }
};
console.log(calcTip(100));

let bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips);
console.log(total);

/*
NOTE:
1. you can use arrow functions or using ternary operators to write calcTip function
2. usually, So usually when I have an array,
I like to give it a plural name.
Like here bills and here tips
because it's multiple values.
3. By not creating a separate variables for each bill values like tip1 tip2 tip3
-> the code is a lot cleaner.
4. you can't do array operations like bills + tips
-> each of the array would be transformed to a string and they will be concatenated
*/

////////////////////////////////////
// Coding challenge #3
const Mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
};
const John = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
};

Mark.calcBMI = function () {
  this.BMI = this.mass / this.height ** 2;
  return this.BMI;
};
John.calcBMI = function () {
  this.BMI = this.mass / this.height ** 2;
  return this.BMI;
};
if (John.calcBMI() > Mark.calcBMI()) {
  console.log(`John's BMI (${John.BMI}) is higher than Mark's (${Mark.BMI})`);
} else {
  console.log(`Mark's BMI (${Mark.BMI}) is higher than John's (${John.BMI})`);
}

/*
send:
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};
const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

if (john.calcBMI() > mark.calcBMI()) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
} else {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
}

NOTE:
1. The method doesn't call itself, we need to explicitly call it
2. As always, you can pause the video
analyze the code on your own
or you can always rewind
to hear the explanation again.
I actually like to do that myself
when I watch other online video courses.
So I think that's a good tip maybe.
3. we can use OOP to avoid these kind of the same code in the two object that we created
4. should do the function call first, not in the if else statement
then compar john.bmi and mark.bmi
also else should be else if (mark.bmi > john.bmi) and not just else 
(what if mark.bmi ==== john.bmi) this will not be true?
*/

////////////////////////////////////
// Coding challenge #4

bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
let totals = [];
let tip, bill, total_new;
for (let i = 0; i < bills.length; i++) {
  bill = bills[i];
  tip = calcTip(bill);
  total_new = bill + tip;

  tips.push(tip);
  totals.push(total_new);
}
console.log(bills, tips, totals);

// Bonus: calcAverage
function calcAverage(arr) {
  if (arr.length === 0) return -1;

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([]));
console.log(calcAverage(totals));
/*
SENDING:
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

Write your code below. Good luck! 🙂

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];
let tip, bill, total;
for (let i = 0; i < bills.length; i++) {
    bill = bills[i];
    tip = calcTip(bill);
    total = bill + tip

    tips.push(tip);
    totals.push(total);
}

NOTE:
1. Don't for get to use const!!! not let (no array object is changed, only the content inside is changed)
2. Actually, in each iteration,
a new tip variable is gonna be created.
So we're not mutating, we're not changing the original tip
that we declare here.
>>> You can declare const tip inside the for loop!!!
3. for calcAverage: we're building a generic function
doesn't care what kind of array value it's gonna receive
so we don't use name like calcAverageTips, ...

Extra NOTE
But as always, before moving on,
make 100% sure that you understood all these fundamentals
from this section and a previous section.
So if you want, you can redo the challenges or you can
come up with your own small problems or ideas to solve.
And by doing that,
you'll reinforce all these tools even better
and ultimately become a better developer faster.
Then when you're really ready, let's together move forward.
*/
