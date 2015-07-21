(function() {
  "use strict";

  var gulp = require('gulp')

  gulp.task('build', build)

  function build() {
    var src = './src/**/*',
        dest = './dist'

    return gulp.src(src)
      .pipe(gulp.dest(dest))
  }

})();
