(function() {
  "use strict";

  var gulp = require('gulp')

  module.exports = function(callback) {
    gulp.start('build-semantic-css')
    gulp.start('build-semantic-js')
    gulp.start('build-client')
    gulp.start('build-server')
    gulp.start('build-bowerfiles')
  }

})()
