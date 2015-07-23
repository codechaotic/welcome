(function() {
  "use strict";

  var gulp = require('gulp'),
      plumber = require('gulp-plumber'),
      print = require('gulp-print'),
      bower_files = require('main-bower-files'),
      flatten = require('gulp-flatten'),
      filter = require('gulp-filter'),
      stripCssComments = require('gulp-strip-css-comments'),
      sourcemaps = require('gulp-sourcemaps'),
      uglify = require('gulp-uglify'),
      minifyCss = require('gulp-minify-css'),
      gutil = require('gulp-util'),
      path = require('path'),
      fs = require('fs'),

      //config
      paths = require('../config/paths'),
      globs = require('../config/globs'),
      settings = require('../config/tasks').settings

  module.exports = function(callback) {
    var jsFilter = filter(globs.js),
        cssFilter = filter(globs.css)
    gutil.log(gutil.colors.yellow('building bowerfiles'))
    gulp.src(bower_files(),{base: paths.bower})
      .pipe(print({colors: false, format: formatFilePath}))
      .pipe(plumber())
      .pipe(flatten())
      //js files
      .pipe(jsFilter)
      .pipe(sourcemaps.init())
        .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(paths.build.js))
      .pipe(jsFilter.restore())
      //css files
      .pipe(cssFilter)
      .pipe(sourcemaps.init())
        .pipe(stripCssComments({all: true}))
        .pipe(minifyCss())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(paths.build.css))
      .pipe(cssFilter.restore())
      //other?
      .on('end',callback)
  }

  function formatFilePath(fp) {
    var rel = path.relative(paths.bower,fp)
    if(!fs.statSync(fp).isDirectory()) {
      gutil.log('[build bowerfiles]\t' + gutil.colors.green(rel))
    }
  }
})();
