# Experimental server side standard library for Elm

Make sure you import the Node module in your main file. If you have a Main module, you can run your compiled js file with node automatically, `node elm.js`. You can also import the file as a library, `var Elm = require('./elm.js')`, setup any ports, and start the program with `Elm.worker(Elm.MyModule, MyArgs);`. For now, the package is going to be almost a one to one mapping to the node standard library.

```elm
module Main where

import Task exposing (Task)
import Node
import File
import Process

port main : Task x ()
port main =
    File.read "elm-stuff/exact-dependencies.json"
        `andThen` Node.log
        `onError` Node.log
            `andThen` (\_ -> Process.exit 1)
```
