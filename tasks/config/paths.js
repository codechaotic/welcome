(function() {
  "use strict";

  exports.bower = 'bower_components/'
  exports.semantic = {
    src: 'bower_components/semantic/src/',
    definitions: 'bower_components/semantic/src/definitions/',
    themes: 'bower_components/semantic/src/semantic/src/themes/'
  }
  exports.src = {
    theme: 'src/theme/',
    client: 'src/client/',
    server: 'src/server/'
  }
  exports.build = {
    base: process.env.BUILD_DIR || 'dist/',
    css: 'dist/public/css',
    js: 'dist/public/js'
  }

})()
