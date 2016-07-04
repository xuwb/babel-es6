module.exports = {
    watch: true,
    devtool: "source-map",
    resolve: {
        extensions: ['', '.js', '.jsx', '.es6']
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-runtime']
            }
        }, {
            test: /\.es6$/,
            loader: 'babel',
            exclude: /(node_modules)/,
            query: {
                presets: ['es2015'],
                plugins: ['transform-runtime']
            }
        }]
    }
};