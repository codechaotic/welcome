var gulp              = require('gulp'),

    build             = require('./tasks/build'),
    buildSemanticCSS  = require('./tasks/build/semantic-css'),
    buildSemanticJS   = require('./tasks/build/semantic-js'),
    buildClient       = require('./tasks/build/client'),
    buildServer       = require('./tasks/build/server'),
    buildBowerFiles   = require('./tasks/build/bowerfiles')

gulp.task('build', build)
gulp.task('build-semantic-css', buildSemanticCSS)
gulp.task('build-semantic-js',buildSemanticJS)
gulp.task('build-client', buildClient)
gulp.task('build-server', buildServer)
gulp.task('build-bowerfiles', buildBowerFiles)

gulp.task('build-semantic', [
  'build-semantic-css',
  'build-semantic-js'
])
