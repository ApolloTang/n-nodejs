Consider the following folder struture:

```
/
└── dir3/
    └── dir2/
        └── dir1/
            └── main.js
```

let's `cd` into `dir1`  and call node on `main.js` with the content:

```
console.log(process.cwd())  //   /dir3/dir2/dir1
```

The above logged out the location where we called node.  Now let's do some experiment with `path.resolve`:

```
console.log(path.resolve('b' ))                              //   /dir3/dir2/dir1/b
console.log(path.resolve('b', 'c' ))                         //   /dir3/dir2/dir1/b/c
console.log(path.resolve('b', 'c', '..' ))                   //   /dir3/dir2/dir1/b
console.log(path.resolve('b', 'c', '..', '..' ))             //   /dir3/dir2/dir1
console.log(path.resolve('b', 'c', '..', '..', '..' ))       //   /dir3/dir2
console.log(path.resolve('b', 'c', '..', '..', '..', '..' )) //   /dir3
```

Notice that how `path.resolve` understand the parent directory `'..'`  and it resolve (calculate) the path starting from `dir1` (where node is called).  Had we called node from  `dir2`, the path segment `dir1` will be absent from the result:

```
console.log(path.resolve('b' ))                              //   /dir3/dir2/b
console.log(path.resolve('b', 'c' ))                         //   /dir3/dir2/b/c
console.log(path.resolve('b', 'c', '..' ))                   //   /dir3/dir2/b
console.log(path.resolve('b', 'c', '..', '..' ))             //   /dir3/dir2/
console.log(path.resolve('b', 'c', '..', '..', '..' ))       //   /dir3/dir2
console.log(path.resolve('b', 'c', '..', '..', '..', '..' )) //   /dir3
```

Now, let's repeat the above experiement with `path.join `. Regardless of where you call node the result will be the same:

```
console.log(path.join('b' ))                              //   b
console.log(path.join('b', 'c' ))                         //   b/c
console.log(path.join('b', 'c', '..' ))                   //   b
console.log(path.join('b', 'c', '..', '..' ))             //   .
console.log(path.join('b', 'c', '..', '..', '..' ))       //   ..
console.log(path.join('b', 'c', '..', '..', '..', '..' )) //   ../..
```

Similar to `path.resolve`,  `path.join` also understand the parent directory `'..'`; however, it does not have the concept of  current working directory that where node is called. It simply calculates the path starting from `'b'` , either "walks" up the parent directory when it sees `'..'` or concaternate the path segment.  As soon as it reaches past the first path segment (`'b'`), there isn't any more parent to walk up, so it began to concaternate the string `'..'`.






```
console.log(path.join(__dirname, 'b' ))                              //   /dir3/dir2/dir1/b
console.log(path.join(__dirname, 'b', 'c' ))                         //   /dir3/dir2/dir1/b/c
console.log(path.join(__dirname, 'b', 'c', '..' ))                   //   /dir3/dir2/dir1/b
console.log(path.join(__dirname, 'b', 'c', '..', '..' ))             //   /dir3/dir2/dir1
console.log(path.join(__dirname, 'b', 'c', '..', '..', '..' ))       //   /dir3/dir2
console.log(path.join(__dirname, 'b', 'c', '..', '..', '..', '..' )) //   /dir3
```

