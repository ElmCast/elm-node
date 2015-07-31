Elm.Native = Elm.Native || {};
Elm.Native.Node = Elm.Native.Node || {};

Elm.Native.Node.make = function(localRuntime) {
	'use strict';

	localRuntime.Native = localRuntime.Native || {};
	localRuntime.Native.Node = localRuntime.Native.Node || {};
	if ('values' in localRuntime.Native.Node) {
		return localRuntime.Native.Node.values;
	}

	return localRuntime.Native.Node.values = {
		version: process.version,
	};
};

(function() {
	if (typeof module == 'undefined') {
		throw new Error('You are trying to run a node Elm program in the browser!');
	}
})();

module.exports = Elm;
setTimeout(function() {
	if (!module.parent) {
		setImmediate(Elm.worker, Elm.Main);
	}
});
