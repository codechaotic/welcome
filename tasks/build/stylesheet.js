(function() {
  "use strict";

  var gulp = require('gulp'),
      filter = require('gulp-filter'),
      minifyCss = require('gulp-minify-css'),
      stripCssComments = require('gulp-strip-css-comments'),
      print = require('gulp-print'),
      sourcemaps = require('gulp-sourcemaps'),
      gutil = require('gulp-util'),
      es = require('event-stream')

  module.exports = function(callback) {

    /* Create a stream by merging component streams
       of raw uncompressed javascript resource files

         SOURCE 1 O---------.
         SOURCE 2 O---------|--process--o> DEST
         SOURCE 3 O---------'

    */

    var client_stream = require('./streams/client'),
        bower_stream = require('./streams/bower'),
        theme_stream = require('./streams/theme')

    es.merge( bower_stream(), theme_stream() )
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
