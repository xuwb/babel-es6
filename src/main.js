(function (global, factory) {
    if (typeof define === "function") {
        define(['babel-runtime/core-js/promise'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('babel-runtime/core-js/promise'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.promise);
        global.main = mod.exports;
    }
})(this, function (_promise) {
    'use strict';

    var _promise2 = _interopRequireDefault(_promise);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    define(function (require) {
        // class Cls {
        //     constructor() {
        //         this.state = {
        //             text: 111
        //         }
        //     }
        // }
        // var c = new Cls;
        // console.log(c.state.text);

        var p = new _promise2.default(function (resolve, reject) {
            if (true) resolve;
        });
        p.then(function () {
            console.log('success');
        });
    });
});