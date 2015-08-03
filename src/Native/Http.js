Elm.Native = Elm.Native || {};
Elm.Native.Http = Elm.Native.Http || {};

Elm.Native.Http.make = function(localRuntime) {
	'use strict';

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Http = localRuntime.Native.Http || {};
	if ('values' in localRuntime.Native.Http) {
		return localRuntime.Native.Http.values;
	}

	var Task = Elm.Native.Task.make(localRuntime);
	var Utils = Elm.Native.Utils.make(localRuntime);

	var http = require('http');

	function get(url) {
		return Task.asyncFunction(function(callback) {
			http.get(url, function(res) {
				var data = "";
				res.on("data", function (chunk) {
						data += chunk.toString();
				});
				res.on("end", function () {
					return callback(Task.succeed(data));
				});
			}).on('error', function(err) {
				return callback(Task.fail({ ctor: 'NetworkError', _0: url }));
			});
		});
	}

	return localRuntime.Native.Http.values = {
		get: get,
	};
};

(function() {
	if (module.exports === Elm) {
		return;
	}

	if (typeof module == 'undefined') {
		throw new Error('You are trying to run a node Elm program in the browser!');
	}

	window = global;

	module.exports = Elm;
	setTimeout(function() {
		if (!module.parent) {
			if ('Main' in Elm) {
				setImmediate(Elm.worker, Elm.Main);
			} else {
				throw new Error('You are trying to run a node Elm program without a Main module.');
			}
		}
	});
})();
