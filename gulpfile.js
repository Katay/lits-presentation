var argv = require('optimist').argv;
var production = !!argv.production;
var gulp = require('gulp');
var path = require('path');
var img = require('./gulp/images');
var js = require('./gulp/javascripts')(production);
var styles = require('./gulp/styles')(production);
var fonts = require('./gulp/fonts');
var del = require('del');

console.log('production:', production);

gulp.task('sass', styles.task);
gulp.task('images', img.task);
gulp.task('js', js.task);
gulp.task('fonts', fonts.task);

gulp.task('watch', ['js', 'sass'], function () {
    gulp.watch(js.src, ['js']);
    gulp.watch([styles.src], ['sass']);
});

gulp.task('clean', function () {
    return del('./public/dist').then(function (paths) {
        console.log('Deleted files/folders:\n', paths.join('\n'));
    });
});

gulp.task('default', ['watch']);