// http://nodejs.org/api/readline.html

var rl = require('readline');   // readline module come with core node.js no need to install

var prompts = rl.createInterface(process.stdin, process.stdout);

function doThisWhenUserType (users_input) {
    var message = 'You have typed "' + users_input + '"';     
    console.log(message);
    process.exit();  // this tell the script to stop reading input, 
                     // w/o it the script keep readying input from standard input
}; 

prompts.question("type something: ", doThisWhenUserType );

