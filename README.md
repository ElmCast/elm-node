# Experimental server side Elm package

If you have a Main module, you can run the compiled js file with node automatically.

```
node elm.js
```

You can also import the file as a library, setup any ports, and start the program manually.

```js
var Elm = require('./elm.js');

var app = Elm.Main.worker();
```

The API is still very experimental.

For a more in depth example, checkout [elm-oracle](https://github.com/ElmCast/elm-oracle/blob/master/Main.elm).
