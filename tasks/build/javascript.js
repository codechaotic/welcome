(function() {
  "use strict";

  var gulp = require('gulp'),
      filter = require('gulp-filter'),
      uglify = require('gulp-uglify'),
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

    es.merge( client_stream(), bower_stream() )
      .pipe(print())
      .pipe(filter('**/*.js'))
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('dist/public/js'))
      .on('error', gutil.log)
      .on('end', callback)
  }

})();
