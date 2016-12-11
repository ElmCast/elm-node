//import Native.Url //

var _elmcast$elm_node$Native_Url = function() {

	  var url = require('url');

    function resolve(ps) {
		    var b = url.resolve.apply(url.resolve, _elm_lang$core$Native_List.toArray(ps));
		    console.log(b);
		    return b;
    }

    return {
        resolve: resolve
    };
}();


(function() {
	  if (typeof module == 'undefined') {
		    throw new Error('You are trying to run a node Elm program in the browser!');
	  }
})();
