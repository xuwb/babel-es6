//__dirname 获取当前项目的绝对路径，path.join(a, b)相当于 a+b
var path = require('path');
var webpack = require('webpack');

module.exports = {
    watch: true,
    devtool: "source-map",
    resolve: {
        extensions: ['', '.js', '.jsx', '.es6'],
        root: path.join(__dirname, 'src/'),      // 获取项目的绝对路径
        alias: {
            testExports: path.join(__dirname, 'src/js/testExports'),
            jquery: path.join(__dirname, 'src/build/jquery-1.11.2')
        }
    },
    // 用于加载外部js文件，不会打包到最终生成文件中
    // 需要在 html 文件中添加<script jquery>
    externals: {
        "$": "jQuery"
    },
    // 在js文件中可直接使用 $ 不需要再require('jquery')引入。会打包到最终生成文件中
    // plugins: [
    //     new webpack.ProvidePlugin({
    //         "$": "jquery"
    //     })
    // ],
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