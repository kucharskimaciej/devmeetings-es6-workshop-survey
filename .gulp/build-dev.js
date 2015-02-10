var gulp = require('gulp');
var html2js = require('gulp-ng-html2js');
var bowerFiles = require('main-bower-files');
var concat = require('gulp-concat');
var inject = require('gulp-inject');
var es = require('event-stream');
var filesort = require('gulp-angular-filesort');

var less = require('gulp-less');
var cleancss = new require("less-plugin-clean-css")({ advanced: true });


var cfg = require('./config');

function buildTemplates () {
    return gulp.src(cfg.paths.templates)
        .pipe(html2js({
            moduleName: 'templates',
            declareModule: false
        }))
        .pipe(concat('templates.js'))
        .pipe(gulp.dest(cfg.paths.build));
}

function buildVendor () {
    return gulp.src(bowerFiles())
        .pipe(concat('libs.js'))
        .pipe(gulp.dest(cfg.paths.build))
}

function buildApp () {
    return gulp.src(cfg.paths.app)
        .pipe(filesort())
        .pipe(concat('app.js'))
        .pipe(gulp.dest(cfg.paths.build))
}

function buildStyles () {
    return gulp.src(cfg.paths.style)
        .pipe(less())
        .pipe(gulp.dest(cfg.paths.build))
}

function build () {
    gulp.src(cfg.paths.main)
        .pipe(inject(buildVendor(), { name: 'bower'}))
        .pipe(inject(
            es.merge(gulp.src(cfg.paths.app).pipe(filesort()), buildTemplates())
        ))
        .pipe(inject(buildStyles()))
        .pipe(gulp.dest(cfg.paths.build));
}


gulp.task('build-templates', buildTemplates);
gulp.task('build-vendor', buildVendor);
gulp.task('build-app', buildApp);
gulp.task('build-styles', buildStyles);
gulp.task('build', build);
