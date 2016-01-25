var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    jpegoptim = require('imagemin-jpeg-recompress'),
    gifsicle = require('imagemin-gifsicle'),
    srcDir = ['./src/images/**'],
    destDir = './dist/images';
module.exports = {
    task: function () {
        return gulp.src(srcDir)
            .pipe(imagemin({
                optimizationLevel: 3,
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                use: [pngquant({
                    //quality: 30
                }), jpegoptim({
                    accurate: true,
                    loops: 3,
                    quality: 'high',
                    //min: 10,
                    //max: 80
                }), gifsicle({
                    interlaced: true
                })]
            }))
            .pipe(gulp.dest(destDir));
    },
    src: srcDir,
    dest: destDir
};