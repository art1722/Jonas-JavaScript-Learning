const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
const citrus = fruits.slice(1, 0);
console.log(citrus);

// practice lecture of the array methods

// Exercises 1
// calculate how much has been deposited in total across the bank

const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

// Exercise 2
// How many deposits there have been in the bank with at least 1000 dollars

const numDeposit1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;

const numDeposit1000another = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
/*
NOTE:
the plus plus operator a++
does actually increment the value
but it still returns the previous value.
So if we now log the a again here, you will see that now

We can simply use the prefixed plus plus operator,
to write it before the operand
*/

// Exercise 3
// reduce() method boils down to one new object
// So reduce really is like the Swiss knife of array methods.
// We could use it for everything.
// create an object
// which contains the sum of the deposits and the sum of the withdrawals
// so calculate these two sums all in one go using the reduce method.
// NOTE: we can also destructure this object immediately
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // First solution
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);

      // Second solution: a bit cleaner
      sums[cur > 0 ? 'deposits' : 'withdrawal'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

/*
NOTE: you can recreate any of the examples we did previously
in the section with map, filter, and reduce
to use only the reduce method
  */

// Exercise 4
// create a simple function to convert any string to a title case
// so all the words are capitalized except some of them.
// e.g. a (which is an article)

/*
And by the way, it is a bit of a common pattern
to create an array of exceptions and then use that
for some computation further down the road.
I've done this myself many times.

we have to first convert them all to lowercase.
And this is especially important in this case
because we are now working with capitalization.
So we will capitalize some of the words.
And so they should of course all be lowercase to start with.
*/
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exception = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'which'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exception.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase);
  /*
    After this, there is the weird situations where the first word is not capitalized.
    e.g. If we start the sentence with any word in the exception array
    we have to capitalize it too
    we have to fix this by capitalize the final output

    because we have to capitalize a lot of time so we refactored it into a standalone function.

    */
};
