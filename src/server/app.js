(function() {
  var koa             = require('koa'),
      route           = require('koa-route'),
      serve           = require('koa-static'),
      body            = require('koa-body'),
      app             = koa(),

      config          = require('./config')

  app.use(serve(config.public_dir))
  app.listen(config.port)
})();
