'use strict';

function consolePlay1() {
    // Outputting text to the console
    console.log('General output of logging information');
    //// In Firefox, a small "i" icon is displayed next to these items in the console's log.
    console.info('Informative output of logging information');
    debugger;
    console.table({
        value1: 5,
        value2: '10',
        value3: true,
        value4: [null, undefined, false],
    });

    console.warn('warning');
    console.error('error');
    console.debug('debug'); // ouput a message to the console at the debug log level
}

consolePlay1();
