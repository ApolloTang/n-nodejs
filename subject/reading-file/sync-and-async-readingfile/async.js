var fs = require('fs');
function readfile( fileName, callback ) {
    fs.readFile(fileName, 'utf8', function(err,res){
        if (err) return callback(err);
        callback(null, res);
    })
}
var start = Date.now();
console.log(start, 'start');

readfile('largeFile.tgz', function(err, res){ console.log(Date.now())});
readfile('largeFile.tgz', function(err, res){ console.log(Date.now())});
readfile('largeFile.tgz', function(err, res){ console.log(Date.now())});
readfile('largeFile.tgz', function(err, res){ console.log(Date.now())});
readfile('largeFile.tgz', function(err, res){ console.log(Date.now())});
readfile('largeFile.tgz', function(err, res){ console.log(Date.now())});
readfile('largeFile.tgz', function(err, res){ console.log(Date.now())});
readfile('largeFile.tgz', function(err, res){ console.log(Date.now())});

console.log('done', Date.now());

