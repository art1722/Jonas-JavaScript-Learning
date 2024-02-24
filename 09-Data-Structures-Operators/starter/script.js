'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

///////////////////////////////////////
// Coding challenge 1: football betting app
// Destructuring, Spread, Rest, Short circuit, Nullish coalescing operator
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1.) Create one player array for each team (variables 'players1' and
// 'players2')
const players1 = game.players[0];
const players2 = game.players[1];

// 2.)
// The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
const [gk, ...fieldPlayers] = players1;

// 3.)
// Create an array 'allPlayers' containing all players of both teams (22
//     players)
const allPlayers = [...players1, ...players2];

// 4.)
// During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5.)
// Based on the game.odds object, create one variable for each odd (called
//     'team1', 'draw' and 'team2')
const { team1, x: draw, team2 } = game.odds;

// 6.)
// Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
let printGoals = function (...players) {
  console.log(`Scored ${players.length} goals in total.`);
  for (let i = 0; i < players.length; i++) {
    console.log(`Goal ${i + 1} from ${players[i]}`);
  }
};
printGoals(...game.scored);

// 7.)
// The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
console.log(team1, team2);
const teamWins =
  (team1 > team2 && 'team1') || (team2 > team1 && 'team2') || 'draw';
console.log(teamWins);

/*
Solution / feedback:
1.) Destructuring is a better solution
const [players1, players2] = game.players;
// KEY: // 1.
const [players1, players2] = game.players;
console.log(players1, players2);

2.) 👍 use rest syntax

3.) 👍 use the spread operator to extend both of the player arrays.

4.) 👍 use the spread operator, and add new elements

5.) 👍 You can use nested destructuring.
but destructuring from game.odds is still ok.
const { odds: { team1, x: draw, team2 } } = game;

6.) 👍 use the rest parameter, to aggregate all the incoming arguments into one array
const printGoals = function (...players) {
    console.log(`${players.length} goal were scored.`)
    // print each players to the console
}
NOTE: wrong problem understanding though
// KEY: 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);


7.) use logical operators
evalue the second operand when the result of the first operand is true
: -> so we use the AND operator
team1 < team2 && console.log("Team 1 is more likely to win");
team2 < team1 && console.log("Team 2 is more likely to win");
NOTE: we can use the expression and combined them with the logical operators
// KEY: // 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
*/

///////////////////////////////////////
// Coding challenge 2: football betting app
// The for-of loop, Enhanced object literals, Optional chaining, Looping objects
// Object keys, values, entries

// 1.)
// Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
printGoals = function (...players) {
  for (const [i, player] of players.entries()) {
    console.log(`Goal ${i + 1}: ${player}`);
  }
};
printGoals(...game.scored);

// 2.)
// Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
// NOTE: you should use the object itself, don't destruct object into the variables
// just calculate the average of the elements in the object
let averageOdd = 0;
const odds = game.odds;
console.log(odds);

// 2.1 by destruct the objet into the variables (for the purpost of revision the old lesson)
const { team1: oddsTeam1, x: oddsDraw, team2: oddsTeam2 } = odds;
console.log((oddsTeam1 + oddsDraw + oddsTeam2) / 3);

// 2.2 by calculate from the object itself
for (const odd of Object.values(odds)) {
  averageOdd += odd;
}
averageOdd /= Object.keys(odds).length;
console.log(averageOdd);

// 3.)
// Print the 3 odds to the console, but in a nice formatted way, exactly like this:
//    Odd of victory Bayern Munich: 1.33
//    Odd of draw: 3.25
//    Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names 😉
const { team1: team1Name, team2: team2Name } = game;
const { team1: team1Odds, x: drawOdds, team2: team2Odds } = odds;
console.log(`Odd of victory ${team1Name}: ${team1Odds}`);
console.log(`Odd of draw: ${drawOdds}`);
console.log(`Odd of victory ${team2Name}: ${team2Odds}`);

// Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// }
const scorers = {};
for (const player of game.scored) {
  let score = scorers[player] || 0;
  score++;
  scorers[player] = score;
}
console.log(scorers); //

/*
NOTE:
1. you can group Object.values(game.odds) into one variable -> const odds
2. a cleaner solution to the challenge 3 is to not create a new variable
just loop over the odds object
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
  }
}
NOTE: how to name a variable; team, odd, teamStr
NOTE: in array we use: array.entries()
but in object we use: Object.entries(obj)
*/
// rewrite the 3rd challenge
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}
// NOTE: Don't forget the ternary operator
// you should modifiy the value in-place, no need to set the new score variable
// // BONUS
// So the solution is to loop over the array,
// and add the array elements as object properties,
// and then increase the count as we encounter a new occurence of a certain element
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

///////////////////////////////////////
// Coding challenge 3: football betting app
// Sets and maps
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.)
// Create an array 'events' of the different game events that happened (no
//   duplicates)
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.)
// After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);

// 3.)
// Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
let averageEventTime = 90 / gameEvents.size;
console.log(`An event happened, on average, every ${averageEventTime} minutes`);

// 4.)
// Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17:
// ⚽
// GOAL
const halfGameTime = 90 / 2;
for (const [time, event] of gameEvents) {
  console.log(
    `[${time <= halfGameTime ? 'FIRST HALF' : 'SECOND HALF'}] ${time}: ${event}`
  );
}

/*
NOTE:
1.
you can calculate by using the accurate total time used for the game (92 minutes)
by using the pop method of the array

const time = [...gameEvents.keys()].pop();
console.log(`An event happened, on average, every ${time / gameEvent.size} minutes`);
2.
use 'minute' as a variable name is more specific than just 'time'
3.
you can calculate the half variable first, then just put that half variable into the string
don't need to calculate in place in the template string.
*/

///////////////////////////////////////
// Coding challenge 4: camelCase variable name
// String methods

// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const convertToCamelCase = function (variable) {
  const wordList = variable.trim().split('_');

  for (let i = 0; i < wordList.length; i++) {
    if (i === 0) {
      wordList[i] = wordList[i].toLowerCase();
    } else {
      wordList[i] =
        wordList[i][0].toUpperCase() + wordList[i].slice(1).toLowerCase();
    }
  }

  return wordList.join('');
};

const formatResultString = function (variableList, maxPadding) {
  let resultStr = '';
  for (let i = 0; i < variableList.length; i++) {
    resultStr += `${variableList[i].padEnd(maxPadding, ' ')}   ${'✅'.repeat(
      i + 1
    )}`;
    if (i !== variableList.length - 1) {
      resultStr += '\n';
    }
  }
  return resultStr;
};

const convertAllToCamelCase = function (variables) {
  const variablesList = variables.split('\n');
  const resultList = [];
  let maxPadding = 0;

  for (const variable of variablesList) {
    const camelCaseVariable = convertToCamelCase(variable);
    if (camelCaseVariable.length > maxPadding) {
      maxPadding = camelCaseVariable.length;
    }
    if (camelCaseVariable) {
      resultList.push(camelCaseVariable);
    }
  }

  return formatResultString(resultList, maxPadding);
};

const testStr = `underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure`;
document.querySelector('button').addEventListener('click', function () {
  const webTestStr = document.querySelector('textarea').value;
  console.log(webTestStr);
  console.log(convertAllToCamelCase(webTestStr));
});

/*
NOTE:

Solution by Djamil:
document.getElementById("convert-button").addEventListener("click", function () {
    const text = document.getElementById("input-textarea").value;
    const variables = text.split("\n");
    console.log(variables)
    for (let i = 0; i < variables.length; i +=1) {
        let camelCaseVariable = variables[i].
        toLowerCase().
        trim().
        split("_").
        map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)).
        join("");
 
        camelCaseVariable += ' ' + '✅'.repeat(i + 1);
        console.log(camelCaseVariable);
 
    }
})
*/
// Jonas solution here
// assume we have a button2 instead of the button
document.querySelector('button2').addEventListener('click', function () {
  const text = document.querySelectorj('textarea').value;

  // split string from the newline character
  const rows = text.split('\n');

  // convert each variable to camelCase
  for (const row of rows) {
    // split each variable, then convert each of them
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
  }
  console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
});

/*
NOTE:
for variable with only two words:
using destructuring is enough.

NOTICE that the check mark all start at the same position
that means the variable string here should have the same length.
We can achieved this by using padding() ->
and when we pad by using space we can omit the second argument.

NOTE:
To get the current index out of for-of loop
you can use
for (const [i, row] of rows.entries())
-> now you can use the index to repeat the check mark string.
*/

// More string exercise
