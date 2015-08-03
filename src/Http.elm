module Http
  ( Error(..), get
  ) where

{-|

@docs Error
@docs get

-}

import Task exposing (Task)

import Native.Http

{-| Error
-}
type Error = NetworkError String


{-| get
-}
get : String -> Task Error String
get url =
  Native.Http.get url
