module Process
    ( argv, exit, version
    ) where

{-| Process

@docs argv
@docs exit
@docs version

-}

import Native.Process
import Basics exposing (..)
import Task exposing (Task, andThen, onError)

{-| The arguments passed to the process.
-}
argv : List String
argv = Native.Process.argv


{-| Exit
-}
exit : Int -> Task x ()
exit code = Native.Process.exit code


{-| Version
-}
version : String
version = Native.Process.version
