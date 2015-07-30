Elm.Native = Elm.Native || {};
Elm.Native.Node = Elm.Native.Node || {};
Elm.Native.Node.File = Elm.Native.Node.File || {};

Elm.Native.Node.File.make = function(localRuntime) {
	'use strict';

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Node = localRuntime.Native.Node || {};
	localRuntime.Native.Node.File = localRuntime.Native.Node.File || {};
	if ('values' in localRuntime.Native.Node.File) {
		return localRuntime.Native.Node.File.values;
	}

	var Task = Elm.Native.Task.make(localRuntime);
	var Utils = Elm.Native.Utils.make(localRuntime);
	var List = Elm.Native.List.make(localRuntime);

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

	return localRuntime.Native.Node.File.values = {
		read: read,
	};
};
