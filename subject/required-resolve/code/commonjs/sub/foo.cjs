var fs = require( "fs" );
var path = require( "path" );

const pathToFile = path.join( __dirname, "data.txt" )
console.log(pathToFile)
const buf = fs.readFileSync( pathToFile )
console.log( buf.toString('utf8') )


const pathToFile2 = require.resolve("./data.txt")
console.log(pathToFile2)
const buf2 = fs.readFileSync( pathToFile2 )
console.log( buf2.toString('utf8') )




let pathToFileNonExistence = ''

console.log('\nusing path.resolve( __dirname, "non-existence.txt" ):')
pathToFileNonExistence = path.resolve( __dirname, "non-existence.txt" )
console.log(pathToFileNonExistence)

console.log('\nusing path.join( __dirname, "non-existence.txt" ):')
pathToFileNonExistence = path.join( __dirname, "non-existence.txt" )
console.log(pathToFileNonExistence)

console.log('\nusing require.resolve( "./data.txt" ):')
pathToFileNonExistence = require.resolve( "./data.txt" )

try {
  console.log(pathToFileNonExistence)
  pathToFileNonExistence = require.resolve( "./non-existence.txt" )
} catch (e) {
  console.log('\nusing require.resolve( "./non-existence.txt" ):')
  console.log(e)
}


