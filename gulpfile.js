var gulp = require('gulp');

// babel
// (src.*)为文件名之前的完整路径
var matchRex = /(src.*)\/.*\.(\w+)/;
var babel = require('gulp-babel');
var babelTask = (e) => {

    var match = e.path.replace(/\\/g, '/').match( matchRex ),
        file, filePath;

    // if(match.length == 0) {
    //     console.log('path error');
    //     return;
    // }
    if(match.length) {

        file = match[0];   // src/dataRow.jsx
        filePath = match[1];

        gulp.src( file )
        .pipe( babel( { 
            presets: ['es2015', 'react'], 
            plugins: ['transform-runtime']  // 'transform-es2015-modules-umd'
        } ).on('error', (e) => {
            console.error('error', e.message);
        }) )
        .pipe(gulp.dest( filePath ));
    }
};

// webpack
var del = require('del');
var webpack = require('webpack-stream');
// vinyl-named 可以自动对生成文件命名，
// 不需要通过webpack.config中的output来命名
var named = require('vinyl-named');
var path = require('path');

gulp.task('webpack', (cb) => {
    // console.log(path.join(__dirname, 'src/testPath.js'));
    del(['dist/**/*.js'], cb);
    gulp.src(['src/**/*.jsx', 'src/**/*.es6', 'src/js/**/*.js'])
        .pipe(named())
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('dist'));
});

// watch
gulp.task('watch', () => {
    gulp.watch(['src/**/*.jsx', 'src/**/*.es6'], ['webpack']);
})
// gulp.task('watch', function() {
//     // babel & jsx
//     gulp.watch(['src/**/*.jsx', 'src/**/*.es6']).on('change', (event) => {
//         // console.log('File ' + event.path + ' was ' + event.type + ', running tasks...[babel]');
//         // babelTask(event);
//         console.log('File ' + event.path + ' was ' + event.type + ', running tasks...[webpack]');
//         webPackTask(event);
//     });
// });

gulp.task('default', ['watch']);