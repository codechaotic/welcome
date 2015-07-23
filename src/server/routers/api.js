(function() {

  var Router            = require('koa-router'),
      router = new Router({ prefix: '/api/v1' }),

      //middleware
      body              = require('koa-body')(),
      dataservice       = require('../middleware/dataservice')

  module.exports = router

  router
    .get('/test', dataservice, require('./api/test'))

})();
