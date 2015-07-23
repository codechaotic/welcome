(function() {
  "use strict";

  var gulp = require('gulp'),
      plumber = require('gulp-plumber'),
      print = require('gulp-print'),
      gutil = require('gulp-util'),
      path = require('path'),
      fs = require('fs'),

      //config
      paths = require('../config/paths'),
      globs = require('../config/globs'),
      settings = require('../config/tasks').settings

  module.exports = function(callback) {
    gutil.log(gutil.colors.yellow('building server'))
    gulp.src( paths.src.server + globs.all )
      .pipe(print({colors: false, format: formatFilePath}))
      .pipe(plumber())
      .pipe(gulp.dest(paths.build.base))
      .on('end',callback)
  }

  function formatFilePath(fp) {
    var rel = path.relative(paths.src.server,fp)
    if(!fs.statSync(fp).isDirectory()) {
      gutil.log('[build server]\t' + gutil.colors.green(rel))
    }
  }
})();
