webpackJsonp([4,9],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(48);


/***/ },

/***/ 8:
/***/ function(module, exports) {

	module.exports = 'A和B都引用C，同时A引用B。\
	打包时，A文件只会添加一次C文件内容，后面调用B时，只是调用对C输出内容的引用。\
	但是在两个html页面分别调用A和B时，C的内容相当于在每个页面都加载了一遍，增加了下载的资源。 \n \
	解决办法：1、将通用资源放到到页面 <script> 中，通过config文件中的 externals: { } 加载 \n'


/***/ },

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

	var c = __webpack_require__(8)
	var MySalute = "Hello World！\n";
	module.exports = MySalute + c;

/***/ }

});
//# sourceMappingURL=testExports_B.js.map