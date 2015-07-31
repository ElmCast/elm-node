Elm.Native = Elm.Native || {};
Elm.Native.Node = Elm.Native.Node || {};

Elm.Native.Node.make = function(localRuntime) {
	'use strict';

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Node = localRuntime.Native.Node || {};
	if ('values' in localRuntime.Native.Node) {
		return localRuntime.Native.Node.values;
	}

	var Task = Elm.Native.Task.make(localRuntime);
	var Utils = Elm.Native.Utils.make(localRuntime);

	function log(string) {
		return Task.asyncFunction(function(callback) {
			console.log(string);
			return callback(Task.succeed(Utils.Tuple0));
		});
	}

	return localRuntime.Native.Node.values = {
		log: log,
	};
};

(function() {
	if (typeof module == 'undefined') {
		throw new Error('You are trying to run a node Elm program in the browser!');
	}

	if (module.exports === Elm) {
		return;
	}

	window = global;

	module.exports = Elm;
	setTimeout(function() {
		if (!module.parent) {
			setImmediate(Elm.worker, Elm.Main);
		}
	});
})();
