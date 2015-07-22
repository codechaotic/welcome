(function() {
  "use strict";

  var gulp = require('gulp'),
      spawn = require('../helpers/spawn'),
      gutil = require('gulp-util')

  module.exports = function(callback) {
    gutil.log('Installing Build Dependencies')
    spawn('npm',['install'],'dist/').stopped()
      .progress(gutil.log)
      .then(callback)
      .done()
  }

})();
