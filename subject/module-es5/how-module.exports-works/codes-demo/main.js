
// file d.js
// module.exports = exports = function() { }
console.log('export of d.js is: ', typeof require('./d.js'));

// file c.js
// exports = module.exports = function() { }
console.log('export of c.js is: ', typeof require('./c.js'));

// file b.js
// exports = function() { }
console.log('export of b.js is: ', typeof require('./b.js'));

// file a.js
// module.exports = function() { }
console.log('export of a.js is: ', typeof require('./a.js'));

/*
$ node main.js
export of d.js is:  function
export of c.js is:  function
export of b.js is:  object
export of a.js is:  function
*/

