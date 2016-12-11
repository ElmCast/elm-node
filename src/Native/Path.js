//import Native.Path //

var _elmcast$elm_node$Native_Path = function() {

    var path = require('path');

    function normalize(p) {
        return path.normalize(p);
    }

    function join(ps) {
        return path.join.apply(path.join,
                               _elm_lang$core$Native_List.toArray(ps));
    }

    function resolve(ps) {
        return path.resolve.apply(path.resolve,
                                  _elm_lang$core$Native_List.toArray(ps));
    }

    function isAbsolute(p) {
        return path.isAbsolute(p);
    }

    function relative(fromP, toP) {
        return path.relative(fromP, toP);
    }

    function dirname(p) {
        return path.dirname(p);
    }

    function basename(p, ext) {
        return path.basename(p, ext);
    }

    function extname(p) {
        return path.extname(p);
    }

    return {
        normalize: normalize,
        join: join,
        resolve: resolve,
        isAbsolute: isAbsolute,
        relative: F2(relative),
        dirname: dirname,
        basename: F2(basename),
        extname: extname,
        sep: path.sep,
        delimiter: path.delimier
    };
}();


(function() {
    if (typeof module == 'undefined') {
        throw new Error('You are trying to run a node Elm program in the browser!');
    }
})();
