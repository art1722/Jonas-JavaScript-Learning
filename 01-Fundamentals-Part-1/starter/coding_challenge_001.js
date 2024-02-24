////////////////////////////////////
// Coding challenge #1

// calculate BMI
// using height in meter unit, and mass in kg unit
let heightMark, heightJohn, massMark, massJohn;

heightMark = 1.69;
heightJohn = 1.95;
massMark = 78;
massJohn = 92;

heightMark = 1.88;
heightJohn = 1.76;
massMark = 95;
massJohn = 85;

let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / heightJohn ** 2;
console.log(BMIMark, BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

/* 
FEEDBACK:
1. use const not let - a better coding practice - 
mass and height is not going to change throughout the codebasev in this case
Script: Also, you might have used let here instead of const
because you might assume that these are values that are susceptible to change,
especially here, the mass, right?
However, I still decided to use const
because I already know that I'm not gonna change these values here throughout the program.
And so just as we learned before, I prefer to always use const by default,
and I advise you to actually do the same, okay?

NOTE:
you can do something like this instead of separating the variable declaration and initialization
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

the beauty of using variables
because now all we have to do
is to change these values in one place
and then the changes will be propagated
to the rest of the code here.
which references these variables.

So hopefully that was a lot of fun and
you could practice your skills a little bit,
which is really something essential
to learn programming properly.
Without repetition and reinforcing your knowledge,
it's impossible really to learn how to coach.
Anyway, see you now in the next video
where we're gonna continue learning the fundamentals
of the beautiful JavaScript language.
*/

////////////////////////////////////
// Coding challenge #2

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

////////////////////////////////////
// Coding challenge #3

// test data 1: 96 + 108 + 89; 88 + 91 + 110; // 97.66666666666667 96.33333333333333 // No team wins.
// test data 2: 97 + 112 + 101; 109 + 95 + 123; // 103.33333333333333 109 // Koalas's team wins!
// test data 3: 97 + 112 + 101; 109 + 95 + 106; // 103.33333333333333 103.33333333333333 // Tied!
const dolphinScore = 96 + 108 + 89; 
const koalasScore = 88 + 91 + 110;
const dolphinAverage = dolphinScore / 3;
const koalasAverage = koalasScore / 3;
console.log(dolphinAverage, koalasAverage);

if (dolphinAverage > koalasAverage && dolphinAverage >= 100) {
    console.log("Dolphin's team wins!");
} else if (dolphinAverage < koalasAverage && koalasAverage >= 100) {
    console.log("Koalas's team wins!");
} else if (dolphinAverage >= 100) {
    console.log("Tied!");
} else {
    console.log("No team wins.");
}

/* 
The code actually submitted (not included bonus)

const scoreDolphins = (96 + 108 + 89) / 3; 
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas) {
    console.log("Koalas win the trophy");
} else {
    console.log("Both win the trophy");
}

FEEDBACK:
1. how to name a variable: scoreDolphin and scoreKoalas are the names that make more sense
than dolphinScores, koalasScore (most important noun should be first.)
no need to declare another 'average...' varaible -> the score itself means it's an 'average' score
No need to be verbose and be messy with code

2. Be more explicit
An alternative to the last line could have been scoreDolphin === scoreKoalas 
- not using an else clause, instead else if

// An alternative code in the second else if clause
// could be like this : this is more clear and explicit on what the code does
// no implicit logic has to be assumed
if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100)
*/

////////////////////////////////////
// Coding challenge #4
// Note: actually the word 'between' can be inclusive or exclusive according to usage
// although grammartically, it is exclusive
// https://english.stackexchange.com/questions/118402/when-is-between-inclusive-and-when-exclusive
// If the question of inclusion or exclusion were critical, 
// the only way to determine what was intended would be to ask the author or speaker.
// Personally, I would say that very strictly the limits of "between" are exclusive
const billValue = 430;
const tip = 50 <= billValue <= 300 ? 
billValue * 15 / 100 :
billValue * 20 / 100 ;
const bill = `The bill was ${billValue}, the tip was ${tip}, \
and the total value ${billValue + tip}`;
console.log(bill);
// https://stackoverflow.com/questions/37321047/wrap-long-template-literal-line-to-multiline-without-creating-a-new-line-in-the
// use of newline \
// If you introduce a line continuation (\) at the point of the newline in the literal, 
// it won't create a newline on output:

/* 
sent
const bill = 275;

// Write your code below. Good luck! 🙂 
const tip = 50 <= bill <= 300 ? 
bill * 15 / 100 :
bill * 20 / 100 ;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

FEEDBACK:
-

*/