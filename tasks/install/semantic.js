(function() {
  "use strict";

  var gulp = require('gulp'),
      spawn = require('../helpers/spawn'),
      gutil = require('gulp-util')

  module.exports = function(callback) {
    gutil.log('Installing Semantic Dependencies')
    spawn('npm',['install'],'semantic/').stopped()
      .then(function() {
        gutil.log('Building Semantic')
        return spawn('gulp',['build'],'semantic/').stopped()
      })
      .progress(gutil.log)
      .then(callback)
      .done()
  }

})();
