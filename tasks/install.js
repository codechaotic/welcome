(function() {
  "use strict";

  var gulp = require('gulp'),
      gutil = require('gulp-util')

  module.exports = function(callback) {
    gulp.start('install semantic')
    gulp.start('install build')
  }

})();
