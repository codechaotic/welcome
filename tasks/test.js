(function() {
  "use strict";

  var gulp = require('gulp'),
      Q = require('q'),
      http = require('http')

  gulp.task('test', test)

  function test() {
    ping('http://localhost')
      .then( function(up) {
        if(up) console.log('RUNNING')
        else console.log('CAN\'T REACH')
      })
  }

  function ping(url) {
    var deferred = Q.defer()
    http.get(url, function(res) {
      if(res.statusMessage === 'OK' ) deferred.resolve(true)
    }).on('error', function(e) {
      if(e.code === 'ECONNREFUSED') deferred.resolve(false)
      deferred.reject(new Error('ping failed'))
    })
    return deferred.promise
  }

})();
