// task/streams/client.js
(function() {
  "use strict";

  var gulp = require('gulp'),
      browserify = require('browserify'),
      source = require('vinyl-source-stream'),
      buffer = require('vinyl-buffer')

  // returns: a vinyl stream of client asset files
  module.exports = function() {
    var b = browserify({ entries: 'src/client/app.js' })

    return b.bundle()
      .pipe(source('app.js'))
      .pipe(buffer())
  }

})();
