module Process
    ( print, argv
    ) where

{-| Node.Process module

@docs print
@docs argv

-}

import Native.Process
import Basics exposing (..)
import Task exposing (Task, andThen, onError)

{-| Temporary print task.
-}
print : a -> Task x ()
print value =
  Native.Process.log (toString value)


{-| The arguments passed to the process.
-}
argv : List String
argv = Native.Process.argv


{-| Exit
-}
run : Task x a -> Task x a
run task = task `onError` Native.Process.exit
