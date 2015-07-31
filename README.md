# Experimental server side standard library for Elm

Make sure you import the Node module in your main file. If you have a Main module, you can run your compiled js file with node automatically `node elm.js`. You can also the file as a nodejs library, `var Elm = require('./elm.js')`, setup any ports, and start the program with `Elm.worker(Elm.MyModule, MyArgs);`.

```elm
module Main where

import Node
import Task exposing (Task)
import File
import Process

port main : Task x ()
port main =
    File.read "elm-stuff/exact-dependencies.json"
        `andThen` Process.print
        `onError` Process.print
```
