// task/streams/theme.js
(function() {
  "use strict";

  var gulp = require('gulp')

  // returns: a vinyl stream of theme asset files
  module.exports = function() {
    return gulp.src([
      'semantic/dist/semantic.js',
      'semantic/dist/semantic.css'
    ])
  }

})();
