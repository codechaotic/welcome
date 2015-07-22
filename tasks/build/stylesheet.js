(function() {
  "use strict";

  var gulp = require('gulp'),
      filter = require('gulp-filter'),
      minifyCss = require('gulp-minify-css'),
      stripCssComments = require('gulp-strip-css-comments'),
      print = require('gulp-print'),
      sourcemaps = require('gulp-sourcemaps'),
      gutil = require('gulp-util')

  module.exports = function(callback) {

    var
        bower_stream = require('./streams/bower')

    bower_stream()
      .pipe(print())
      .pipe(filter('**/*.css'))
      .pipe(sourcemaps.init())
      .pipe(stripCssComments({all: true}))
      .pipe(minifyCss())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('dist/public/css'))
      .on('error', gutil.log)
      .on('end', callback)
  }

})();
