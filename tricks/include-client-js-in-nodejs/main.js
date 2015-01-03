/*
 * A useful quick'n'dirty trick to put a js file design for client-side
 * into node.js app
 */

var fs = require('fs');
eval(fs.readFileSync('./myClientSideCode.js')+'');
console.log(a);

/*
The empty string concatenation +'' is necessary to get the file
content as a string and not an object (you can also use .toString()
if you prefer).

The eval() can't be used inside a function and must be called
inside the global scope otherwise no functions or variables will
be accessible (i.e. you can't create a include() utility function
or something like that).

Please note that in most cases this is bad practice and you should
instead write a module. However, there are rare situations, where
pollution of your local context/namespace is what you really want.
*/

// ref: http://stackoverflow.com/questions/5797852/in-node-js-how-do-i-include-functions-from-my-other-files
