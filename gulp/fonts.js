var gulp = require('gulp');
var path = require('path');
var srcDir = ['./node_modules/bootstrap/fonts/*.{ttf,woff,woff2,eof,svg}', './src/fonts/**'];
var destDir = 'dist/fonts';
module.exports = {
    task: function () {
        gulp.src(srcDir)
            .pipe(gulp.dest(destDir));
    },
    src: srcDir,
    dest: destDir
};