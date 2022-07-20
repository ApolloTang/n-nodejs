const path = require('path')
console.log(process.cwd())
console.log('-----------')

console.log(path.resolve('b' ))                              //   /dir3/dir2/dir1/b
console.log(path.resolve('b', 'c' ))                         //   /dir3/dir2/dir1/b/c
console.log(path.resolve('b', 'c', '..' ))                   //   /dir3/dir2/dir1/b
console.log(path.resolve('b', 'c', '..', '..' ))             //   /dir3/dir2/dir1
console.log(path.resolve('b', 'c', '..', '..', '..' ))       //   /dir3/dir2
console.log(path.resolve('b', 'c', '..', '..', '..', '..' )) //   /dir3
console.log('-----------')
console.log(path.join('b' ))                              //   b
console.log(path.join('b', 'c' ))                         //   b/c
console.log(path.join('b', 'c', '..' ))                   //   b
console.log(path.join('b', 'c', '..', '..' ))             //   .
console.log(path.join('b', 'c', '..', '..', '..' ))       //   ../..
console.log(path.join('b', 'c', '..', '..', '..', '..' )) //   ../..
console.log('-----------')
console.log(path.join(__dirname, 'b' ))                              //   /dir3/dir2/dir1/b
console.log(path.join(__dirname, 'b', 'c' ))                         //   /dir3/dir2/dir1/b/c
console.log(path.join(__dirname, 'b', 'c', '..' ))                   //   /dir3/dir2/dir1/b
console.log(path.join(__dirname, 'b', 'c', '..', '..' ))             //   /dir3/dir2/dir1
console.log(path.join(__dirname, 'b', 'c', '..', '..', '..' ))       //   /dir3/dir2
console.log(path.join(__dirname, 'b', 'c', '..', '..', '..', '..' )) //   /dir3
