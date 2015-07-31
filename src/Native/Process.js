Elm.Native = Elm.Native || {};
Elm.Native.Process = Elm.Native.Process || {};

Elm.Native.Process.make = function(localRuntime) {
	'use strict';

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Process = localRuntime.Native.Process || {};
	if ('values' in localRuntime.Native.Process) {
		return localRuntime.Native.Process.values;
	}

	var Task = Elm.Native.Task.make(localRuntime);
	var Utils = Elm.Native.Utils.make(localRuntime);
	var List = Elm.Native.List.make(localRuntime);

	function exit(error) {
		return Task.asyncFunction(function(callback) {
			process.exit(error);
			return callback(Task.succeed(Utils.Tuple0));
		});
	}

	return localRuntime.Native.Process.values = {
		argv: List.fromArray(process.argv),
		exit: exit,
		version: process.version,
	};
};
