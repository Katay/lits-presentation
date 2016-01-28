var path = require('path');
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var gulpif = require('gulp-if');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var srcDir = './src/javascripts/**/*.js',
    vendors = [
        "./node_modules/jquery/dist/jquery.js",

        "./node_modules/fullpage.js/jquery.fullPage.js"
    ],
    destDir = 'public/dist/javascripts';
module.exports = function (production) {
    return {
        task: function () {
            var paths = [].concat(vendors).concat(srcDir);
            return gulp.src(paths)
                .pipe(gulpif(!production, sourcemaps.init()))
                .pipe(concat('main.js'))
                .pipe(gulpif(production, uglify()))
                .pipe(gulpif(!production, sourcemaps.write()))
                .pipe(gulp.dest(destDir));
        },
        src: srcDir,
        dest: destDir
    };
};