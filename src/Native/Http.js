//import Native.Http //

var _elmcast$elm_node$Native_Http = function() {

    var http = require('http');

    function get(url) {
        return _elm_lang$core$Native_Scheduler.nativeBinding(
            function(callback) {
                http.get(url, function(res) {
                    var data = "";
                    res.on("data", function (chunk) {
                        data += chunk.toString();
                    });
                    res.on("end", function () {
                        return callback(_elm_lang$core$Native_Scheduler.succeed(data));
                    });
                }).on('error', function(err) {
                    return callback(_elm_lang$core$Native_Scheduler.fail(
                        { ctor: 'NetworkError', _0: url }));
                });
            });
    }

    function serve(port, task_function) {
        return _elm_lang$core$Native_Scheduler.nativeBinding(
            function(callback) {
                http.createServer(function(request, response) {
                    _elm_lang$core$Native_Scheduler.rawSpawn(
                        task_function(request)(response));
                }).listen(port);
                return callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
            });
    }

    function get_url(request) {
        return request.url;
    }

    function response_end(response, s) {
        response.end(s);
        return _elm_lang$core$Native_Utils.Tuple0;
    }

    return {
        get: get,
        serve: F2(serve),
        get_url: get_url,
        response_end: F2(response_end)
    };
}();


(function() {
    if (typeof module == 'undefined') {
        throw new Error('You are trying to run a node Elm program in the browser!');
    }
})();
