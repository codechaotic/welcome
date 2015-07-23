(function() {
  var koa               = require('koa'),
      serve             = require('koa-static'),
      app               = koa(),

      //config
      config            = require('./config'),

      //routers
      api               = require('./routers/api')

  app.use(serve(config.public_dir))
  app.use(api.routes())

  app.listen(config.port)
})();
