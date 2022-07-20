# require.resolved(arg) 

Given a module with path as argument `require.resolved` can return the resolved absolute path to the location of this module. 

For example given the following folder structure: 
```
**/src/
├── main.cjs
└── sub
    ├── data.txt
    └── foo.cjs
```

 where the content of `main.cjs` as: 

```js
require( "./sub/foo.cjs" )
```

and the content of `foo.cjs`: 

```js
const pathToFile = require.resolve("./data.txt")
console.log(pathToFile)
```

Here is the result of calling `node` on `main.cjs  ` in folder `src/`

```
$ pwd
src/
$ node main.cjs
/Users/<usr>/Desktop/node-lab/commonjs/sub/non-existence.txt
```



## Discussion:

In the above example:

```js
require.resolve("./data.txt")
```

give you the same result as if you had used:

```js
path.join( __dirname, "data.txt" )
```

or:

```js
path.resolve( __dirname, "data.txt" )
```

Note that  `require.resolve` does not require you to provide  `__dirname`. This could be handy sometime; for example if you have to read a file, instead of: 

```js
fs.readFileSync( path.join( __dirname, "data.txt" ) )
```

it is simplified to:

```js
fs.readFileSync( require.resolve( "./data.txt" ) )
```



## Caveat

1. Be careful! if `require.resolve` can not locate the resource you ask, it will throw.

2. Note that the keyword`require` is not defined in ES module scope. If you have to use `require.resolve` in ES module you have to import it (see: [Ref](https://stackoverflow.com/a/63156878/3136861), [Ref](https://nodejs.org/api/modules.html#modules_module_createrequire_filename)): 
   ```js
   import { createRequire } from 'module';
   
   const require = createRequire(import.meta.url);
   const path = require.resolve('./data.txt')
   ```

   

---

####  Reference:

[Using require.resolve() To Calculate Module-Relative File Paths In Node.js by Ben Nadel](https://www.bennadel.com/blog/3243-using-require-resolve-to-calculate-module-relative-file-paths-in-node-js.htm)

[Official Documentation](https://nodejs.org/api/modules.html#requireresolverequest-options)