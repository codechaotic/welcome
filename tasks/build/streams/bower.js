(function() {
  "use strict";

  var gulp = require('gulp'),
      bower_files = require('main-bower-files')

  // returns: a vinyl stream of bower asset files
  module.exports = function(){
    return gulp.src(bower_files())
  }

})();
