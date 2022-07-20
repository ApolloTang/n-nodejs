# The difference between `path.resolve` and `path.joint`: a Study 

Consider the following folder struture:

```text
/
└── dir3/
    └── dir2/
        └── dir1/
            └── main.js
```

let's `cd` into `dir1`  and call node on `main.js` with the content:

```js
console.log(process.cwd())  //   /dir3/dir2/dir1
```

The above logged out the location where we called node.  Now let's do some experiment with `path.resolve` with following content in `main.js`:

```js
console.log(path.resolve('b' ))                              //   /dir3/dir2/dir1/b
console.log(path.resolve('b', 'c' ))                         //   /dir3/dir2/dir1/b/c
console.log(path.resolve('b', 'c', '..' ))                   //   /dir3/dir2/dir1/b
console.log(path.resolve('b', 'c', '..', '..' ))             //   /dir3/dir2/dir1
console.log(path.resolve('b', 'c', '..', '..', '..' ))       //   /dir3/dir2
console.log(path.resolve('b', 'c', '..', '..', '..', '..' )) //   /dir3
```

Notice that how `path.resolve` understand the parent directory `'..'`,  it resolve (calculate) the path starting from `dir1` where node is called. This is process of resolving the path is called [path normlization]( https://nodejs.org/api/path.html#pathnormalizepath). Had we called node from  `dir2`, the path segment `dir1` will be absent from the result because the normalization is calculate from `dir2`:

```
console.log(process.cwd())  //   /dir3/dir2
```

```js
console.log(path.resolve('b' ))                              //   /dir3/dir2/b
console.log(path.resolve('b', 'c' ))                         //   /dir3/dir2/b/c
console.log(path.resolve('b', 'c', '..' ))                   //   /dir3/dir2/b
console.log(path.resolve('b', 'c', '..', '..' ))             //   /dir3/dir2
console.log(path.resolve('b', 'c', '..', '..', '..' ))       //   /dir3
console.log(path.resolve('b', 'c', '..', '..', '..', '..' )) //   /
```

Now, let's repeat the above experiement with `path.join `, we will see that regardless of where you call node the result will be the same:

```js
console.log(path.join('b' ))                              //   b
console.log(path.join('b', 'c' ))                         //   b/c
console.log(path.join('b', 'c', '..' ))                   //   b
console.log(path.join('b', 'c', '..', '..' ))             //   .
console.log(path.join('b', 'c', '..', '..', '..' ))       //   ..
console.log(path.join('b', 'c', '..', '..', '..', '..' )) //   ../..
```

## **Observation:**

Similar to `path.resolve`,  `path.join` also understand the parent directory `'..'` and preform path normalization. However, `path.join` does not have the concept of current working directory (where node is called). It simply calculates the path starting from `'b'` , either "traversing" up the parent directory when it sees `'..'` or concaternate the path segment.  As soon as it "traverses" past the first path segment (`'b'`), there isn't any more parent to "traverse", it began to concaternate the string `'..'`.

## Summary:

One different between`path.resolve`and `path.join` is that `path.resolve` is aware of the current working directory where node is called, but `path.join` does not. 

## Additional note:

If we add `__dirname` to the first argument, the normalization will use the absolute location of `main.js`  as the starting point:


```js
console.log(path.join(__dirname, 'b' ))                              //   /dir3/dir2/dir1/b
console.log(path.join(__dirname, 'b', 'c' ))                         //   /dir3/dir2/dir1/b/c
console.log(path.join(__dirname, 'b', 'c', '..' ))                   //   /dir3/dir2/dir1/b
console.log(path.join(__dirname, 'b', 'c', '..', '..' ))             //   /dir3/dir2/dir1
console.log(path.join(__dirname, 'b', 'c', '..', '..', '..' ))       //   /dir3/dir2
console.log(path.join(__dirname, 'b', 'c', '..', '..', '..', '..' )) //   /dir3
```

---

### Ref:

https://stackoverflow.com/questions/35048686/whats-the-difference-between-path-resolve-and-path-join

https://stackoverflow.com/questions/8131344/what-is-the-difference-between-dirname-and-in-node-js

https://stackoverflow.com/questions/39110801/path-join-vs-path-resolve-with-dirname
