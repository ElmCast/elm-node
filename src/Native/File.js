Elm.Native = Elm.Native || {};
Elm.Native.File = Elm.Native.File || {};

Elm.Native.File.make = function(localRuntime) {
	'use strict';

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.File = localRuntime.Native.File || {};
	if ('values' in localRuntime.Native.File) {
		return localRuntime.Native.File.values;
	}

	var Task = Elm.Native.Task.make(localRuntime);

	var fs = require('fs');

	function read(path) {
		return Task.asyncFunction(function(callback) {
			fs.readFile(path, 'utf8', function(err, data) {
				if (err) {
					return callback(Task.fail({ ctor: 'ReadError', _0: err.path }));
				}
				return callback(Task.succeed(data));
			});
		});
	}

	return localRuntime.Native.File.values = {
		read: read,
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
