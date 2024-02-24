// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Setting up prettier and vs code
let a = params => params + 1;

if (a(1) === 2) console.log(`1+1=2`);
for (let i = 0; i < 5; i++) {
    console.log(i);
}
let array = [
    1,
    2,
    3,
    'this element is gonna be so long that you should go to the next line',
];
let shortArray = [1, 2, 3];
console.log();

const getPrompt = Number(prompt('Please input some number'));
console.log(`You input ${getPrompt}`);
// video VIDEO FIXME LEC BUG TODO

/*
Hello Michaela

I suggest using the Live Server vscode extension instead of the live-server package. It's easier to setup. Jonas also shows it in lecture 56.

The problem is actually not with the live-server, but with Windows' script execution policy. By default, it's not allowed to execute scripts. To allow running signed scripts, open PowerShell as an administrator, and run this command

Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine
This will allow for execution of signed scripts, which may lead to security issues in some cases, so if you don't need to use it anymore, you can set it back to Restricted with

Set-ExecutionPolicy -ExecutionPolicy Restricted -Scope LocalMachine
---

You can type 'clear' in the terminal to clear it


NOTE: npx live-server << from STACKOVERFLOW

*/
