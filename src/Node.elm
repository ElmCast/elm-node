module Node
    ( log
    ) where

{-| Node

@docs log

-}

import Native.Node
import Task exposing (Task)

{-| Log
-}
log : a -> Task x ()
log value =
    Native.Node.log (toString value)
