(function() {
  "use strict";

  var gulp = require('gulp')

  module.exports = function(callback) {
    var src = './src/server/**/*',
        dest = './dist'

    return gulp.src(src)
      .pipe(gulp.dest(dest))
      .on('end', function() {
        gulp.start('build javascript')
        gulp.start('build stylesheet')
      })

  }

})();
