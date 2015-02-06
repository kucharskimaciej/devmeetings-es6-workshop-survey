var gulp = require('gulp');
var watch = require('gulp-watch');

var cfg = require('./config');

function watchFiles () {
    watch(cfg.paths.vendor, function () {
        gulp.start('build-vendor');
    });
    watch([cfg.paths.app], function () {
        gulp.start('build');
    });
    watch(cfg.paths.main, function () {
        gulp.start('build');
    });
    watch(cfg.paths.templates, function () {
        gulp.start('build-templates');
    });
}

gulp.task('watch', watchFiles);