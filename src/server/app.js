(function() {

  var Zeninjector       = require('zeninjector'),
      zen               = new Zeninjector(),
      modules = [
        'config.js',
        'inject.js',
        'services/**/*.js',
        'models/**/*.js',
        'routers/**/*.js'
      ]

  zen.scan(modules).then(function() {
    zen.inject([ 'config', 'api_router', run ])
  })

  function run(config,api_router) {
    var serve           = require('koa-static'),
        koa             = require('koa'),
        app             = koa()

    app.use(serve(config.public_dir))
    app.use(api_router)

    app.listen(config.port)
  }

})()
