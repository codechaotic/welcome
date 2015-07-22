(function() {
  "use strict";

  var gulp = require('gulp'),
      browserify = require('browserify'),
      source = require('vinyl-source-stream'),
      buffer = require('vinyl-buffer'),
      uglify = require('gulp-uglify'),
      sourcemaps = require('gulp-sourcemaps'),
      gutil = require('gulp-util')


  module.exports = function(callback) {
    var b = browserify({
      entries: 'src/client/app.js',
      debug: true
    });

  b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/public/js'))
    .on('error', gutil.log)
    .on('end', callback)
  }

})();
