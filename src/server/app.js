(function() {
  var config = require('./config'),
      express = require('express'),
      app = express()
  console.log('running on %s', config.port)
  app.use(express.static(config.public_dir))
  app.listen(config.port)
})();
