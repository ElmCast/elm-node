# Experimental node standard library for Elm

Can be used with the alternative elm standard lib and runtime, [elmcast/core](https://github.com/ElmCast/core).

```elm
module Main where

import Task exposing (Task)
improt File
import Process

port main : String -> String -> Task x ()
port main =
    File.read "elm-stuff/exact-dependencies.json"
        `andThen` Process.print
        `onError` Process.print
```
