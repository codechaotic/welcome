(function() {

  //@autoexport
  module.exports.config = {
    mongo_url:          process.env.MONGO_URL,
    port:               process.env.PORT || 8080,
    public_dir:         'public'
  }

})();
