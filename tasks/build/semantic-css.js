(function() {
  "use strict";

  var gulp = require('gulp'),
      plumber = require('gulp-plumber'),
      replace = require('gulp-replace'),
      print = require('gulp-print'),
      autoprefixer = require('gulp-autoprefixer'),
      concat = require('gulp-concat'),
      stripCssComments = require('gulp-strip-css-comments'),
      sourcemaps = require('gulp-sourcemaps'),
      minifyCss = require('gulp-minify-css'),
      less = require('gulp-less'),
      gutil = require('gulp-util'),
      path = require('path'),
      fs = require('fs'),

      //config
      paths = require('../config/paths'),
      globs = require('../config/globs'),
      settings = require('../config/tasks').settings

  module.exports = function(callback) {
    var path_to_theme = path.relative(paths.semantic.src,paths.src.theme)
    gutil.log(gutil.colors.yellow('building semantic css'))

    gulp.src(paths.semantic.definitions + globs.less)
      .pipe(print({colors: false, format: formatFilePath}))
      .pipe(plumber())
      .pipe(replace('theme.config',path.join(path_to_theme,'theme.config')))
      .pipe(sourcemaps.init())
      .pipe(less())
      .pipe(autoprefixer(settings.prefix))
      .pipe(stripCssComments({all: true}))
      .pipe(concat('semantic.css'))
      .pipe(minifyCss())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(paths.build.css))
      .on('end',callback)
  }

  function formatFilePath(fp) {
    var rel = path.relative(paths.semantic.definitions,fp)
    if(!fs.statSync(fp).isDirectory()) {
      gutil.log('[build semantic css]\t' + gutil.colors.green(rel))
    }
  }

})()
