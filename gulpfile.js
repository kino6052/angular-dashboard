'use strict';

var gulp = require('gulp');
var jade = require('gulp-jade');
var angularFilesort = require('gulp-angular-filesort');
var inject = require('gulp-inject');
var exec = require('child_process').exec;
var bower = require('main-bower-files');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('jade', function() {
  var filesToJade = [
    '!./client/app/**/layout.jade',
    '!./client/app/layouts',
    './client/app/**/*.jade'
  ];

  return gulp.src(filesToJade)
  .pipe(jade({
    pretty: true
  }))
  .pipe(gulp.dest('./dist/'))
});

gulp.task('lib-scripts', function(){
  var filesToMove = [
    './client/assets/lib/jquery/dist/jquery.js',
    './client/assets/lib/semantic/dist/semantic.js'
  ];

  return gulp.src(filesToMove)
  .pipe(gulp.dest('./dist/assets/js'))
});

gulp.task('app-scripts', function(){
  var filesToMove = [
      './client/app/**/*.js',
      './client/assets/js/*.js'
    ];

  return gulp.src(filesToMove)
  .pipe(sourcemaps.init())
  .pipe(concat('app.js'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./dist/assets/js'));
});

gulp.task('angular-scripts', function(){
  var filesToConcat = [
    './client/assets/lib/angular/angular.js',
    './client/assets/lib/angular-css/angular-css.js',
    './client/assets/lib/angular-ui-router/release/angular-ui-router.js'
  ];

  return gulp.src(filesToConcat)
  .pipe(sourcemaps.init())
  .pipe(concat('angular.js'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./dist/assets/js'));
});

gulp.task('lib-css', function(){
  var filesToConcat = [
    './client/assets/lib/semantic/dist/semantic.css',
    './client/assets/css/*.css'
  ];

  return gulp.src(filesToConcat)
  .pipe(gulp.dest('./dist/assets/css'));
});

gulp.task('inject-js', function () {
  var includes = [
    './dist/assets/js/jquery.js',
    './dist/assets/js/semantic.js',
    './dist/assets/js/angular.js',
    './dist/assets/js/app.js'
  ];

  return gulp.src('./dist/index.html', { base: './dist/'})
  .pipe(inject(gulp.src(includes), {
    relative: false,
    transform: function (filepath) {
      return '<script type="text/javascript" src="' + filepath.replace("/dist","") + '"></script>';
    }
  }))
  .pipe(gulp.dest('./dist'));
});

gulp.task('inject-css', function () {
  var includes = [
    './dist/assets/css/*.css'
  ];

  return gulp.src('./dist/index.html', { base: './dist/'})
  .pipe(inject(gulp.src(includes), {
    relative: false,
    transform: function (filepath) {
      return '<link rel="stylesheet" href="' + filepath.replace("/dist","") + '">';
    }
  }))
  .pipe(gulp.dest('./dist'));
});

function runCommand(command) {
  return function (cb) {
    exec(command, function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
  }
}

gulp.task('default', gulp.series(
  'jade',
  'app-scripts',
  'angular-scripts',
  'lib-scripts',
  'lib-css',
  'inject-js',
  'inject-css'));

// gulp.task('default', sync.async(['jade', 'app-scripts', 'angular-scripts', 'lib-scripts', 'lib-css', 'inject-js', 'inject-css']), function(){
//   console.log('** Build process complete **');

//   gulp.watch(['./client/app/**/*.jade'], sync.async(['jade']));
//   gulp.watch(['./dist/**/*.html'], sync.async(['inject-js', 'inject-css']));
//   gulp.watch(['./dist/**/*.js'], sync.async(['inject-js']));
//   gulp.watch(['./client/app/**/*.js', './client/assets/js/*.js'], sync.async(['app-scripts']));
// });