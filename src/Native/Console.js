//import Native.Console //

var _elmcast$elm_node$Native_Console = function() {

    function log(value) {
        return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
            if (typeof value == "string") {
                console.log(value);
            } else {
                console.log(_elm_lang$core$Native_Utils.toString(value));
            }
            return callback(_elm_lang$core$Native_Scheduler.succeed(
                _elm_lang$core$Native_Utils.Tuple0));
        });
    }

    function error(value) {
        return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
            if (typeof value == "string") {
                console.error(value);
            } else {
                console.error(_elm_lang$core$Native_Utils.toString(value));
            }
            return callback(_elm_lang$core$Native_Scheduler.succeed(
                _elm_lang$core$Native_Utils.Tuple0));
        });
    }

    function fatal(value) {
        return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
            if (typeof value == "string") {
                console.error(value);
            } else {
                console.error(_elm_lang$core$Native_Utils.toString(value));
            }
            process.exit(1);
            return callback(_elm_lang$core$Native_Scheduler.succeed(
                _elm_lang$core$Native_Utils.Tuple0));
        });
    }

    return {
        log: log,
        error: error,
        fatal: fatal
    };
}();


(function() {
    if (typeof module == 'undefined') {
        throw new Error('You are trying to run a node Elm program in the browser!');
    }
})();
