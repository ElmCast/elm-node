module File
    ( read, Error(..)
    ) where

{-| Node.File module

@docs read

@docs Error

-}

import Native.Node.File
import Task

{-| Error
-}
type Error = FileError


{-| Read a file.
-}
read : String -> Task.Task Error String
read path =
    Native.Node.File.read path
