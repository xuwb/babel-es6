(function() {
	var config = {
		base: './',
		alias: {
			'jquery'  : 'src/build/jquery-1.11.2',
			'init'	  : 'src/main'
		},
        paths: {
            'babel-runtime' : 'node_modules/babel-runtime',
            'core-js' : 'node_modules/core-js'
        },
		debug: true,
		charset: 'utf-8'
	}
	seajs.config(config);

	// 兼容cmd规范
    if (typeof define === 'function') {
        define(function(require, exports, module) {
            module.exports = config;
        });
    }

    return config;
})();
