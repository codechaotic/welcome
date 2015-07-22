global.config = require('./gulp.config')

var gulp = require('gulp')

loadTask('build', './tasks/build')
loadTask('build javascript', './tasks/build/javascript')
loadTask('build stylesheet', './tasks/build/stylesheet')

loadTask('install', './tasks/install')
loadTask('install semantic', './tasks/install/semantic')
loadTask('install build', './tasks/install/build')

function loadTask(task,path) {
  gulp.task(task,require(path))
}
