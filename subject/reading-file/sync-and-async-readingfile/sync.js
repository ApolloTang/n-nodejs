var fs = require('fs');
function readfile( fileName ) {
  return fs.readFileSync( fileName , 'utf8');
}
var start = Date.now();
console.log(start, 'start');

readfile('largeFile.tgz');
readfile('largeFile.tgz');
readfile('largeFile.tgz');
readfile('largeFile.tgz');
readfile('largeFile.tgz');
readfile('largeFile.tgz');
readfile('largeFile.tgz');
readfile('largeFile.tgz');
readfile('largeFile.tgz');
readfile('largeFile.tgz');
readfile('largeFile.tgz');
readfile('largeFile.tgz');
readfile('largeFile.tgz');
readfile('largeFile.tgz');
readfile('largeFile.tgz');
readfile('largeFile.tgz');
readfile('largeFile.tgz');
readfile('largeFile.tgz');
readfile('largeFile.tgz');
readfile('largeFile.tgz');
readfile('largeFile.tgz');
readfile('largeFile.tgz');
readfile('largeFile.tgz');
readfile('largeFile.tgz');
readfile('largeFile.tgz');
readfile('largeFile.tgz');

console.log(Date.now(), 'done')
