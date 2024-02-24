'use strict';

/*
[HTML] - How to type the degrees Celsius symbol
On Windows, hold down the 'Alt' key and type '0176' on the numeric keypad to get the symbol ° 
(release the 'Alt' key after typing 0176).
*/
const printForecast = arr => {
    let outputString = '';
    for (let i = 0; i < arr.length; i++) {
        outputString += `... ${arr[i]}°C in ${i + 1} days `;
    }
    outputString += '...';

    console.log(outputString);
};
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);

/*
NOTE:
1. Understanding the problem
- array transformed to string, separated by three dots ...
- What is the X days? - is the current index of the array + 1

2. Breaking up into sub-problem
- Transform array into string - in each iteration, we'll add to the output string
- Transform each element to string with °C
- String needs to contain day at index + 1
- Add three dots between each elements, and start and end of the string
// We might add subproblem to test / log some substring to the console while coding

Note that we want to write the functions that work for all the arrays
* we might use function expression here instaed of arrow function (easier to read)

So hope you liked this one,

even though it was a little bit more theoretical,

but I think it's important to also have a section

like this in a big web development course

because soft skills,

like the ones that I just showed you

are also very important for your success.

*/
