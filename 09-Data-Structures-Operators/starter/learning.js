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

// String practice
// 1.) Info: index and slice
function bugNegativeIndex(str) {
  const result = str.split(' ');
  result[-1] = 'J';
  console.log(result.findIndex(x => x.length === 1));
  return result; // array actually are a special kind of object, it can have normal object properties
  // this is not recommended in JS -> can cause subtle bugs
  // however, you can't do negative indexes with the string, -> error
}
console.log(bugNegativeIndex('This is my string'));
// 2.) Decoration: trim and pad
// 3.) Modify; case, replace, split&join, repeat
// 3.1) Most popular way of reverse the string
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log('?????.'.split('').reverse().join(''));

// 3.2) exercise: capitalize the first letter of every single word,
// and convert the rest of the word to lowerCase
// implementation: use the toUpperCase() and toLowrCase() method
function capitalize1(strBegin) {
  const strArray = strBegin.split(' ');
  const strResult = [];

  for (const word of strArray) {
    if (word.length === 0) continue;
    strResult.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  }
  return strResult.join(' ');
}

console.log(capitalize1('My name iS johN'));
