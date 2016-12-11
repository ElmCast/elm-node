//import Native.File //

var _elmcast$elm_node$Native_File = function() {

    var fs = require('fs');

    function read(path) {
        return _elm_lang$core$Native_Scheduler.nativeBinding(
            function(callback) {
                fs.readFile(path, 'utf8', function(err, data) {
                    if (err) {
                        return callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'ReadError', _0: err.path }));
                    }
                    return callback(_elm_lang$core$Native_Scheduler.succeed(data));
                });
            });
    }

    function write(path, data) {
        return _elm_lang$core$Native_Scheduler.nativeBinding(
            function(callback) {
                fs.writeFile(path, data, function(err) {
                    if (err) {
                        return callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'WriteError', _0: err.path }));
                    }
                    return callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
                });
            });
    }

    function lstat(path) {
        return _elm_lang$core$Native_Scheduler.nativeBinding(
            function(callback) {
                fs.lstat(path, function(err, stat) {
                    if (err) {
                        return callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'ReadError', _0: "" }));
                    }
                    stat['_'] = {};
                    return callback(_elm_lang$core$Native_Scheduler.succeed(stat));
                });
            });
    }

    return {
        read: read,
        write: F2(write),
        lstat: lstat
    };
}();


(function() {
    if (typeof module == 'undefined') {
        throw new Error('You are trying to run a node Elm program in the browser!');
    }
})();
