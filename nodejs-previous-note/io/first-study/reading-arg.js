// Reading arguments with optimist https://npmjs.org/package/optimist

var argv = require('optimist').argv;  // using https://npmjs.org/package/optimist

    console.log("argv.arg1: ", argv.arg1);
    console.log("argv.arg2: ", argv.arg2);
    console.log("argv._.length: ", argv._.length);
    for (var i=0; i < argv._.length; i++) {
        console.log('argv._['+i+']=' + argv._[i]);
    }
    
    //$ node reading-arg.js --arg1 a --arg2 b c d 
    //argv.arg1:  a
    //argv.arg2:  b
    //argv._.length:  2
    //argv._[0]=c
    //argv._[1]=d 