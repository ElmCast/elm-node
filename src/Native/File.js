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
					return callback(Task.fail({ ctor: 'FileError' }));
				}
				return callback(Task.succeed(data));
			});
		});
	}

	return localRuntime.Native.File.values = {
		read: read,
	};
};
