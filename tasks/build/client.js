(function() {
  "use strict";

  var gulp = require('gulp'),
      sort = require('gulp-sort'),
      concat = require('gulp-concat'),
      plumber = require('gulp-plumber'),
      print = require('gulp-print'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify'),
      sourcemaps = require('gulp-sourcemaps'),
      gutil = require('gulp-util'),
      path = require('path'),
      fs = require('fs'),

      //config
      paths = require('../config/paths'),
      globs = require('../config/globs'),
      settings = require('../config/tasks').settings

  module.exports = function(callback) {
    gutil.log(gutil.colors.yellow('building client'))
    gulp.src( paths.src.client + globs.js )
      .pipe(sort({ comparator: order_for_angular }))
      .pipe(print({colors: false, format: formatFilePath}))
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(paths.build.js))
      .on('end',callback)
  }

  function order_for_angular( a, b ) {
    var priority = [
          'controller',
          'config',
          'module'
        ],
        priority_a = priority.indexOf(path.basename(a.path).split('.')[1]),
        priority_b = priority.indexOf(path.basename(b.path).split('.')[1])
    return priority_b - priority_a
  }

  function formatFilePath(fp) {
    var rel = path.relative(paths.src.client,fp)
    if(!fs.statSync(fp).isDirectory()) {
      gutil.log('[build client]\t' + gutil.colors.green(rel))
    }
  }
})();
