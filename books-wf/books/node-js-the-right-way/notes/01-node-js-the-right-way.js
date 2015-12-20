$ nodemon --debug-brk --harmony index.js

Comman line arguments
=====================

    [code]
        "use strict";

        const argv = process.argv;
        // argv stand for "argument vector
        // no neet to require process becasue it is global
        console.log(argv);

    $nvm use 0.11
    $nodemon --debug-brk --harmony index.js a b c
        [ 'node',
          '/Users/apollotang/Desktop/wf/generate-data/index.js',
          'a',
          'b',
          'c' ]

ls, process.stdout
===================

    child_process.spawn
    -------------------
    "use strict";
    const spawn = require('child_process').spawn;
    let  ls = spawn('ls', ['-lh']);
    ls.stdout.pipe(process.stdout);

    // spawn's property: "stdin", "stdout", and "stderr"
    // are "Streams" that can be operated by pipe().

    $nvm use 0.11
    $nodemon --debug-brk --harmony index.js


[p 15] Capturing Data
=====================

    Like Stream, the ChildProcess class extends EventEmitter,
    so we can add listeners to it, as well.

    The on() method adds a listener for the specified event type.
    We listen for data events because we’re interested in
    data coming out of the stream.

    After a child process has exited and all its streams have
    been flushed, it emits a close event.


    [code]
        "use strict";
        const spawn = require('child_process').spawn;
        let  ls = spawn('ls', ['-lh']);

        ls.stdout.on('data', function(chunk){
            console.log(chunk.toString());
        });
        ls.stdout.on('close', function(chunk){
            console.log('done');
        });


    Buffer
    ------
        Data events pass a *buffer* object to callback each time
        a chunk of data is arrived

        A Buffer is Node’s way of representing binary data.

        It points to a blob of memory allocated by Node’s native core
        outside of the JavaScript engine.

        Buffers can’t be resized and they require encoding and decoding
        to convert to and from JavaScript strings.

        Calling toString() explicitly converts the buffer’s contents
        to a JavaScript string using Node’s default encoding (UTF-8).
        converting buffer is a slow operation, but will do for
        now for convenient.

[p 18] creating a file
======================

This following program writes a message to file "target.txt"
(creating it if it doesn’t exist, or overwriting it if it does).

    "use strict";
    const fs = require('fs');
    fs.writeFile(
        'target.txt',
        'a witty message\n',
        function (err) {
            if (err) { throw err; }
            console.log("File saved!");
        }
    );


[p 17] reading a file
=====================

    "use strict";
    const fs = require('fs');
    fs.readFile(
        'target.txt',
        function (err, buffer) {
            if (err) { throw err; }
            console.log( buffer.toString() );
            process.stdout.write( buffer.toString() );
            // process.stdout.write( buffer );
        }
    );


    Alterntively you can use Stream in filesystem
    ---------------------------------------------

    "use strict";
    const
        fs = require('fs'),
        stream = fs.createReadStream('target.txt');

    stream.on('data', function(chunk) {
        process.stdout.write(chunk);
    });
    stream.on('error', function(err) {
        process.stderr.write("ERROR: " + err.message + "\n");
    });

