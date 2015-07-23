(function() {
  "use strict";

  var gulp = require('gulp'),
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
    gutil.log(gutil.colors.yellow('building semantic js'))

    gulp.src(paths.semantic.definitions + globs.js)
      .pipe(print({colors: false, format: formatFilePath}))
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(concat('semantic.js'))
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(paths.build.js))
      .on('end',callback)
  }

  function formatFilePath(fp) {
    var rel = path.relative(paths.semantic.definitions,fp)
    if(!fs.statSync(fp).isDirectory()) {
      gutil.log('[build semantic js]\t' + gutil.colors.green(rel))
    }
  }

})()
