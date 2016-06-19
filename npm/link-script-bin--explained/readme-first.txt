
to get this demo on run able state do following:

    $ cd sub-package
    $ npm link
    $ cd ../my-package/
    $ npm link sub-package

when done experiment, make sure your remove your link from global
prefix by:

    $npm uninstall -g sub-package

check to see if it is removed:

    npm ls -g --depth 0





