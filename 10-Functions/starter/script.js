'use strict';

///////////////////////////////////////
// Coding challenge 1: poll app
// default parameters, pass by reference, higher-order functions
// call apply bind methods

/*
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
    What is your favourite programming language?
    0: JavaScript
    1: Python
    2: Rust
    3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)

2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?
*/
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  getInput() {
    let answer = '';
    do {
      answer = prompt(`${this.question}\n${this.options.join('\n')}`);
      if (answer.length === 0) {
        alert('Please fill in the input');
      }
    } while (answer.length === 0);

    return answer;
  },
  getOptionNumber() {
    const optionNumber = new Set();

    for (const option of this.options) {
      optionNumber.add(Number(option.slice(0, option.indexOf(':'))));
    }
    return optionNumber;
  },
  registerNewAnswer() {
    let inputPassStatus = false;
    do {
      // display the prompt window and get the input
      const answer = this.getInput();
      const answerNumber = Number(answer);

      // input validation
      if (!isNaN(answerNumber)) {
        if (this.getOptionNumber().has(answerNumber)) {
          // update the answers array
          // according to the answer number
          this.answers[answerNumber]++;
          inputPassStatus = true;
        } else {
          alert('Invalid option, please try again');
        }
      } else {
        alert('Invalid input type, please fill in the number');
      }
    } while (inputPassStatus === false);

    // Display the result of the poll
    this.displayResult();
  },
  displayResult(type = 'array') {
    // ES6 default parameter
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// Bonus : partial application
const testArray1 = {
  answers: [5, 2, 3],
};
const testArray2 = {
  answers: [1, 5, 3, 9, 6, 1],
};
poll.displayResult.call(testArray1, 'array');
poll.displayResult.call(testArray1, 'string');
poll.displayResult.call(testArray2, 'array');
poll.displayResult.call(testArray2, 'string');

/*
NOTE:
1. you might try to write some comment in each section like:
- Get answer
- Register answer
2. For a simple check in the register answer section:
you might try some short-circuiting like
e.g.
typeof answer === 'number' && 
answer < this.answers.length &&
this.answers++
(short-circuiting might be useful here
second operand will run if the first operand is true
and the third operand will run if the second operand is true

if either of this condition here is false
then the end part will not be executed.

instead of writing complex nested if-else clause)
*/
// 3. More concise solution of the bonus tasks by jonas
// no need to create a new variable
// logic: answers comes from the this keyword
// so if you want to have a different this keyword
// then use the call method
/*
again, to recap, this works,
because this function here is looking for this dot answers.
But our array is, well, it's simply out here.
So we need a way to make this dot answers,
equal to this array.
And so that's why we used to call method here,
so that we could manually set the disk keyword,
to a new object,
which as the answers property has that new array.
*/
console.log('Jonas solution challenge #1 bonus');
poll.displayResult.call({ answers: [5, 2, 3] }, 'array');

///////////////////////////////////////
// Coding challenge 2:
// IIFE and closures

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  header.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

/*
NOTE: this callback function get accessed to the header variable
due to closure.

Closure is needed here
because by the time this callback is executed, this IIFE is now gone.
It has already been executed.
and the variable header is gone
(The environment where the function was created is now gone.)

but still the callback function here 
still able to access the variable created by the time the function was born
at the function birth's place
<The birthplace of this event handler function is this whole IIFE>

We can also say that the header is in the backpack of this event handler function
*/
