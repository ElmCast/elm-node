module ExampleHttpServer exposing (main)

import Http exposing (serve, Request, Response, sendResponse)
import Platform exposing (program)
import Task exposing(Task)
import Console exposing(log)
import String exposing(append)

type alias Model = ()
type Msg = Booted () | BootLogged ()

handle : Request -> Response -> Task Never ()
handle req res =
    sendResponse res "Hello world"

init : ( Model, Cmd Msg )
init =
    ( (), Task.perform Booted (serve 8000 handle) )

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Booted _ -> ( (), Task.perform BootLogged ( log "Server booted" ) )
        BootLogged _ -> ( (), Cmd.none )

main : Program Never Model Msg
main =
    program
        { init = init
        , update = update
        , subscriptions = always Sub.none
        }
