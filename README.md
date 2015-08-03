# Experimental server side Elm package

If you have a Main module, you can run the compiled js file with node automatically. 

```
node elm.js
```

You can also import the file as a library, setup any ports, and start the program manually.

```js
var Elm = require('./elm.js');

Elm.worker(Elm.Main, {});
```

The API is still very experimental.

## Example

```elm
module Main where

import Task exposing (Task)
import Console
import File

port main : Task x ()
port main =
    File.read "elm-stuff/exact-dependencies.json"
        `andThen` Console.log
        `onError` Console.fatal
```

For a more in depth example, checkout [elm-oracle](https://github.com/ElmCast/elm-oracle/blob/master/Main.elm).
