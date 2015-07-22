global.config = require('./gulp.config')

var gulp = require('gulp')

loadTask('build', './tasks/build')
loadTask('build-javascript', './tasks/build/javascript')
loadTask('build-stylesheet', './tasks/build/stylesheet')

function loadTask(task,path) {
  gulp.task(task,require(path))
}
