//import Native.Process //

var _elmcast$elm_node$Native_Process = function() {

    var child = require('child_process');

    function exec(command) {
        return _elm_lang$core$Native_Scheduler.nativeBinding(
            function(callback) {
                child.exec(command, function(error, stdout, stderr) {
                    if (error != null) {
                        callback(_elm_lang$core$Native_Scheduler.fail('Exec: ' + error));
                    } else {
                        callback(_elm_lang$core$Native_Scheduler.succeed('' + stdout));
                    }
                });
            });
    }

    function exit(error) {
        return _elm_lang$core$Native_Scheduler.nativeBinding(
            function(callback) {
                process.exit(error);
                return callback(_elm_lang$core$Native_Scheduler.succeed(Utils.Tuple0));
            });
    }

    return {
        argv: _elm_lang$core$Native_List.fromArray(process.argv),
        execPath: process.execPath,
        execArgv: _elm_lang$core$Native_List.fromArray(process.execArgv),
        exec: exec,
        exit: exit,
        pid: process.pid,
        version: process.version
    };
}();


(function() {
    if (typeof module == 'undefined') {
        throw new Error('You are trying to run a node Elm program in the browser!');
    }
})();
