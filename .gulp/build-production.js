var gulp = require('gulp');
var html2js = require('gulp-ng-html2js');
var bowerFiles = require('main-bower-files');
var concat = require('gulp-concat');
var inject = require('gulp-inject');
var merge = require('gulp-merge');
var filesort = require('gulp-angular-filesort');
var ngmin = require('gulp-ngmin');
var uglify = require('gulp-uglify');

var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');

var cfg = require('./config');

function buildTemplates () {
    return gulp.src(cfg.paths.templates)
        .pipe(html2js({
            moduleName: 'templates',
            declareModule: false
        }))
        .pipe(concat('templates.js'))
        .pipe(ngmin())
        .pipe(uglify({
            mangle: true
        }));
}

function buildVendor () {
    return gulp.src(bowerFiles())
        .pipe(concat('libs.js'))
        .pipe(uglify({
            mangle: true
        }));
}

function buildApp () {
    return gulp.src(cfg.paths.app)
        .pipe(filesort())
        .pipe(concat('app.js'))
        .pipe(ngmin())
        .pipe(uglify({
            mangle: true
        }));
}

function buildStyles () {
    return gulp.src(cfg.paths.style)
        .pipe(less())
        .pipe(minifyCss())
        .pipe(gulp.dest(cfg.paths.build))
}

function buildRelease () {
    return merge(buildVendor(), buildApp(), buildTemplates())
        .pipe(concat('release.js'))
        .pipe(gulp.dest(cfg.paths.build));
}

function build () {
    return gulp.src(cfg.paths.main)
        .pipe(inject(buildRelease(), {relative: true, ignorePath: '../build'}))
        .pipe(inject(buildStyles(), {relative: true, ignorePath: '../build'}))
        .pipe(gulp.dest(cfg.paths.build));
}

gulp.task('build', build);