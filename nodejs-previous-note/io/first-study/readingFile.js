var argv = require('optimist').argv,
	fs = require('fs');      // file system (comes with core)

var filename = argv._[0];    // read the first argurment, 
var content = fs.readFileSync(filename, 'UTF-8');
console.log('content of ' + filename + ':');
console.log(content);


// Usage: 
// $ node readingFile.js filename.txt

