
var _ = require('underscore');
var what;

console.log('*********************************************');
console.log('*** module.exports === this:  true       ***');

this.property = 'thisProperty';
console.log('this.property: ', this.property)                        // 'thisProperty'
console.log('module.exports.property: ', this.property)              // 'thisProperty'
console.log('module.exports.property === this.property: ',  module.exports.property === this.property);
                                                                     // true
console.log('module.exports === this: ',  module.exports === this)   // true


console.log('*********************************************');
console.log('*** undeclared goes to "global" not "this"    ***');
unDeclared = 'unDeclared'
console.log('unDeclared: ', unDeclared);                                             //'unDeclared'
console.log('global.unDeclared: ', global.unDeclared);                               //'unDeclared'
console.log('unDeclared === global.unDeclared:', unDeclared === global.unDeclared);  // true
console.log('unDeclared === this.unDeclared:', unDeclared === this.unDeclared);      // false
console.log('global === this:', global === this);                                    // false

console.log('*********************************************');
console.log('*** Declared is private to module         ***');

var declared = 'declared';                         
console.log('declared: ', declared);               // 'declared'
console.log('module.declared: ', module.declared); // undefined
console.log('this.declared: ', this.declared);     // undefined
console.log('global.declared: ', global.declared); // undefined
console.log('module.exports.declared: ', module.exports.declared); // undefined

console.log('- - - - - - - - - - - - - - - - - - ')
	what = _.pairs(module.exports)
	console.log({what:what});

