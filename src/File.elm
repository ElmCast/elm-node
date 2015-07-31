module File
    ( Error(..), read
    ) where

{-| File

@docs Error
@docs read

-}

import Native.File
import Task

{-| Error
-}
type Error = FileError


{-| Read a file.
-}
read : String -> Task.Task Error String
read path =
    Native.File.read path
