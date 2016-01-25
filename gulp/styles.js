var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var concatCSS = require('gulp-concat-css');
var autoprefixer = require('gulp-autoprefixer');
var gulpif = require('gulp-if');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');
var srcDir = './src/stylesheets/*.scss';
var vendors = [
    "./node_modules/bootstrap/dist/css/bootstrap.css",
    "./node_modules/bootstrap/dist/css/bootstrap-theme.css"
    //'public/vendors/font-awesome/css/font-awesome.css'
     ];
var destDir = './dist/stylesheets';
module.exports = function (production) {
    return {
        task: function () {
            var paths = [].concat(vendors).concat(srcDir);
            return gulp.src(paths)
                .pipe(gulpif(!production, sourcemaps.init()))
                .pipe(sass())
                .pipe(autoprefixer({
                    browsers: ['last 6 versions'],
                    cascade: false
                }))
                .pipe(concatCSS('main.css', {rebaseUrls: false}))
                .pipe(gulpif(production, minifyCSS()))
                .pipe(gulpif(!production, sourcemaps.write()))
                .pipe(gulp.dest(destDir));
        },
        src: srcDir,
        dest: destDir
    };
};